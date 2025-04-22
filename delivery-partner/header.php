<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">


<div class="logo-container">
    <a href="index.php">
        <h1 class="for-gradient">AnnamCart</h1>
    </a>
</div>
<div class="Aent-navbar">
    <ul class="Options">
        <li class="Option1"><a href="activepage.php">Home</a></li>
        <li class="Option2"><a href="index.php">Earning</a></li>
        <li class="Option3"><button class="statechanger">Inactive</button></li>
    </ul>
    <script>let dMobile = <?php
                session_start();
                if (isset($_SESSION['dmobile'])) echo $_SESSION['dmobile'];
                ?>;
            sessionStorage.setItem('dmobile',dMobile);
    </script>
    <script type="module" src="script/dashboard.js"></script>
</div>