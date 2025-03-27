
let restaurantData;
const userMobile = JSON.parse(localStorage.getItem('userMobile'));
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
    <div class="card-food-item js-food-card-${item.item_id}">
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
            <img src="img/star2.png" alt="">
            <h4>${item.ratings}</h4>
          </div>
          <div class="item-add js-add-${item.item_id}">
          </div>
        </div>
        <span class="wait-animation wait-animation-${item.item_id}"></span>
      </div>
  `;
    getAddBtnHTML(item.item_id);
  });


  async function getAddBtnHTML(itemId) {
    let quantity = undefined;
    let cartItems = await getQuantityStorage();

    cartItems.forEach((cartItem) => {
      if (cartItem.itemId === itemId) {
        quantity = cartItem.quantity;
      }
    });
    if (!quantity || !userMobile) {
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

  setTimeout(getAddBtns, 100);

  async function getAddBtns() {
    const addBtn = document.querySelectorAll('.addBtn');
    addBtn.forEach((btn) => {
      let quantity = 1;
      const itemId = btn.dataset.itemId;
      btn.addEventListener('click', async () => {

        if (userMobile) {
          let cartItems = await getQuantityStorage();
          if (await cartItems.length > 0) {
            if (cartItems[0].restaurantId === restaurantId) {
              setQuantityStorage(itemId, 1, restaurantId);
              addMinMaxBtn(itemId, quantity);
            }
            else {
              let cartAction = confirm('Do you want to change the restaurant ?');
              if (cartAction) {
                cartItems.splice(0, cartItems.length);
                localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify(cartItems));
                setQuantityStorage(itemId, 1, restaurantId);
                addMinMaxBtn(itemId, quantity);
              }
            }
          }
          else {
            setQuantityStorage(itemId, 1, restaurantId);
            addMinMaxBtn(itemId, quantity);
          }
        }else{
          confirm('Please login')
        }

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
          quantity--;
          if (quantity >= 1) {
            document.querySelector(`.quantity-${itemId}`).textContent = quantity;
            setQuantityStorage(itemId, quantity, restaurantId);
          }
          else {
            let addBtnContainer = document.querySelector(`.js-add-${itemId}`);
            addBtnContainer.innerHTML = `<button class="addBtn" data-item-id="${itemId}">
              <span style="font-size: 1.7rem; margin-right: 5%;">+</span>
              Add</button>`;
            getAddBtns();
            let cartItems = await getQuantityStorage();
            cartItems.forEach((item) => {
              if (item.itemId === itemId) {
                cartItems.splice(cartItems.indexOf(item), 1);
              }
            });
            localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify(cartItems));
            getCartQuantity();
          }
          loadingCart(itemId);
        });
      }

      if (maxBtn) {
        maxBtn.addEventListener('click', async () => {
          quantity++;
          document.querySelector(`.quantity-${itemId}`).textContent = quantity;
          setQuantityStorage(itemId, quantity, restaurantId);
          loadingCart(itemId);
        });
      }
    }, 100);
  }

}

async function setQuantityStorage(itemId, quantity, restaurantId) {
  let cartItems = await getQuantityStorage() || [];
  let itemFound = false;
  cartItems.forEach((item) => {
    if (item.itemId === itemId) {
      itemFound = true;
      item.quantity = quantity;
      localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify(cartItems));
    }
  });
  if (!itemFound) {
    cartItems.push({ itemId, quantity, restaurantId });
    localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify(cartItems));
  }
  getCartQuantity();
}

async function getQuantityStorage() {
  let cartItems = await JSON.parse(localStorage.getItem(`storedItems-${userMobile}`)) || [];
  return cartItems;
}

function loadingCart(itemId) {
  document.querySelector(`.wait-animation-${itemId}`).style.animation = 'waiter 0.6s alternate infinite linear';
  document.querySelector(`.wait-animation-${itemId}`).style.height = '0.7%';
  document.querySelector(`.js-food-card-${itemId}`).style.opacity = '0.5';
  document.querySelector(`.js-food-card-${itemId}`).style.pointerEvents = 'none';
  setTimeout(async () => {
    document.querySelector(`.wait-animation-${itemId}`).style.animation = 'none';
    document.querySelector(`.wait-animation-${itemId}`).style.height = '0%';
    document.querySelector(`.js-food-card-${itemId}`).style.opacity = '1';
    document.querySelector(`.js-food-card-${itemId}`).style.pointerEvents = 'all';
  }, 1200);
}