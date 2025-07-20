async function getItems() {
  const request = await fetch('data/data-get-items.php');
  const response = await request.json();
  let itemsHTML = '';
  response.forEach((item) => {
    itemsHTML += `
    <div class="item-card">
      <div class="image"><img src="../img/dosa.jpg" alt="${item.item_name} image"></div>
      <div class="details">
        <h4>${item.item_name}</h4>
        <del>₹${item.dprice}</del>
        <h3>₹${item.price}</h3>
      </div>
      <div class="item-btns">
        <button class="edit-btn" data-item-id=${item.item_id}>
          <span>Edit</span> 
          <div class="image2">
            <img src="../img/pen.png" alt="edit symbol">
          </div>
        </button>
        <button class="avail-btn" data-item-id=${item.item_id}>${item.status}</button>
      </div>
    </div>
  `;
  });

  document.querySelector('.items-body').innerHTML = itemsHTML;
  addAvailBtns();
  addEditBtns();
}
getItems();


function addAvailBtns() {
  const availBtns = document.querySelectorAll('.avail-btn');
  availBtns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const itemId = btn.dataset.itemId;
      const request = await fetch(`data/data-items-status.php?item-id=${itemId}`);
      const response = await request.json();
      btn.textContent = response.newStatus;
    });
  });
}


function addEditBtns() {
  const editBtns = document.querySelectorAll('.edit-btn');
  editBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.dataset.itemId;
      location.href =`add-food-item.php?item-id=${itemId}`;
    });
  });
}