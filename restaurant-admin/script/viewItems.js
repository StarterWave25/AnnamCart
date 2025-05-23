async function getItems() {
  const request = await fetch('data/data-get-items.php');
  const response = await request.json();
  let itemsHTML = '';
  response.forEach((item) => {
    itemsHTML += `
    <div class="item-card">
      <div class="image"><img src="../img/dosa.jpg" alt="food-item"></div>
      <div class="details">
        <h4>${item.item_name}</h4>
        <del>₹${item.dprice}</del>
        <h3>₹${item.price}</h3>
      </div>
      <div class="item-btns">
        <button class="edit-btn">
          <span>Edit</span> 
          <div class="image2">
            <img src="../img/pen.png" alt="edit-symbol">
          </div>
        </button>
        <button class="avail-btn">${item.status}</button>
      </div>
    </div>
  `;
  });

  document.querySelector('.items-body').innerHTML = itemsHTML;
  
}

getItems();