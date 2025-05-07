<?php
session_start();
if (!isset($_SESSION['rname']) && !isset($_SESSION['rid'])) {
    header("Location: login.php");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnnamCart</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script/header-load.js"></script>
    <link rel="stylesheet" href="../styles/header.css">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/index.css">
</head>

<body>
    <header></header>
    <div class="dashboard">
        <div class="dashboard-head">
            <h2>Dashboard</h2>
            <p>25-05-2251</p>
        </div>
        <div class="dashboard-body">
            <div class="dashboard-body-row">

                <div class="dashboard-card">
                    <h5>Today`s Offer</h5>
                    <h3>25% OFF on all items</h3>
                </div>
                <div class="dashboard-card">
                    <div class="available-items">
                        <h5>Available items</h5>
                        <h3>2251</h3>
                    </div>
                    <div class="button-container">
                        <button>Add & view</button>
                    </div>
                </div>
                <div class="dashboard-card">
                    <h5>Most Order Items</h5>
                    <h3>Dosa</h3>
                </div>
            </div>
            <div class="dashboard-body-row">

                <div class="dashboard-card">
                    <h5>Total Revenue</h5>
                    <h3>₹10000</h3>
                </div>
                <div class="dashboard-card">
                    <div class="order-discription">
                        <h5>Total Orders</h5>
                        <h3>2251</h3>
                    </div>
                    <div class="button-container">
                        <button> View Orders</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        const rid = <?php echo $_SESSION['rid']; ?>;
    </script>
    <script src="script/update-status.js" type="module"></script>
</body>

</html>