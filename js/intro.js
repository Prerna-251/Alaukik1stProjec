/* INTRO PAGE JAVASCRIPT  */

// Typing Animation

const nameText = "PRERNA GAYAKWAD";
const typingElement = document.getElementById("typing-name");

let index = 0;

function typeName() {

    if (index < nameText.length) {

        typingElement.textContent += nameText.charAt(index);

        index++;

        setTimeout(typeName, 180);

    }

}

typeName();

// Countdown Timer

const countdown = document.getElementById("countdown");

let seconds = 5;

const timer = setInterval(() => {

    seconds--;

    countdown.textContent = seconds;

    if (seconds <= 0) {

        clearInterval(timer);

        enterPortfolio();

    }

}, 1000);


// Enter Button

const enterButton = document.getElementById("enter-btn");

enterButton.addEventListener("click", () => {

    clearInterval(timer);

    enterPortfolio();

});

// Enter Portfolio

function enterPortfolio() {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "index.html";

    }, 800);

}


// Cursor Glow

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


// Floating Particles

const particles = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.top = window.innerHeight + "px";

    particle.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    particle.style.opacity = Math.random();

    particle.style.transform =
        `scale(${Math.random() * 1.5 + 0.5})`;

    particles.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 6000);

}

setInterval(createParticle, 180);


// Random Twinkle Effect

setInterval(() => {

    document.querySelector(".stars").style.opacity =
        Math.random() * 0.4 + 0.15;

}, 1000);


// Button Glow Animation

setInterval(() => {

    enterButton.style.boxShadow =
        "0 0 30px rgba(212,175,55,0.6)";

    setTimeout(() => {

        enterButton.style.boxShadow =
            "0 0 8px rgba(212,175,55,0.2)";

    }, 500);

}, 1500);



// Welcome Console Message

console.log("✨ Welcome to Prerna's Magical Portfolio ✨");

// Prevent Text Selection

document.addEventListener("selectstart", function(e){

    e.preventDefault();

});



// Escape Key Skips Intro

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        clearInterval(timer);

        enterPortfolio();

    }

});



// Page Loaded

window.addEventListener("load", () => {

    console.log("Intro Loaded Successfully");

});