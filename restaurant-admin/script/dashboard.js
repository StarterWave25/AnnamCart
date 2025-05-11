async function getDash() {

  let request = await fetch(`data/data-get-dashboard.php?res-id=${rid}`);
  let response = await request.json();
  console.log(response)

  let noItems = response.orders.length;
  let totalArray = response.orders;
  let total = 0;
  totalArray.forEach((item) => {
    total += Number(item);
  });


  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  let dashHTML = `
    <div class="dashboard-head">
            <h2>Dashboard</h2>
            <p>${formattedDate}</p>
        </div>
        <div class="dashboard-body">
            <div class="dashboard-body-row">

                <div class="dashboard-card">
                    <h5>Today's Offer</h5>
                    <h3>${response.offer}</h3>
                </div>
                <div class="dashboard-card">
                    <div class="available-items">
                        <h5>Available items</h5>
                        <h3>${response.noItems}</h3>
                    </div>
                    <div class="button-container">
                        <a href="viewItems.html"><button>Add & view</button></a>
                    </div>
                </div>
                <div class="dashboard-card">
                    <h5>Most Order Items</h5>
                    <h3>${response.mItem}</h3>
                </div>
            </div>
            <div class="dashboard-body-row">

                <div class="dashboard-card">
                    <h5>Total Revenue</h5>
                    <h3>₹${total}</h3>
                </div>
                <div class="dashboard-card">
                    <div class="order-discription">
                        <h5>Total Orders</h5>
                        <h3>${noItems}</h3>
                    </div>
                    <div class="button-container">
                        <a href="orders-completed.php"><button>View Orders</button></a>
                    </div>
                </div>
            </div>
        </div>
  `;

  document.querySelector('.dashboard').innerHTML = dashHTML;
}

getDash();