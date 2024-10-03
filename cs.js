let clicks = 0;
const moneyElement = document.getElementById('money');
const ratingElement = document.getElementById('rating');
const raccoon = document.getElementById('raccoon');

raccoon.addEventListener('click', () => {
  clicks++;
  moneyElement.textContent = clicks;
  updateRating(clicks);
});

function updateRating(clicks) {
  if (clicks >= 10000) {
    ratingElement.textContent = "Бот ЕНОТ";
  } else if (clicks >= 2500) {
    ratingElement.textContent = "Король Енот";
  } else if (clicks >= 500) {
    ratingElement.textContent = "Принц Енот";
  } else if (clicks >= 100) {
    ratingElement.textContent = "Серьезный енот";
  } else if (clicks >= 20) {
    ratingElement.textContent = "Обычный енот";
  } else {
    ratingElement.textContent = "Енотик";
  }
}
