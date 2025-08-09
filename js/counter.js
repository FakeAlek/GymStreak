// The code is not yet perfect; work is still ongoing.

let streakNum = document.getElementById('num');
let streak = localStorage.getItem("streakDay");
const button = document.getElementById('streakUpBTN');

const audio = new Audio("./assets/button.mp3");

function start() {
    if (streak == null) {
        streak = 0;
        localStorage.setItem("streakDay", streak);
        streakNum.innerHTML = streak;
    }
    streakNum.innerHTML = streak;
}
start();

function up() {
    audio.currentTime = 0;
    audio.play();
    streak++;
    streakNum.innerHTML = streak;
    localStorage.setItem("streakDay", streak);
    confettiAnim();
}

function down() {
    if (streak <= 0) {
        streak = 0;
        streakNum.innerHTML = streak;
        localStorage.setItem("streakDay", streak);
    } 
    else {
        audio.currentTime = 0;
        audio.play();
        streak--;
        streakNum.innerHTML = streak;
        localStorage.setItem("streakDay", streak);
    }
}

function confettiAnim() {
    const duration = 1 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
        startVelocity: 35,
        spread: 360,
        ticks: 120,
        zIndex: 1000
    };

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval)
        }

        for (let i = 0; i < 3; i++) {
            confetti(Object.assign({}, defaults, {
                particleCount: 25,
                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.2
                }
            }));
        }
    }, 150);
}