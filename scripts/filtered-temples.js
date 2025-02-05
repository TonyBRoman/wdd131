// Menu icon
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
    menuIcon.classList.toggle('active'); 
});

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

document.addEventListener("DOMContentLoaded", function () {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
          },
          {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
          },
          {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
          },
          {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
          },
          {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
          },
          {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
          },
          {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
          },
          {
              templeName: "London England",
              location: "London, England",
              dedicated: "1958, September, 7",
              area: 42652,
              imageUrl:
              "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-55898.jpg"
          },
          {
              templeName: "Rome Italy",
              location: "Rome, Italy",
              dedicated: "2019, March, 10",
              area: 41010,
              imageUrl: 
              "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
          },
          {
              templeName: "Tokyo Japan",
              location: "Tokyo, Japan",
              dedicated: "1980, October, 27",
              area: 53997,
              imageUrl: 
              "https://tokyojapantemple.jp/wp-content/uploads/2022/04/about_history-scaled.jpeg"
          },
          {
              templeName: "Frankfurt Germany",
              location: "Frnkfurt, Germany",
              dedicated:"1987, August, 28",
              area: 32895,
              imageUrl:
              "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
          },
          {
            templeName: "Tijuana Mexico",
            location: "Tijuana, Mexico",
            dedicated: "2025, December, 13",
            area: 33367,
            imageUrl: 
            "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-14590-main.jpg"
          },
          {
            templeName: "Kirtland Ohio",
            location: "Kirtland, Ohio, United States",
            dedicated: "1836, March, 27",
            area: 15000,
            imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
          },
          {
            templeName: "Nauvoo Illinois",
            location: "Nauvoo, Illinois, United States",
            dedicated: "1846, May, 1",
            area: 50000,
            imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg"
          },
          {
            templeName: "Colonia Juarez Chihuahua Mexico",
            location: "Chihuahua, Mexico",
            dedicated: "1999, February, 25",
            area: 6800,
            imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-1601-main.jpg"
          }

    ];

    const gridContainer = document.querySelector(".res-grid");

    if (!gridContainer) {
        console.error("The container '.res-grid' was not found in the HTML.");
        return;
    }

    function displayTemples(filteredTemples) { 
        gridContainer.innerHTML = "";
        filteredTemples.forEach(temple => {
            const card = document.createElement("div");
            card.classList.add("temple-card");

            card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq. ft.</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
            `;

            gridContainer.appendChild(card);
        });
    }

    function filterTemples(category) {
        let filteredTemples;

        switch (category) {
            case "Old":
                filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
                break;
            case "New": 
                filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
                break;
            case "Large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case "Small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case "Home":
            default:
                filteredTemples = temples;
                break;
        }
        displayTemples(filteredTemples);
    }

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            const category = this.textContent.trim(); 
            filterTemples(category);
        });
    });

    filterTemples("Home");
});
