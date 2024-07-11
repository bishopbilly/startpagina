// script.js

// Function to update date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById("datetime");
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    dateTimeElement.textContent = formattedDateTime;
}

function timeOfDay() {
    const timeOfDayElement = document.getElementById("timeOfDay");
    const hour = new Date().getHours();
    var timeOfDay;
    if (hour >= 18) {
        timeOfDay = "navond";
    }
    else if (hour >= 12) {
        timeOfDay = "middag";
    }
    else if (hour >= 6) {
        timeOfDay = "morgen";
    }
    else {
        timeOfDay = "nacht";
    }
    timeOfDayElement.textContent = timeOfDay
}

// Update the date and time immediately when the page loads
updateDateTime();
timeOfDay();

// Update the date and time every second
setInterval(updateDateTime, 1000);