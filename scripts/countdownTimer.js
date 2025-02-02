const raceStart = new Date('Mar 16, 2025 05:00:00'); 

setCountdown(raceStart); 

setInterval(function () {
    setCountdown(raceStart);
}, 1000);

function setCountdown(countingDownTime) {
    let now = new Date();
    let timeRemaining = countingDownTime - now;


    if (timeRemaining <= 0) {
        console.log("Countdown ended");
        document.getElementById('days').textContent = "00";
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        return;
    }

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hoursToDisplay = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesToDisplay = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let secondsToDisplay = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hoursToDisplay.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutesToDisplay.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = secondsToDisplay.toString().padStart(2, '0');
}