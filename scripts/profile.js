const changeBtns = document.querySelectorAll('.profile-change');
let temp = null;


changeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const changeInput = document.getElementById(btn.dataset.element);
        const beforeValue = changeInput.value;
        if (temp === beforeValue) {
            if(isValidValue(btn.dataset.element,temp)){
                changeProfile({ element: btn.dataset.element, value: temp });
            }
        }
        btn.style.opacity = '0.5';
        btn.style.pointerEvents = 'none';
        changeInput.removeAttribute('readonly');
        changeInput.focus();
        changeInput.addEventListener('input', () => {
            if (changeInput.value === beforeValue) {
                btn.style.opacity = '0.5';
                btn.style.pointerEvents = 'none';
            }
            else {
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'all';
                temp = changeInput.value;
            }
        });
    });
});


function isValidValue(element,value){
    const profileErrors = document.querySelectorAll('.profile-error');
    if(element==='profile-name'){
        if(value.length>2){
            return true;
        }
        else{
            profileErrors[0].textContent=`Enter a Valid Name`;
            return false;
        }
    }

    else if(element==='profile-mail'){
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailPattern.test(value)){
            return true;
        }
        else{
            profileErrors[1].textContent=`Enter a valid Email address`;
            return false;
        }
    }

    else if(element==='profile-address'){
        if(value.length>9){
            return true;
        }
        else{
            profileErrors[2].textContent=`Enter a valid Adddress`;
            return false;
        }
    }
}


async function changeProfile(data) {
    const request = await fetch('data/auth-profile.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const response = await request.json();
    (response==='Success') ? location.reload() : '';
}
