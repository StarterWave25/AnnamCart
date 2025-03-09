async function getRestaurantData(restaurantId) {
  const response = await fetch(`data/data-restaurant.php?restaurant-id=${restaurantId}`);
  const restaurantData = await response.json();

  const resHead = document.querySelector('.restaurant-head');
  resHead.innerHTML = `
  <div class="title-offer">
    <h4>Best in ${restaurantData.resHead.item_name}</h4>
    <h2>${restaurantData.resHead.res_name}</h2>
    <div class="offer">
      <img src="img/discount.png" alt="offer-symbol">
      <h4>${restaurantData.resHead.offer}</h4>
    </div>
  </div>
  
  <div class="details-restaurant">
    <ul>
      <li>Near Place</li>
      <li>Time</li>
      <li>Distance</li>
    </ul>
  </div>

  <div class="ratings-container">
    <img src="img/star.png" alt="review-image">
    <h3>${restaurantData.resHead.ratings} (43)</h3>
  </div>
  `;


  const resBody = document.querySelector('.restaurant-body');
  restaurantData.resBody.forEach((item) => {
    resBody.innerHTML += `
    <div class="card-food-item">
        <div class="item-image">
          <img src="img/dosa.jpg" alt="">
        </div>
        <div class="item-details">
          <div class="item-name">
            <h3>${item.item_name}</h3>
            <img src="img/fav.png" alt="favorite">
          </div>
          <div class="item-cost">
            <del>₹${item.dprice}</del>
            <h2>₹${item.price}</h2>
          </div>
          <div class="item-review">
            <img src="img/star.png" alt="">
            <h4>${item.ratings}</h4>
          </div>
          <div class="item-add">
            <button><span style="font-size: 1.7rem; margin-right: 5%;">+</span>Add</button>
          </div>
        </div>
      </div>
  `;
  })


  

}

