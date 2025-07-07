<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Orders</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="scripts/headfoot.js"></script>
  <script src=""></script>
  <link rel="icon" href="img/logo.png" type="image/x-icon">
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/footer.css">
  <link rel="stylesheet" href="styles/orderedDetails.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

</head>

<body>
  <header id="header"></header>

  <div class="popup-overlay">

  </div>

  <div class="container review-popup">
    <div class="head">Please Give Review</div>
    <div class="star-widget">

      <input type="radio" name="rate" id="rate-5">
      <label for="rate-5" class="fas fa-star" onclick="setStar(5)"></label>
      <input type="radio" name="rate" id="rate-4">
      <label for="rate-4" class="fas fa-star" onclick="setStar(4)"></label>
      <input type="radio" name="rate" id="rate-3">
      <label for="rate-3" class="fas fa-star" onclick="setStar(3)"></label>
      <input type="radio" name="rate" id="rate-2">
      <label for="rate-2" class="fas fa-star" onclick="setStar(2)"></label>
      <input type="radio" name="rate" id="rate-1">
      <label for="rate-1" class="fas fa-star" onclick="setStar(1)"></label>
      <form action="data/data-review.php" method="POST">
        <section class="message"></section>
        <div class="textarea">
          <textarea cols="30" name="description" placeholder="Describe your experience..."></textarea>
        </div>
        <div class="btn">
          <button class="post-btn" onclick="postReview(event)">Post</button>
        </div>
      </form>
    </div>
  </div>

  <a href="myOrders.php" class="goback-btn"><img src="img/out-arrow.png" alt=""></a>
  <a class="goback-span" href="myOrders.php">My Orders</a>
  <div class="ordered-details">
    <!-- js code comes here -->
  </div>
  </div>
  <script>
    const orderId = '<?php echo $_GET['order-id']; ?>';
  </script>
  <script src="scripts/orderedDetails.js"></script>
  <script>
    setTimeout(() => {
      document.querySelector('.reorder-btn').addEventListener('click', async () => {
        const userMobile = sessionStorage.getItem('userMobile');
        localStorage.removeItem(`storedItems-${userMobile}`);
      });
    }, 1000);

    async function setStar(star_number) {
      console.log(orderId)
      console.log(star_number)

      fetch(`data/data-review.php?order-id=${orderId}&stars=${star_number}`)
    }

    const userMobile = sessionStorage.getItem('userMobile');
    if (!userMobile) {
      document.querySelector('.ordered-details').innerHTML = `
        <div class="no-order">
          <h2>Sorry, you can't have access to this order details !</h2>
          <p>Please Login First.</p>
          <p>Don't have an account then, Sign Up now.</p>
          <a href="login.php"><button class="login-btn">Login</button></a>
          <a href="signup.php"><button class="signup-btn">Sign Up</button></a>
        </div>
      `;
    }
  </script>
</body>

</html>