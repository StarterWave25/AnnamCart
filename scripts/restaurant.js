let time, distance;
let restaurantData;
const userMobile = sessionStorage.getItem('userMobile');

async function mostPopularItems() {
  const request = await fetch('data/data-popular-items.php');
  const popularItems = await request.json();
  return popularItems;
}

mostPopularItems();

async function getRestaurantData(restaurantId) {
  getUserCoords();

  const response = await fetch(`data/data-restaurant.php?restaurant-id=${restaurantId}`);
  restaurantData = await response.json();
  const resBody = document.querySelector('.restaurant-body');
  if (restaurantData === "Sorry, you can't have access to this restaurant page !") {
    resBody.textContent = "Sorry, you can't have access to this restaurant page !";
    return 0;
  }
  const resHead = document.querySelector('.restaurant-head');
  getTimeDistance(restaurantData.resHead.latitude, restaurantData.resHead.longitude);
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
      <li>${restaurantData.resHead.near_to}</li>
      <li>${setTimeout(() => { time }, 100)} mins</li>
      <li>${setTimeout(() => { distance }, 100)} km</li>
    </ul>
  </div>

  <div class="certifications">
    <div class="ratings-container">
      <img src="img/star.png" alt="review-image">
      <h3>${restaurantData.resHead.ratings} (43)</h3>
    </div>
    <div class="res-certify">
      <img src="img/fssai.png">
      <h3>License no:</h3>
      <p>10119010000561</p>
  </div>
  `;

  restaurantData.resBody.forEach(async (item) => {
    resBody.innerHTML += `
    <div class="card-food-item js-food-card-${item.item_id}">
        <div class="item-image">
          <img src="img/dosa.jpg" alt="">
        </div>
        <div class="item-details">
          <div class="item-name">
            <h3>${item.item_name}</h3>
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
    let popularItems = await mostPopularItems();
    popularItems.forEach((p_item) => {
      if (p_item == item.item_id) {
        document.querySelector(`.js-food-card-${item.item_id}`).classList.add("popular-item");
      }
    });
    getAddBtnHTML(Number(item.item_id));
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
      const itemId = Number(btn.dataset.itemId);
      btn.addEventListener('click', async () => {

        if (userMobile) {
          let cartItems = await getQuantityStorage();
          if (await cartItems.length > 0) {
            if (cartItems[0].restaurantId === restaurantId) {
              setQuantityStorage(itemId, 1, restaurantId);
              addMinMaxBtn(itemId, quantity);
            }
            else {
              getChangeRestaurantPopup(cartItems, itemId, restaurantId);
            }
          }
          else {
            setQuantityStorage(itemId, 1, restaurantId);
            addMinMaxBtn(itemId, quantity);
          }
        } else {
          getLoginPopup();
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

  function getChangeRestaurantPopup(cartItems, itemId, restaurantId) {
    document.querySelector('.restaurant-overlay').style.opacity = '1';
    document.querySelector('.restaurant-overlay').style.visibility = 'visible';
    document.querySelector('.changeItems-popup').style.opacity = '1';
    document.querySelector('.changeItems-popup').style.visibility = 'visible';
    document.body.style.overflow = "hidden";

    document.querySelector('.clear-btn').addEventListener('click', () => {
      document.body.style.overflow = 'unset';
      document.querySelector('.restaurant-overlay').style.opacity = '0';
      document.querySelector('.restaurant-overlay').style.visibility = 'hidden';
      document.querySelector('.changeItems-popup').style.opacity = '0';
      document.querySelector('.changeItems-popup').style.visibility = 'hidden';
      cartItems.splice(0, cartItems.length);
      localStorage.setItem(`storedItems-${userMobile}`, JSON.stringify(cartItems));
      setQuantityStorage(itemId, 1, restaurantId);
      addMinMaxBtn(itemId, 1);
    })
    document.querySelector('.no-btn').addEventListener('click', () => {
      document.body.style.overflow = 'unset';
      document.querySelector('.restaurant-overlay').style.opacity = '0';
      document.querySelector('.restaurant-overlay').style.visibility = 'hidden';
      document.querySelector('.changeItems-popup').style.opacity = '0';
      document.querySelector('.changeItems-popup').style.visibility = 'hidden';
    })
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
  document.querySelector(`.wait-animation-${itemId}`).style.animation = 'waiter 0.5s alternate infinite linear';
  document.querySelector(`.wait-animation-${itemId}`).style.height = '0.7%';
  document.querySelector(`.js-food-card-${itemId}`).style.opacity = '0.5';
  document.querySelector(`.js-food-card-${itemId}`).style.pointerEvents = 'none';
  setTimeout(async () => {
    document.querySelector(`.wait-animation-${itemId}`).style.animation = 'none';
    document.querySelector(`.wait-animation-${itemId}`).style.height = '0%';
    document.querySelector(`.js-food-card-${itemId}`).style.opacity = '1';
    document.querySelector(`.js-food-card-${itemId}`).style.pointerEvents = 'all';
  }, 1000);
}

function getLoginPopup() {
  document.querySelector('.restaurant-overlay').style.opacity = '1';
  document.querySelector('.restaurant-overlay').style.visibility = 'visible';
  document.querySelector('.login-addItems-popup').style.opacity = '1';
  document.querySelector('.login-addItems-popup').style.visibility = 'visible';
  document.body.style.overflow = "hidden";
  document.querySelector('.close-border').addEventListener('click', () => {
    document.querySelector('.restaurant-overlay').style.opacity = '0';
    document.querySelector('.restaurant-overlay').style.visibility = 'hidden';
    document.querySelector('.login-addItems-popup').style.opacity = '0';
    document.querySelector('.login-addItems-popup').style.visibility = 'hidden';
    document.body.style.overflow = 'unset';
  });
}


async function getTimeDistance(rLatitude, rLongitude) {
  setTimeout(async () => {
    let latitude = JSON.parse(sessionStorage.getItem('coords')).latitude;
    let longitude = JSON.parse(sessionStorage.getItem('coords')).longitude;

    const request = await fetch('https://api.openrouteservice.org/v2/directions/driving-car', {
      method: 'POST',
      headers: {
        'Authorization': '5b3ce3597851110001cf6248870787b203bc44c6a580e50ca37c9175',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coordinates: [
          [rLongitude, rLatitude],
          [longitude, latitude]
        ]
      })
    });

    const response = await request.json();
    const summary = response.routes[0].summary;

    distance = (summary.distance / 1000).toPrecision(2);
    time = (summary.duration / 60) + 30;
    distance = 100
    time = 100
  }, 100);
}


async function getUserCoords() {
  navigator.geolocation.getCurrentPosition(async (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    sessionStorage.setItem('coords', JSON.stringify({ latitude, longitude }));
  });
}