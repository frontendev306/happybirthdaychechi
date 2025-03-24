document.addEventListener("DOMContentLoaded", () => {
    const revealBtn = document.getElementById("reveal-btn");
    const messageBox = document.getElementById("message-box");
    const birthdaySong = document.getElementById("birthday-song");
    const showCarouselBtn = document.getElementById("show-carousel-btn");
    const carousel = document.querySelector(".carousel");

    // Reveal message and play music when button is clicked
    revealBtn.addEventListener("click", () => {
        messageBox.style.display = "block";
        birthdaySong.play();
        revealBtn.style.display = "none";
    });

    // Show carousel when clicking "Our Beautiful Memories"
    showCarouselBtn.addEventListener("click", () => {
        carousel.classList.remove("hidden");
    });

    // Carousel Functionality
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-images img");
    const totalImages = images.length;
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 4000);

    // Floating Balloons Animation
    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.innerHTML = "🎈";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(balloon);

        setTimeout(() => balloon.remove(), 5000);
    }

    setInterval(createBalloon, 300);
});
