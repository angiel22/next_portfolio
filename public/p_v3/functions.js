document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s ease-in";
    setTimeout(() => document.body.style.opacity = 1, 100);
});


function copyEmail() {
    var copyText = "angiel.4work@gmail.com";

    // Copy the text
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied the text: " + copyText);
}

function updateTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();

    document.getElementById('time').innerHTML = time;

    setInterval(updateTime, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const binaryContainer = document.getElementById("binary-container");
    const columns = 20; // Number of columns for digits to fall
    const screenWidth = window.innerWidth;
    const columnWidth = screenWidth / columns;

    function createBinaryDigit() {
        const digit = document.createElement("span");
        digit.classList.add("binary-digit");
        digit.textContent = Math.random() > 0.5 ? "1" : "0"; // Random binary digit

        // Assign a column by choosing a random multiple of columnWidth
        let columnIndex = Math.floor(Math.random() * columns);
        digit.style.left = `${columnIndex * columnWidth}px`;

        // Randomize animation delay for staggered effect
        digit.style.setProperty("--delay", Math.random());

        // Randomize font size for depth effect
        digit.style.fontSize = `${Math.random() * 10 + 15}px`;

        binaryContainer.appendChild(digit);

        // Remove the digit after animation completes
        setTimeout(() => {
            binaryContainer.removeChild(digit);
        }, 4000);
    }

    // Generate digits at random intervals
    setInterval(createBinaryDigit, 150);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
});


let slideIndex = localStorage.getItem("slideIndex") ? parseInt(localStorage.getItem("slideIndex")) : 1;

// Ensure the stored slide is shown when the page loads
window.onload = function () {

    updateTime();
    showSlides(slideIndex);
};


function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    }
    localStorage.setItem("slideIndex", slideIndex); // Save to localStorage
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    localStorage.setItem("slideIndex", slideIndex); // Save to localStorage
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return; // Prevent errors if no slides exist

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block"; // Show the active slide
    dots[slideIndex - 1].className += " active";
}

// document.addEventListener("DOMContentLoaded", () => {
//     const skillsSection = document.querySelector("#about");

//     // IntersectionObserver to detect when the skills section is in view
//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     // Add active class to skill bar elements when the section is in view
//                     const skillBars = entry.target.querySelectorAll('.skillBarValue');
//                     skillBars.forEach(bar => bar.classList.add('active'));
//                 }
//             });
//         },
//         {
//             threshold: 0.5, // When 50% of the section is in view, trigger the animation
//         }
//     );

//     // Observe the skills section
//     observer.observe(skillsSection);
// });
