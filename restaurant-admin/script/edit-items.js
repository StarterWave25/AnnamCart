if (itemId != 0) {
    getItemDetails();
}

async function getItemDetails() {
    const request = await fetch(`data/data-edit-items.php?item-id=${itemId}`);
    const response = await request.json();

    const editForm = document.querySelector('.item-form');
    const editHTML = `<input type="text" name="item-name" id="item-name" placeholder="Item name" required value="${response.item_name}">
    <input type="number" name="orginal-price" id="" placeholder="Orginal price" required value="${response.price}">
    <input type="number" name="discount-price" id="" placeholder="price with discount" required value="${response.dprice}">
    <button type="submit" name="submit" class="edit-save-btn">Save item</button>
    `;
    editForm.innerHTML = editHTML;
    document.getElementById('item-name').focus();
    addSaveBtn();
}


async function addSaveBtn() {
    const submitBtn = document.querySelector('.edit-save-btn');
    const editForm = document.querySelector('.item-form');
    let itemName, dprice, price;
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        let formData = new FormData(editForm);
        for (let [name, value] of formData.entries()) {
            if (name == 'item-name') {
                itemName = value;
            }
            else if (name == 'orginal-price') {
                dprice = value;
            }
            else if (name == 'discount-price') {
                price = value;
            }
        }

        console.log(itemName, price);
        const request = await fetch('data/data-edit-items.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ itemId, itemName, price, dprice })
        });
        const response = await request.json();
        if (response == 'Success') {
            location.href = 'viewitems.html';
        }
    });
}