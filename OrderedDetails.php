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

  <div class="review-popup" style="display: flex;">
    <div class="info-touser">
      <div class="heading">
        <h2>After enjoyed your meal!</h2>
      </div>
      <p>"Drop a quick review — your taste buds have something to say.”</p>
    </div>
    <div class="changeItems-btns">
      <button class="definet-btn">Definetly</button>
    </div>
  </div>

  <div class="container">
    <div class="post">
      <div class="text">Thanks for rating us!</div>
      <div class="edit">EDIT</div>
    </div>
    <div class="star-widget">
      <input type="radio" name="rate" id="rate-5">
      <label for="rate-5" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-4">
      <label for="rate-4" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-3">
      <label for="rate-3" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-2">
      <label for="rate-2" class="fas fa-star"></label>
      <input type="radio" name="rate" id="rate-1">
      <label for="rate-1" class="fas fa-star"></label>
      <form action="data/data-review.php" method="POST">
        <section class="message"></section>
        <div class="textarea">
          <textarea cols="30" placeholder="Describe your experience.."></textarea>
        </div>
        <div class="btn">
          <button type="submit" class="post-btn">Post</button>
        </div>
      </form>
    </div>
  </div>

  <a href="myOrders.html" class="goback-btn"><img src="img/out-arrow.png" alt=""></a>
  <a class="goback-span" href="myOrders.html">My Orders</a>
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

    document.querySelector('.definet-btn').addEventListener('click', () => {
      document.querySelector('.popup-overlay').style.display = 'none';
      document.querySelector('.review-popup').style.opacity = '0';
      document.querySelector('.review-popup').style.visibility = 'hidden';
    });


    setTimeout(() => {
      document.querySelector('.review-btn').addEventListener('click', () => {
        document.querySelector('.popup-overlay').style.display = 'block';
        document.querySelector('.container').style.display = 'flex';
      });
    }, 1000);

    document.querySelector('.post-btn').addEventListener('click', () => {
      document.querySelector('.popup-overlay').style.display = 'none';
      document.querySelector('.container').style.display = 'none';
    });
  </script>
</body>

</html>