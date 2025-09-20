document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s ease-in";
    setTimeout(() => document.body.style.opacity = 1, 100);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");

        history.replaceState(null, "", `#${id}`);
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach((section) => {
  observer.observe(section);
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
    const canvas = document.getElementById("starCanvas");
    const ctx = canvas.getContext("2d");
    
    // Ensure canvas spans the entire window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Adjust canvas size when the window is resized
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Generate stars
    const stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5,
        });
    }
    
    // Draw stars and animate them
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
    
        stars.forEach((star) => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            star.y += star.speed;
    
            // Reset star position when it moves off-screen
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
    
        requestAnimationFrame(drawStars);
    }
    
    drawStars();
    
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
});

window.onload = function () {
    updateTime();
};

// window.addEventListener("scroll", () => {
//     const aboutSection = document.getElementById("about");
//     let scrollPosition = window.scrollY;
    
//     if (scrollPosition >= window.innerHeight) {
//         aboutSection.style.top = "0"; // Move it up to cover full-page
//     } else {
//         aboutSection.style.top = "100vh"; // Keep it below if not scrolled
//     }
// });
