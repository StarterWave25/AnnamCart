const mostOrderedContainer = document.querySelector('.ordered-food');

fetch('data/most-ordered-items.php').then((response) => {
    return response.json();
}).then((mostOrderedItems) => {
    mostOrderedItems.forEach((item) => {
        mostOrderedContainer.innerHTML += `
        <div class="most-ordered-foods">
        <div class="ordered-foods-image">
          <img src="img/poori.jpg" alt="">
        </div>
        <div class="ordered-foods-name">
          <div class="most-order-details">
            <h4 class="most-order-food-name">${item.item_name}</h4>
            <p class="order-place">${item.res_name}</p>
          </div>
          <div class="order-ratings">
            <div class="order-price">
              <h4 class="orginal-price"><del>₹${item.dprice}</del></h4>
              <h4 class="offer-price">₹${item.price}</h4>
            </div>
            <div class="star-rating">
              <img src="img/star.png" alt="">
              <h4>${item.ratings}</h4>
            </div>
          </div>
        </div>
      </div>
        `
    });
});


const restaurantsContainer = document.querySelector('.restaurants-container');

fetch('data/restaurants.php').then((response) => {
    return response.json();
}).then((restaurants) => {
    restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += `
        <div class="restaurant-info">
            <div class="restaurant-photo">
                <img src="img/osa.png" alt="" srcset="">
                <h4>${restaurant.offer}</h4>
            </div>
            <div class="restaurant-details">
                <div class="restaurant-name">
                    <h4>${restaurant.res_name}</h4>
                    <p>${restaurant.item_name}</p>
                </div>
                <div class="restaurant-ratings">
                    <img src="img/star.png" alt="">
                    <h5>${restaurant.res_ratings}</h5>
                </div>
            </div>
      </div>
        `
    });
});

