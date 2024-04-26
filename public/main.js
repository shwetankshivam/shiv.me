let intro = document.querySelector('.splash');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let time = document.querySelector('#time');
let date = document.querySelector('#date');



window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 150)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 10)
        }, 200)


    })

    setTimeout(() => {
        intro.style.top = '-12%';
        intro.style.opacity = '0';
    }, 1000)

});

setInterval(() => {
    let t = new Date();
    time.innerHTML = t.toLocaleTimeString();


}, 1000);

setInterval(() => {
    let d = new Date();
    date.innerHTML = d.toLocaleDateString();

}, 1000);




