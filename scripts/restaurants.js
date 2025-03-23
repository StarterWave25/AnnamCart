const restaurantsContainer = document.querySelector('.restaurants-container');

fetch('data/restaurants.php')
  .then((response) => {
    return response.json();
  })
  .then((restaurants) => {
    restaurants[1].forEach((restaurant) => {
      restaurantsContainer.innerHTML += `
        <a href="restaurant.php?restaurant-id=${restaurant.res_id}" class="restaurant-info">
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
                    <h5>${restaurant.ratings}</h5>
                </div>
            </div>
      </a>
        `
    });
  });