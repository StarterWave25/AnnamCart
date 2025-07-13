const mostOrderedContainer = document.querySelector('.ordered-food');
fetch('data/most-ordered-items.php')
  .then((response) => {
    return response.json();
  })
  .catch((error) => {
    document.body.innerHTML = 'Something went wrong !';
  })
  .then((mostOrderedItems) => {
    mostOrderedItems.forEach((item) => {
      mostOrderedContainer.innerHTML += `
        <a href="restaurants-in-tirumala/${item.res_URL}" class="most-ordered-foods">
        <div class="ordered-foods-image">
          <img src="img/poori.jpg" alt="">
        </div>
        <div class="ordered-foods-name">
          <div class="most-order-details">
            <h3 class="most-order-food-name">${item.item_name}</h3>
            <h4 class="order-place">${item.res_name}</h4>
          </div>
          <div class="order-ratings">
            <div class="order-price">
              <h4 class="orginal-price"><del>₹${item.dprice}</del></h4>
              <h4 class="offer-price">₹${item.price}</h4>
            </div>
            <div class="star-rating">
              <img src="img/star2.png" alt="">
              <h4>${item.ratings}</h4>
            </div>
          </div>
        </div>
      </a> `
    });
  });


const restaurantsContainer = document.querySelector('.restaurants-container');

fetch('data/restaurants.php')
  .then((response) => {
    return response.json();
  })
  .then((topRestaurants) => {
    topRestaurants[0].forEach((restaurant) => {
      restaurantsContainer.innerHTML += `
        <a href="restaurants-in-tirumala/${restaurant.res_URL}" class="restaurant-info">
            <div class="restaurant-photo">
                <img src="img/osa.png" alt="" srcset="">
                <h4>${restaurant.offer}</h4>
            </div>
            <div class="restaurant-details">
                <div class="restaurant-name">
                    <h3>${restaurant.res_name}</h3>
                    <p>${restaurant.item_name}</p>
                </div>
                <div class="restaurant-ratings">
                    <img src="img/star2.png" alt="">
                    <h4>${restaurant.ratings}</h4>
                </div>
            </div>
      </a>
        `
    });
  });

async function getTopPicks() {

  const request = await fetch('data/data-toppicks.php');
  const response = await request.json();

  let topPicksHTML = '';
  response.forEach((item) => {
    topPicksHTML += `
      <div class="top-food-info" data-item-name="${item.item_name}">
        <div class="top-food-image">
          <img src="img/topPick.jpeg" alt="">
        </div>
        <div class="top-food-name">
          <p>${item.item_name}</p>
        </div>
      </div>
    `;
  });

  document.querySelector('.top-items').innerHTML = topPicksHTML;

  const topPicksCard = document.querySelectorAll('.top-food-info');
  if (topPicksCard) {
    topPicksCard.forEach((card) => {
      card.addEventListener('click', () => {
        const itemName = card.dataset.itemName;
        location.href = `search.html?query=${itemName}`;
      });
    });
  }
}

getTopPicks();


