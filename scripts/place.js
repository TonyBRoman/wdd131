// Get the Date
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

// Weather 

document.addEventListener("DOMContentLoaded", () => {
    const temperature = 10;
    const windSpeed = 5;

    const calculateWindChill = (temp, speed) => {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    };

    const windChillElement = document.getElementById("windChill");
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
    } 
    else {
        windChillElement.textContent = "NA";
    }
});