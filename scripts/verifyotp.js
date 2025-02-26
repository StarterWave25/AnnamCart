const inputOTP = document.getElementById('input-otp');
let otpValue;
inputOTP.addEventListener('input',()=>{ 
    if(inputOTP.value.length>4){
        inputOTP.value = otpValue;
    }
    otpValue = inputOTP.value;
});