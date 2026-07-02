// ===================================
// LUXECOMFORT CLEANING SERVICES
// script.js
// ===================================

// Smooth fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Spin & Win
const prizes = [
  "🎉 Congratulations! You won 10% OFF!",
  "🧽 Free Bathroom Cleaning!",
  "🌸 Free Premium Scent Upgrade!",
  "🎁 KSh 300 OFF your next booking!",
  "😊 Better luck next time!"
];

const spinButton = document.getElementById("spinButton");
const spinResult = document.getElementById("spinResult");

if (spinButton) {
  spinButton.addEventListener("click", () => {
    const prize = prizes[Math.floor(Math.random() * prizes.length)];
    spinResult.textContent = prize;
    spinButton.disabled = true;
    spinButton.textContent = "Spin Used";
  });
}

// Booking form
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("🎉 Thank you for choosing LuxeComfort Cleaning Services! We have received your booking request and will contact you shortly.");

    bookingForm.reset();
  });
}
