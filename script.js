const timeDisplay = document.getElementById("epoch-timer");

function displayTime() {
    const time = Date.now();
    timeDisplay.textContent = time;   
}

displayTime();
