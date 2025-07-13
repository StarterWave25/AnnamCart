window.addEventListener('pageshow', function (event) {
    if (event.persisted || (window.performance && performance.navigation.type === 2)) {
        // Force reload if user navigated back to login page
        window.location.reload();
    }
});

const inputName = document.getElementById('input-name');
const inputMobile = document.getElementById('input-mobile');

if (inputName) {
    inputName.addEventListener('input', () => {
        let nameValue = inputName.value.replace(/[^a-zA-Z\s]/g, '');
        inputName.value = nameValue;
    });
}


inputMobile.addEventListener('input', () => {
    let mobileValue = inputMobile.value.replace(/\D/g, '');
    if (mobileValue.length > 10) {
        mobileValue = mobileValue.slice(0, 10);
    }
    inputMobile.value = mobileValue;
});

if (document.referrer.includes('signup.php') || document.referrer.includes('login.php') || document.referrer.includes('verify-otp.html')) {
    sessionStorage.setItem('prev-link', 'index.html');
}
else {
    sessionStorage.setItem('prev-link', document.referrer);
}