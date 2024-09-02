const date = new Date();
let time1 = document.getElementById("time_format");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let am_pm = document.getElementById("am_pm");
let date1 = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
const maindiv = document.getElementById("main_div");
let interval;

time1.addEventListener("change", () => {
  if (interval) {
    clearInterval(interval);
  }
  timee = time1.value;
  if (timee == "12") {
    time12();
  }
  if (timee == "24") {
    time24();
  }
});

function time12() {
  interval = setInterval(() => {
    let date = new Date();
    hour.textContent =
      date.getHours() < 10 ? "0" + date.getHours() : "0" + date.getHours() - 12;
    min.textContent =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    sec.textContent =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    am_pm.textContent = date.getHours() < 12 ? "AM" : "PM";
    date1.textContent = date.getDate();
    month.textContent = date.getMonth();
    year.textContent = date.getFullYear();
  });
}
function time24() {
  interval = setInterval(() => {
    let date = new Date();
    hour.textContent = date.getHours();
    min.textContent =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    sec.textContent =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    am_pm.textContent = date.getHours() < 12 ? "AM" : "PM";
    date1.textContent = date.getDate();
    month.textContent = date.getMonth();
    year.textContent = date.getFullYear();
  });
}
