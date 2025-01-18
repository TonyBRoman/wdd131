const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
    menuIcon.classList.toggle('active'); 
});

const yearSpan = document.getElementById("currentYear")
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

const lastModifiedParagraph = document.getElementById("lastModified");
if (lastModifiedParagraph) {
    const lastModified = document.lastModified;
    lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;
}