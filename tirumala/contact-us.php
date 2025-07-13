<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us</title>
  <link rel="icon" href="img/logo.png" type="image/x-icon">
  <link rel="stylesheet" href="styles/header.css">
  <link rel="stylesheet" href="styles/footer.css">
  <link rel="stylesheet" href="styles/contactus.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="scripts/headfoot.js"></script>
  <style>
    nav ul>li:nth-child(3) {
      opacity: 1;
      pointer-events: none;
    }

    nav>ul span {
      left: 71.5%;
    }

    nav ul>li:nth-child(2):hover~span {
      left: 37.5%;
    }

    nav ul>li:nth-child(1):hover~span {
      left: 4%;
    }
  </style>
</head>

<body>

  <header id="header"></header>

  <div class="contact-container">
    <div class="info">
      <div class="logo">
        <h2>Logo</h2>
      </div>
      <div class="inner-info">
        <h2>Company</h2>
        <div class="social-modes">
          <a href="" class="social"><img src="img/instagram.png" alt="instagram-symbol"></a>
          <a href="" class="social"><img src="img/facebook.png" alt="facebook-symbol"></a>
          <a href="" class="social"><img src="img/linkedin.png" alt="linkedin-symbol"></a>
        </div>
        <div class="mobile-mail">
          <img src="img/phone.png" alt="Phone-symbol">
          <a href="tel:+91 9014745388">+91 9014745388</a>
        </div>
        <div class="mobile-mail">
          <img src="img/mail.png" alt="Mail-symbol">
          <a href="mailto:starterwave25@gmail.com">starterwave25@gmail.com</a>
        </div>
      </div>
    </div>

    <div class="to-contact">
      <h2>Get in Touch</h2>
      <form action="data/data-contact.php" method="post">
        <input type="text" placeholder="Enter Your Name" name="user-name">
        <input type="tel" placeholder="Enter Mobile Number" name="mobilenumber">
        <textarea placeholder="Describe your issue" name="issue"></textarea>
        <button>Send</button>
      </form>
      <div class="message"></div>
    </div>


  </div>
  <script>
  document.addEventListener("DOMContentLoaded", function () {
    <?php
    if (isset($_GET['error'])) {
      echo "let container = document.querySelector('.message');
            container.style.display = 'block';
            container.innerHTML = '<p class=\"error\">Please fill in all fields and enter a valid mobile number.</p>';";
    } elseif (isset($_GET['success'])) {
      echo "let container = document.querySelector('.message');
            container.style.display = 'block';
            container.innerHTML = '<p class=\"success\">Your message has been sent successfully. Sorry for the inconvenience.</p>';";
    }
    ?>
  });
</script>

</body>

</html>