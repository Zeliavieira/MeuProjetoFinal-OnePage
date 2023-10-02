
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const hiddenText = document.querySelector(".paragrafo1");

    toggleButton.addEventListener("click", function () {
        if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
            hiddenText.style.display = "block";
            toggleButton.textContent = "Ocutar";
        } else {
            hiddenText.style.display = "none";
            toggleButton.textContent = "Mostrar";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const hiddenText = document.querySelector(".paragrafo2");

    toggleButton.addEventListener("click", function () {
        if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
            hiddenText.style.display = "block";
            toggleButton.textContent = "Ocutar";
        } else {
            hiddenText.style.display = "none";
            toggleButton.textContent = "Mostrar";
        }
    });
});

var hamburguer = document.getElementById('hamburguer');
var itensMenu = document.getElementById('itens_menu');

hamburguer.addEventListener('click', aparecer);

function aparecer() {
    if (itens_menu.style.display == 'block') {
        itensMenu.classList.remove('show');
    } else {
        itensMenu.classList.toggle('show');
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }
    showSlide(currentSlide);

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
});
