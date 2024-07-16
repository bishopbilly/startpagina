// script.js

// Function to update date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById("datetime");
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    dateTimeElement.textContent = formattedDateTime;
}

// Update the date and time immediately when the page loads
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);