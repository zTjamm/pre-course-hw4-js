let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.querySelector("#start");
const stopButton = document.querySelector('#stop');


startButton.addEventListener('click', function () {
    timerId = setInterval(updateClock, 1); // запускаем  updateClock() каждую секунду
        console.log(true)
        stopButton.removeAttribute('disabled')
        startButton.setAttribute("disabled", "");
});
stopButton.addEventListener('click', function () {
    console.log("stop")
    clearInterval(timerId); // останавливаем таймер
    startButton.removeAttribute("disabled")
    stopButton.setAttribute('disabled', '')
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}