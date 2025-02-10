// Get the date 

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



document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "p001", name: "iPhone X" },
        { id: "p002", name: "Laptop Surface" },
        { id: "p003", name: "Airpods" },
        { id: "p004", name: "Nintendo Switch" },
        { id: "p005", name: "Smarth Watch" }
    ];

    const productSelect = document.getElementById("product");
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    if (window.location.pathname.includes("thanks.html")) {
        let count = parseInt(localStorage.getItem("reviewCount") || 0) + 1;
        localStorage.setItem("reviewCount", count);
        document.getElementById("review-counter").textContent = `Total Reviews Submitted: ${count}`;
    }
});
