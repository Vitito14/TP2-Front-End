// ==============================
// Mobile Menu
// ==============================

const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ==============================
// Close Menu When Clicking Link
// ==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// ==============================
// Contact Form (UI Only)
// ==============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please complete all fields.");
        return;
    }

    alert(
        "Thank you, " +
        name +
        "! Your message has been received.\n\nWe will contact you soon."
    );

    form.reset();

});

// ==============================
// Header Shadow on Scroll
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.08)";
    }

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});