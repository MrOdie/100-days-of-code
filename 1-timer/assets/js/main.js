let timer;
let sec = 0;
let min = 0;
let hour = 0;
let timer_element = document.getElementById("timer");

let start_button = document.getElementById("start");

start_button.addEventListener("click", function() {
  timer = setInterval(TimerHandler, 1000);
  start_button.style.display = "none";
  reset_button.style.display = "inline-block";
});

let stop_button = document.getElementById("stop");

stop_button.addEventListener("click", function() {
  timer = clearInterval(timer);

});

let reset_button = document.getElementById("reset");

reset_button.style.display = "none";

reset_button.addEventListener("click", function() {
  timer = clearInterval(timer);
  reset_button.disabled = true;
  sec = 0;
  min = 0;
  hour = 0;
  timer_element.innerHTML = "00:00:00";
  reset_button.style.display = "none";
  start_button.style.display = "inline-block";
});

function TimerHandler () {
  sec++;

  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hour++;
  }
  //console.log(hour + ':' + min + ':' + sec);
  DisplayTime();
}

function DisplayTime() {
  let sec_pre = sec;
  let min_pre = min;
  let hour_pre = hour;

  if (sec < 10) {
    sec_pre = "0"+sec;
  }
  if (min < 10) {
    min_pre = "0"+min;
  }
  if (hour < 10) {
    hour_pre = "0"+hour;
  }

  timer_element.innerHTML = hour_pre + ":" + min_pre + ":" + sec_pre;
}

