const inputName = document.getElementById('input-name');
const inputMobile = document.getElementById('input-mobile');


inputName.addEventListener('input',()=>{
    let nameValue = inputName.value.replace(/[^a-zA-Z]/g,'');
    inputName.value = nameValue;
});

inputMobile.addEventListener('input', () => {
    let mobileValue = inputMobile.value.replace(/\D/g,'');
    if (mobileValue.length > 10) {
        mobileValue = mobileValue.slice(0, 10);
    }
    inputMobile.value = mobileValue;
});