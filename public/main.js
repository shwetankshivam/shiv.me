let intro = document.querySelector('.splash');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('#logo');

let time = document.querySelector('#time');
let date = document.querySelector('#date');

document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('DOMContentLoaded', () => {


        const greetings = [ "Hello", "नमस्ते", "Bonjour", "Hola", "Ciao", "Hallo", "Привет", "こんにちは", "안녕하세요", "مرحبا" , "Nǐ hǎo"];

        // Select a random greeting from the array
        const randomIndex = Math.floor(Math.random() * greetings.length);
        const randomGreeting = greetings[randomIndex];

        // Display the random greeting on the splash screen
        const greetingElement = document.getElementById("logo");
        greetingElement.textContent = randomGreeting;



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
                }, (idx + 1) * 50)
            }, 20);


            setTimeout(() => {
                intro.style.top = '-100vh';

                intro.style.opacity = '0';

            }, 1000)

        })



    });

    setInterval(() => {
        let t = new Date();
        time.innerHTML = t.toLocaleTimeString();


    }, 1000);

    setInterval(() => {
        let d = new Date();
        date.innerHTML = d.toLocaleDateString();

    }, 1000);



});
