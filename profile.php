<?php 
    session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your profile</title>
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/profile.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scripts/headfoot.js"></script>
</head>

<body>
    <header id="header">
    </header>

    <div class="h2-tag">
        <h2>My Profile:</h2>
    </div>
    <div class="image-container">
        <img src="img/user.png" alt="">
    </div>
    <h3 class="onsucess-head"><?php if(isset($_SESSION['updated'])) { echo $_SESSION['updated'];  $_SESSION['updated']='';} ?></h3>
    <div class="profile">
        <div class="name">
            <label for="">Name:</label>
            <input type="text" id="profile-name" value="<?php echo $_SESSION['username'] ?>" readonly>
            <a class="profile-change" data-element="profile-name">Change</a>
            <span class="profile-error"></span>
        </div>

        <div class="email">
            <label for="">Email:</label>
            <input type="email" id="profile-mail" value="<?php echo $_SESSION['email'] ?>" readonly>
            <a class="profile-change" data-element="profile-mail">Change</a>
            <span class="profile-error"></span>
        </div>

        <div class="address">
            <label for="">Address:</label>
            <input name="" id="profile-address" value="<?php echo $_SESSION['address'] ?>" readonly cols="6" class="user-addr">
            <a class="profile-change" data-element="profile-address">Change</a>
            <span class="profile-error"></span>
        </div>
    </div>
    <script>
    </script>
    <script src="scripts/profile.js"></script>
</body>

</html>