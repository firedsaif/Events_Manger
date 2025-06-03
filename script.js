// sample random data for events
const eventsData = [
  {
    id: 1,
    name: "Nascon 2025",
    datetime: "June 15, 2025 - 9:00 AM",
    location: "Fast, Islamabad",
    description:
      "Join us on NASCON for the uni's biggest event of the year! A day filled with exciting activities, competitions, and networking opportunities.",
  },
  {
    id: 2,
    name: "Music Festival",
    datetime: "July 20, 2025 - 6:00 PM",
    location: "PARK F11-1, Islamabad",
    description:
      "Enjoy a night of live music featuring local bands and artists. Bring your friends and family for an unforgettable evening under the stars.",
  },
  {
    id: 3,
    name: "Local Food Fair",
    datetime: "June 25, 2025 - 11:00 AM",
    location: "Main Street Plaza",
    description:
      "Discover local cuisine, meet local chefs, and enjoy cooking demonstrations and tastings from the community.",
  },
  {
    id: 4,
    name: "Art Gallery Opening",
    datetime: "July 5, 2025 - 7:00 PM",
    location: "F10-2, Islamabad",
    description:
      "Celebrate the opening of our new contemporary art exhibition featuring works from emerging local artists.",
  },
  {
    id: 5,
    name: "Business Networking Event",
    datetime: "June 30, 2025 - 5:30 PM",
    location: "Gulberg Greens, Islamabad",
    description:
      "Connect with professionals, entrepreneurs, and business leaders in your area for meaningful networking.",
  },
]

// writing html code for each event
function createEventCard(event) {
  return `
        <div class="event-card">
            <div class="event-name">${event.name}</div>
            <div class="event-datetime">${event.datetime}</div>
            <div class="event-location">📍 ${event.location}</div>
            <div class="event-description">${event.description}</div>
            <button class="register-btn" onclick="handleRegister('${event.name}')">Register</button>
        </div>
    `
}

// parsing all the events and showing them on the page
function renderEvents(events) {
  const eventsContainer = document.getElementById("eventsContainer")
  eventsContainer.innerHTML = events.map((event) => createEventCard(event)).join("\n")
}

// search
function handleSearch() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase()
  const filteredEvents = eventsData.filter((event) => event.name.toLowerCase().includes(searchTerm))
  renderEvents(filteredEvents)
}

// register button (just gives an alert )
function handleRegister(eventName) {
  alert(`Registration for "${eventName}" - Feature coming soon!`)
}

// main
document.addEventListener("DOMContentLoaded", () => {
  renderEvents(eventsData)

  const searchInput = document.getElementById("searchInput")
  searchInput.addEventListener("input", handleSearch)
})
