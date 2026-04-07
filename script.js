let time = 1500;
let timer;
let distractionCount = 0;

// ▶️ Start Timer
function startTimer() {
    timer = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementById("timer").innerText =
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        time--;

        if (time < 0) {
            clearInterval(timer);
            showScore();
        }
    }, 1000);
}

// ⏹ Stop Timer
function stopTimer() {
    clearInterval(timer);
}

// 🚨 Detect Tab Change
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        distractionCount++;
        alert("⚠️ Focus રાખ!");
    }
});

// 📊 Show Score
function showScore() {
    let totalTime = 1500;
    let distractedTime = distractionCount * 5;
    let focusScore = 100 - ((distractedTime / totalTime) * 100);

    let finalScore = Math.floor(focusScore);

    document.getElementById("result").innerText =
        "Your Focus Score: " + finalScore + "%";

    localStorage.setItem("lastScore", finalScore);
}

// 📂 Load Saved Score
window.onload = function () {
    let savedScore = localStorage.getItem("lastScore");
    if (savedScore) {
        document.getElementById("result").innerText =
            "Last Score: " + savedScore + "%";
    }
};

// 🌙 Dark / Light Mode
function toggleMode() {
    document.body.classList.toggle("light-mode");
}

// 🎧 Play Music
function playMusic() {
    let audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audio.play();
    }
