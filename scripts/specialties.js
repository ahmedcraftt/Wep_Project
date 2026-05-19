
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        const title = card.querySelector("h3").innerText;

        alert("Welcome to " + title + " Department");

    });

});


const heroTitle = document.querySelector(".hero h1");

heroTitle.addEventListener("mouseover", function() {
    heroTitle.style.color = "#0d6efd";
});

heroTitle.addEventListener("mouseout", function() {
    heroTitle.style.color = "white";
});


const socialLinks = document.querySelectorAll(".social-buttons a");

socialLinks.forEach(function(link) {

    link.addEventListener("mouseenter", function() {
        link.style.transform = "scale(1.2)";
    });

    link.addEventListener("mouseleave", function() {
        link.style.transform = "scale(1)";
    });

});