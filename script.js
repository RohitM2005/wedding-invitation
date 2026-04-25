document.addEventListener("DOMContentLoaded", function () {

  // ✅ FIXED DATE (NO GLITCH)
  const weddingDate = new Date(2026, 4, 4, 18, 55, 0).getTime();

  const countdownEl = document.querySelector("#countdown");
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");
  const secsEl = document.getElementById("cd-secs");

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  function updateCountdown() {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    if (isNaN(gap)) return; // 🔥 safety fix

    if (gap <= 0) {
      if (countdownEl) {
        countdownEl.innerHTML = "<h2>🎉 Wedding Started!</h2>";
      }
      return;
    }

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    updateFlip(daysEl, days);
    updateFlip(hoursEl, hours);
    updateFlip(minsEl, minutes);
    updateFlip(secsEl, seconds);
  }

  function updateFlip(element, value) {
    if (!element) return;

    const newValue = String(value).padStart(2, '0');

    if (element.innerText !== newValue) {
      element.classList.add("flip");
      setTimeout(() => element.classList.remove("flip"), 300);
      element.innerText = newValue;
    }
  }

  function startCountdown() {
  function tick() {
    updateCountdown();

    // 🔥 precise sync with real time
    const now = Date.now();
    const delay = 1000 - (now % 1000);

    setTimeout(tick, delay);
  }

  tick();
}
  startCountdown();


});