$(document).ready(function () {
    $("#header").load("header.php");
    $("#footer").load("footer.html");
});

window.addEventListener("orientationchange", () => {
    if (window.orientation === 90 || window.orientation === -90) {
        document.body.innerHTML = "<h1>Please rotate your device back to portrait.</h1>";
    } else {
        location.reload();
    }
});