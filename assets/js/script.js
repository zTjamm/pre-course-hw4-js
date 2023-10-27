let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.querySelector("#start");
startButton.addEventListener('click', function () {
    timerId = setInterval(updateClock, 1); // запускаем  updateClock() каждую секунду
        console.log(timerId)
});

const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', function () {
    clearInterval(timerId); // останавливаем таймер
    console.log(timerId)
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}