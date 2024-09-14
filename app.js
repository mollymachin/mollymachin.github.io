const bannerText = document.querySelector('.sliding-text');

const messages = [
  "Limited Time Discount for Chemistry!",
  "Introductory Session Free of Charge",
  "Tutors Are Available 7 Days Per Week"
];

let index = 0;

setInterval(function() {
  bannerText.textContent = messages[index];
  index = (index + 1) % messages.length;
}, 4000);
