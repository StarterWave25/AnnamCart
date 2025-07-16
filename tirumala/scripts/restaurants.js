const restaurantsContainer = document.querySelector('.restaurants-container');

fetch('../data/restaurants.php')
  .then((response) => {
    return response.json();
  })
  .then((restaurants) => {
    restaurants[1].forEach((restaurant) => {
      restaurantsContainer.innerHTML += `
        <a href="${restaurant.res_URL}" class="restaurant-info">
            <div class="restaurant-photo">
                <img src="../img/osa.png" alt="restaurant-img">
                <h4>${restaurant.offer}</h4>
            </div>
            <div class="restaurant-details">
                <div class="restaurant-name">
                    <h2>${restaurant.res_name}</h2>
                    <h3>${restaurant.item_name}</h3>
                </div>
                <div class="restaurant-ratings">
                    <img src="../img/star2.png" alt="rating img">
                    <h5>${restaurant.ratings}</h5>
                </div>
            </div>
      </a>
        `
    });
  });

document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentElement;
    parent.classList.toggle('active');
  });
});
