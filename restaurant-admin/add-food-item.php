<?php if (isset($_GET['message'])): ?>
    <script>
        window.addEventListener('DOMContentLoaded', () => {
            message();
        });
    </script>
<?php endif; ?>

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
    <script src="script/header-load.js" type="module"></script>
    </script>
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
        <div class="message" style="display: none;">
            <p>You have successfully added a Item!</p>
        </div>
        <form action="data/submit-items.php" method="post" class="item-form">
            <input type="text" name="item-name" id="" placeholder="Item name" required>
            <input type="number" name="orginal-price" id="" placeholder="Orginal price" required>
            <input type="number" name="discount-price" id="" placeholder="price with discount" required>
            <div class="popular-item">
                <input type="checkbox" name="popular-item" id="">
                <label for="">Popular food item</label>
            </div>
            <button class="image-upload-but">Upload item image</button>
            <button type="submit" name="submit" class="submit-but">Add food item</button>
        </form>
    </div>
    <script>
        const itemId = <?php if(isset($_GET['item-id'])) { echo $_GET['item-id']; } else { echo 0;} ?>;
    </script>
    <script>
        function message() {
            document.querySelector('.message').style.display = 'flex';
            setTimeout(() => {
                document.querySelector('.message').style.display = 'none';
            }, 2500);
        }
    </script>
    <script src="script/edit-items.js"></script>
</body>

</html>