const inputOTP = document.getElementById('input-otp');
const submitBtn = document.querySelector('.submit-btn');
const prevLink = sessionStorage.getItem('prev-link');
let otpValue;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = prevLink;
});

inputOTP.addEventListener('input', () => {
    if (inputOTP.value.length > 4) {
        inputOTP.value = otpValue;
    }
    otpValue = inputOTP.value;
});



