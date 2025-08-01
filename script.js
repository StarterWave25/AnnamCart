function checkCookie() {
    let cookie = (document.cookie);
    if (cookie.includes('LpOpened=true')) {
        location.href = 'tirumala-food-delivery/';
    }
}

function setCookie() {
    const allCTA = document.querySelectorAll('.primary-cta');
    allCTA.forEach((btn) => {
        btn.addEventListener('click', () => {
            let date = new Date();
            date.setTime(date.getTime() + (10 * 24 * 60 * 60 * 1000));
            let expires = "expires=" + date.toUTCString();
            document.cookie = 'LpOpened=true;' + expires;
        })
    });
}

setCookie();

checkCookie();

window.addEventListener('pageshow', function (event) {
    if (event.persisted || (window.performance && performance.navigation.type === 2)) {
        window.location.reload();
    }
});

function startCountdown() { let e = 2013, t = document.getElementById("countdown"), n = document.getElementById("urgencyCountdown"), o = document.getElementById("mobileCountdown"); function r() { let i = Math.floor(e / 60), s = e % 60; t && (t.textContent = `${i.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`), n && (n.textContent = `${i}:${s.toString().padStart(2, "0")}`), o && (o.textContent = `${i}:${s.toString().padStart(2, "0")}`), e--, e < 0 && (e = 2013) } r(), setInterval(r, 1e3) } function addRippleEffect(e) { e.addEventListener("click", function (t) { let n = this.getBoundingClientRect(), o = t.clientX - n.left, r = t.clientY - n.top, i = document.createElement("span"); i.classList.add("ripple"), i.style.left = o + "px", i.style.top = r + "px", this.appendChild(i), setTimeout(() => { i.remove() }, 600) }) } function initFAQs() { document.querySelectorAll(".faq-question").forEach(e => { e.addEventListener("click", function () { let e = this.parentElement; e.classList.toggle("active") }) }) } function initScrollAnimations() { let e = new IntersectionObserver(e => { e.forEach(e => { e.isIntersecting && (e.target.style.opacity = "1", e.target.style.transform = "translateY(0)") }) }, { threshold: .1 }); document.querySelectorAll(".benefit-card, .restaurant-card, .testimonial-card").forEach(t => { t.style.opacity = "0", t.style.transform = "translateY(30px)", t.style.transition = "all 0.6s ease", e.observe(t) }) } document.addEventListener("DOMContentLoaded", function () { startCountdown(), document.querySelectorAll(".primary-cta, .mobile-cta-button, .nav-cta").forEach(addRippleEffect), initFAQs(), initScrollAnimations() }); let style = document.createElement("style"); style.textContent = ".ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,0.6);transform:scale(0);animation:ripple-animation 0.6s linear;pointer-events:none}@keyframes ripple-animation{to{transform:scale(4);opacity:0}}", document.head.appendChild(style);

