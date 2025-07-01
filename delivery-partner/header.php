<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alata&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
<link rel="icon" href="../img/logo.png" type="image/x-icon">

<!-- Add this wrapper around your existing elements -->
<div class="header-wrapper">
    <div class="logo-container">
        <a href="index.php">
            <h1 class="for-gradient">AnnamCart</h1>
        </a>
    </div>

    <div class="Aent-navbar">
        <!-- Desktop Navigation -->
        <ul class="Options">
            <li class="Option1"><a href="activepage.php">Home</a></li>
            <li class="Option2"><a href="index.php">Earning</a></li>
            <li class="Option3"><button class="statechanger">Inactive</button></li>
        </ul>
        <!-- Hamburger Menu Button (Mobile Only) -->
        <button class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</div>

<!-- Mobile Menu Overlay -->
<div class="mobile-menu" id="mobileMenu">
    <div class="mobile-menu-content">
        <div class="mobile-menu-header">
            <h2 class="for-gradient" style="font-size: 1.5rem; margin: 0;">AnnamCart</h2>
            <button class="mobile-menu-close" id="mobileMenuClose">&times;</button>
        </div>
        <ul class="mobile-menu-items">
            <li><a href="activepage.php">Home</a></li>
            <li><a href="index.php">Earning</a></li>
        </ul>
    </div>
</div>

<script>
    let dMobile = <?php
                    session_start();
                    if (isset($_SESSION['dmobile'])) echo $_SESSION['dmobile'];
                    ?>;
    sessionStorage.setItem('dmobile', dMobile);
</script>

<script>
    // Hamburger Menu Functionality
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const body = document.body;

    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }

    hamburger.addEventListener('click', toggleMenu);
    mobileMenuClose.addEventListener('click', closeMenu);

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    // Close menu on window resize if open
    window.addEventListener('resize', function() {
        if (window.innerWidth > 800) {
            closeMenu();
        }
    });
</script>

<script type="module" src="script/dashboard.js"></script>