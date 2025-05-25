
const popularContainer = document.querySelector('.popular-container');
const popularHeading = document.querySelector('.popular-heading');

window.addEventListener('load', () => {
    getPopularItems();
});

function getPopularItems() {

    restaurantContainer.style.display = 'none';
    popularContainer.style.display = 'grid';
    popularHeading.style.display = 'flex';
    popularContainer.innerHTML = '';

    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    if (query) {
        if (query.length > 1) {
            searchAction(query);
        }
    }

    fetch('data/search.php').then((response) => {
        return response.json();
    })
        .then((popularItems) => {
            popularItems.forEach((item) => {
                popularContainer.innerHTML += `
                    <div class="food-name" onclick="searchAction('${item.item_name}')">
                        <a class="food">
                            <img src="img/img7.jpeg" alt="food-item">
                        </a>
                        <div class="name">
                            ${item.item_name}
                        </div>
                    </div>`;
            });
        });
}

const restaurantContainer = document.querySelector('.restaurant-container');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchInput.addEventListener('input', () => {
    if (searchInput.value.length < 3) {
        searchBtn.style.opacity = '0.5';
        searchBtn.style.pointerEvents = 'none';
    }
    else {
        searchBtn.style.opacity = '1';
        searchBtn.style.pointerEvents = 'all';
        restaurantContainer.style.display = 'none';
        popularContainer.style.display = 'grid';
        popularHeading.style.display = 'flex';
    }
});

searchInput.addEventListener('click', () => {
    getPopularItems();
});


function checkKey(event) {
    if (event.key === 'Enter' && searchInput.value.length >= 3) {
        searchAction(null);
    }
}



async function searchAction(query) {

    popularContainer.style.display = 'none';
    popularHeading.style.display = 'none';
    restaurantContainer.style.display = 'grid';

    let searchValue = searchInput.value || query;
    restaurantContainer.innerHTML = '';
    const request = await fetch(`data/search.php?query=${searchValue}`);
    let searchItems = await request.json();

    searchItems = searchItems.filter((item) => {
        return checkSearchItem(Number(item.item_id));
    });

    searchItems.forEach((searchItem) => {
        restaurantContainer.innerHTML += `
            <div class="restaurant-card">
                <div class="food-details">
                    <div class="res-name-img-con">
                        <img src="img/meals.jpg" alt="">
                    </div>
                    <div class="res-details">
                        <div class="heading">
                            <h2>${searchItem.res_name}</h2>
                        </div>
                        <h3>${searchItem.item_name}</h3>
                        <h2>₹${searchItem.price}</h2>
                        <div class="review">
                            <div class="star">
                                <img src="img/star2.png" alt="">
                                <p>${searchItem.ratings}</p>
                                <p>&nbsp;&nbsp;(${searchItem.rperson})</p>
                            </div>
                        </div>
                        <button class="search-add-btn" data-restaurant-id="${searchItem.res_id}" data-item-id="${searchItem.item_id}"><span style="font-size: 1.9rem; margin-right: 5%;">+</span> Add</button>
                    </div>
                </div>
            </div>
        `;
    });

    if (searchItems.length < 1) {
        restaurantContainer.innerHTML = `
                <h2 class="search-result">No Results Found :(</h2>
            `;
        return;
    }

    const searchAddBtns = document.querySelectorAll('.search-add-btn');
    searchAddBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const restaurantId = Number(btn.dataset.restaurantId);
            const itemId = Number(btn.dataset.itemId);
            const userMobile = sessionStorage.getItem('userMobile');
            let cart = JSON.parse(localStorage.getItem(`storedItems-${userMobile}`)) || [];
            if (userMobile.length === 10) {
                if (cart.length === 0) {
                    localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify([{ itemId, quantity: 1, restaurantId }]));
                    location.href = `restaurant.php?restaurant-id=${restaurantId}`;
                }
                else if (cart[0].restaurantId === restaurantId) {
                    cart.push({ itemId, quantity: 1, restaurantId });
                    localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify(cart));
                    location.href = `restaurant.php?restaurant-id=${restaurantId}`;
                }
                else {
                    getChangeRestaurantPopup(itemId, 1, restaurantId);
                }
            }
            else {
                location.href = `restaurant.php?restaurant-id=${restaurantId}`;
            }
        });
    });
}


function getChangeRestaurantPopup(itemId, quantity, restaurantId) {
    const userMobile = sessionStorage.getItem('userMobile');
    document.querySelector('.restaurant-overlay').style.opacity = '1';
    document.querySelector('.restaurant-overlay').style.visibility = 'visible';
    document.querySelector('.changeItems-popup').style.opacity = '1';
    document.querySelector('.changeItems-popup').style.visibility = 'visible';

    document.querySelector('.clear-btn').addEventListener('click', () => {
        document.querySelector('.restaurant-overlay').style.opacity = '0';
        document.querySelector('.restaurant-overlay').style.visibility = 'hidden';
        document.querySelector('.changeItems-popup').style.opacity = '0';
        document.querySelector('.changeItems-popup').style.visibility = 'hidden';
        localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify([{ itemId, quantity, restaurantId }]));
        location.href = `restaurant.php?restaurant-id=${restaurantId}`;
    });

    document.querySelector('.no-btn').addEventListener('click', () => {
        document.querySelector('.restaurant-overlay').style.opacity = '0';
        document.querySelector('.restaurant-overlay').style.visibility = 'hidden';
        document.querySelector('.changeItems-popup').style.opacity = '0';
        document.querySelector('.changeItems-popup').style.visibility = 'hidden';
    })
}


searchBtn.addEventListener('click', () => {
    searchAction(null);
});


function checkSearchItem(itemId) {
    const userMobile = sessionStorage.getItem('userMobile');
    const cart = JSON.parse(localStorage.getItem(`storedItems-${userMobile}`)) || [];
    let flag = true;
    if (cart.length > 0) {
        cart.forEach((item) => {
            if (item.itemId === itemId) {
                flag = false;
                return;
            }
        });
    }
    return flag;
}
