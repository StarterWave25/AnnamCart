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
    <script src="script/header-load.js" type="module"></script></script>
    <link rel="stylesheet" href="../styles/header.css">
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/add-food-item.css">
</head>

<body>
    <header></header>
    <div class="add-food-container">
        <div class="add-food-head">
            <h2>Add Food Item</h2>
        </div>
        <form action="">
            <input type="text" name="item-name" id="" placeholder="Item name">
            <input type="number" name="orginal-price" id="" placeholder="Orginal price">
            <input type="number" name="discount-price" id="" placeholder="price with discount">
            <div class="popular-item">
                <input type="checkbox" name="popular-item" id="">
                <label for="">Popular food item</label>
            </div>
            <button class="image-upload-but">Upload item image</button>
            <button type="submit" class="submit-but">Add food item</button>

        </form>
    </div>
</body>

</html>