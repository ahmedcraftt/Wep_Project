const searchInput = document.querySelector(".search-input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        let doctorName = card.querySelector("h2").textContent.toLowerCase();

        if (doctorName.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});