// Menu icon
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Function to check if the screen width is in mobile view
    const isMobile = () => window.innerWidth <= 768;

    // Toggle menu open/close when the button is clicked (only in mobile view)
    menuToggle.addEventListener("click", () => {
        if (isMobile()) {
            nav.classList.toggle("active"); 
            menuToggle.classList.toggle("active"); 

            // Change the icon between ☰ (hamburger) and ✖ (close)
            menuToggle.innerHTML = nav.classList.contains("active") ? "&times;" : "&#9776;";
        }
    });

    // Automatically close menu when resizing to a larger screen
    window.addEventListener("resize", () => {
        if (!isMobile()) {
            nav.classList.remove("active"); 
            menuToggle.classList.remove("active"); 
            menuToggle.innerHTML = "&#9776;"; 
        }
    });
});


