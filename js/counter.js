let streakNum = document.getElementById('num');
let streak = localStorage.getItem("streakDay");

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
    streak++;
    streakNum.innerHTML = streak;
    localStorage.setItem("streakDay", streak);
}

function down() {
    if (streak <= 0) {
        streak = 0;
        streakNum.innerHTML = streak;
        localStorage.setItem("streakDay", streak);
    } 
    else {
        streak--;
        streakNum.innerHTML = streak;
        localStorage.setItem("streakDay", streak);
    }
}