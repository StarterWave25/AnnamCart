const changeBtns = document.querySelectorAll('.profile-change');
let temp = '';
changeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const changeInput = document.getElementById(btn.dataset.element);
        const beforeValue = changeInput.value;
        if (temp === beforeValue) {
            changeProfile({ element: btn.dataset.element, value: temp });
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
