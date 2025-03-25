
let restaurantData;

async function getRestaurantData(restaurantId) {

  const response = await fetch(`data/data-restaurant.php?restaurant-id=${restaurantId}`);
  restaurantData = await response.json();
  const resHead = document.querySelector('.restaurant-head');
  document.title = restaurantData.resHead.res_name;
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
          <div class="item-add js-add-${item.item_id}">
          </div>
        </div>
      </div>
  `;
    getAddBtnHTML(item.item_id);
  });


  function getAddBtnHTML(itemId) {
    let quantity = undefined;

    restaurantData.cart.forEach((cartItem) => {
      if (cartItem.item_id === itemId) {
        quantity = cartItem.quantity;
      }
    });

    if (!quantity) {
      let addBtnContainer = document.querySelector(`.js-add-${itemId}`);
      addBtnContainer.innerHTML = `
      <button class="addBtn" data-item-id="${itemId}">
        <span style="font-size: 1.7rem; margin-right: 5%;">+</span>
        Add
      </button>` ;
    }
    else {
      addMinMaxBtn(itemId, quantity);
    }
  }

  getAddBtns();

  function getAddBtns() {
    const addBtn = document.querySelectorAll('.addBtn');

    let addBtnContainer;
    addBtn.forEach((btn) => {

      let quantity = 1;
      const itemId = btn.dataset.itemId;
      btn.addEventListener('click', () => {
        addBtnContainer = document.querySelector(`.js-add-${itemId}`);
        addBtnContainer.innerHTML = `
        <button class="minBtn-${itemId} min-btn">-</button>
        <span class="quantity-${itemId}">${quantity}</span>
        <button class="maxBtn-${itemId} max-btn">+</button>
        `;

        if (quantity === 1) {
          sendItemData(itemId, quantity);
        }

        addMinMaxBtn(itemId, quantity);
      });
    });

  }

  async function addMinMaxBtn(itemId, quantity) {
    let addBtnContainer = document.querySelector(`.js-add-${itemId}`);
    addBtnContainer.innerHTML = `
      <button class="minBtn-${itemId} min-btn">-</button>
      <span class="quantity-${itemId}">${quantity}</span>
      <button class="maxBtn-${itemId} max-btn">+</button>
    `;

    setTimeout(async () => {
      const minBtn = document.querySelector(`.minBtn-${itemId}`);
      const maxBtn = document.querySelector(`.maxBtn-${itemId}`);
      if (minBtn) {
        minBtn.addEventListener('click', async () => {
          if (await getQuantity(itemId) > 1) {
            let quantity = await getQuantity(itemId);
            quantity--;
            document.querySelector(`.quantity-${itemId}`).textContent = quantity;
            sendItemData(itemId, quantity);
          }
          else {
            let addBtnContainer = document.querySelector(`.js-add-${itemId}`);
            addBtnContainer.innerHTML = `<button class="addBtn" data-item-id="${itemId}">
              <span style="font-size: 1.7rem; margin-right: 5%;">+</span>
              Add</button>`;
            getAddBtns();
            sendItemData(itemId, 0);
          }
        });
      }

      if (maxBtn) {
        maxBtn.addEventListener('click', async () => {
          let quantity = await getQuantity(itemId);
          quantity++;
          console.log(quantity);
          document.querySelector(`.quantity-${itemId}`).textContent = quantity;
          sendItemData(itemId, quantity);
        });
      }
    }, 100);
  }

}

let respondQuantity;

async function getQuantity(itemId) {
  const response = await fetch(`data/data-quantity.php?itemId=${itemId}`);
  respondQuantity = await response.json();
  console.log(respondQuantity.quantity);
  return Number(respondQuantity.quantity);
}

async function sendItemData(itemId, quantity) {
  const postRequest = await fetch('data/data-cart.php', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ itemId, quantity })
  });

  const response = await postRequest.json();
}