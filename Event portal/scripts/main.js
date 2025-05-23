// Welcome message
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page fully loaded");

// Sample event data
const events = [
  { name: "Music Fest", date: "2025-06-10", type: "music", seats: 20 },
  { name: "Tech Meetup", date: "2025-06-15", type: "tech", seats: 0 }
];

// Render events
const eventList = document.getElementById("eventList");
events.forEach(event => {
  if (new Date(event.date) > new Date() && event.seats > 0) {
    const card = document.createElement("div");
    card.className = "eventCard";
    card.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p><p>Seats: ${event.seats}</p>`;
    eventList.appendChild(card);
  }
});

// Form handling
document.getElementById("eventForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formOutput").textContent = "Thanks for registering!";
});

// Video event
document.getElementById("promoVideo").oncanplay = () => {
  document.getElementById("videoMessage").textContent = "Video ready to play.";
};
