const stopwatch = document.getElementById("stopwatch");

let TIME = 0;
let timerId;

function printTime() {
    TIME += 0.01; // 0.1초씩 증가

    const min = Math.floor(TIME / 60);
    const sec = Math.floor(TIME % 60);
    const msec = Math.floor((TIME % 1) * 100); // 밀리초를 00-99로 계산

    const s_time = String(min).padStart(2, '0') + ":" + 
                   String(sec).padStart(2, '0') + "." + 
                   String(msec).padStart(2, '0'); // 밀리초를 2자리로 표시

    stopwatch.textContent = s_time;
}

function startClock() {
    timerId = setInterval(printTime, 10); // 100ms마다 호출
}

function stopClock() {
    if (timerId != null) {
        clearInterval(timerId);
        timerId = null;
    }
}

function resetClock() {
    stopClock();
    stopwatch.textContent = "00:00.00"; // 초기화 시 표시 형식
    TIME = 0;
}
