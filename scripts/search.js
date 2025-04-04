
const popularContainer = document.querySelector('.popular-container');
const popularHeading = document.querySelector('.popular-heading');
fetch('data/search.php').then((response) => {
    return response.json();
})
    .then((popularItems) => {
        popularItems.forEach((item) => {
            popularContainer.innerHTML += `
        <div class="food-name">
            <a class="food">
                <img src="img/img2.jpeg" alt="" onclick="searchAction('${item.item_name}')">
            </a>
            <div class="name">
                ${item.item_name}
            </div>
        </div>`;
        });
    });


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
    }
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
    const searchItems = await request.json();
    if (searchItems.length < 1) {
        restaurantContainer.innerHTML += `
                <h2 class="search-result">No Results Found :(</h2>    
            `
        return;
    }
    searchItems.forEach((searchItem) => {
        restaurantContainer.innerHTML += `
            <div class="restaurant-card">
                <div class="heading">
                    <h2>${searchItem.res_name}</h2>
                </div>
                <div class="food-details">
                    <div class="res-name-img-con">
                        <img src="img/meals.jpg" alt="">
                    </div>
                    <div class="res-details">
                        <h3>${searchItem.item_name}</h3>
                        <h2>₹${searchItem.price}</h2>
                        <div class="review">
                            <div class="star">
                                <img src="img/star2.png" alt="">
                                <p>${searchItem.ratings}</p>
                                <p>&nbsp;&nbsp;(${searchItem.rperson})</p>
                            </div>
                        </div>
                        <button class="search-add-btn" data-restaurant-id="${searchItem.res_id}"><span style="font-size: 1.9rem; margin-right: 5%;">+</span> Add</button>
                    </div>
                </div>
            </div>
            `
    });

    const searchAddBtns = document.querySelectorAll('.search-add-btn');
    searchAddBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const restaurantId = btn.dataset.restaurantId;
            location.href=`restaurant.php?restaurant-id=${restaurantId}`;
        });
    });
    
}

searchBtn.addEventListener('click', () => {
    searchAction(null);
});
