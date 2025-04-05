
const inputMobile = document.getElementById('input-mobile');

inputMobile.addEventListener('input', () => {
    let mobileValue = inputMobile.value.replace(/\D/g, '');
    if (mobileValue.length > 10) {
        mobileValue = mobileValue.slice(0, 10);
    }
    inputMobile.value = mobileValue;
});