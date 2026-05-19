
const hero = document.querySelector(".hero h2");

hero.addEventListener("mouseover", function () {
    hero.style.color = "#0d6efd";
    hero.style.transform = "scale(1.1)";
});

hero.addEventListener("mouseout", function () {
    hero.style.color = "white";
    hero.style.transform = "scale(1)";
});

const boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {

    box.addEventListener("click", function () {

        const title = box.querySelector("h3").innerText;

        alert(title + " Section Opened");
    });

});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;

    alert("Thank you " + name + "! Your message has been sent.");

    form.reset();
});

const socialButtons = document.querySelectorAll(".social-buttons a");

socialButtons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {
        button.style.transform = "scale(1.2)";
    });

    button.addEventListener("mouseleave", function () {
        button.style.transform = "scale(1)";
    });

});