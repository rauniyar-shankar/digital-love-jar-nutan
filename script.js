// Retrieve notes from localStorage or initialize with default notes
let notes = JSON.parse(localStorage.getItem("loveNotes")) || [
    "Never ever ask me if you are enough for me? Darling, You're all I need.",
    "You’re the reason I smile when I check my phone. 💕",
    "You're my sunshine on a cloudy day!",
    "I love how you always make me smile.",
    "Every moment with you is magical.",
    "You are the best thing that ever happened to me.",
    "I can't wait for our next adventure together."
  ];
// Retrieve memories from localStorage or initialize with default memories
let memories = JSON.parse(localStorage.getItem("loveMemory")) || [
    "Apologies for the inconvenience caused, your love Shankyy is working on it !!!"
  ];

// Display a random note
function getRandomNote() {
    if (isNoteDisplayedToday()) {
      document.getElementById("note").innerText =
        "Hey Babe, I know you are excited to see all the notes but I want you to come back tomorrow for a new one. Don't be greedy, love! ";
      return;
    }
  
    if (notes.length === 0) {
      document.getElementById("note").innerText = "No notes available. Add some love!";
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * notes.length);
    document.getElementById("note").innerText = notes[randomIndex];
  
    // Save the date when a note was displayed
    const today = new Date().toLocaleDateString();
    localStorage.setItem("lastNoteDate", today);
  }
  
  // Check if a note has been displayed today
  function isNoteDisplayedToday() {
    const lastNoteDate = localStorage.getItem("lastNoteDate");
    const today = new Date().toLocaleDateString();
    return lastNoteDate === today;
  }
  
// Toggle the Add Note section
function toggleAddNote() {
    const container = document.getElementById("addNoteContainer");
    container.style.display = container.style.display === "block" ? "none" : "block";
  }
  
  // Add a new note
  function addNote() {
    const newNote = document.getElementById("newNote").value.trim();
    if (newNote) {
      notes.push(newNote);
      localStorage.setItem("loveNotes", JSON.stringify(notes));
      document.getElementById("newNote").value = ""; // clear the textarea after saving
      toggleAddNote(); // hide the input section
      alert("Note added successfully!");
    } else {
      alert("Please write something before saving!");
    }
  }
  
  // Display a random memory (can be viewed multiple times in a day)
  function getRandomMemory() {
    const randomIndex = Math.floor(Math.random() * memories.length);
    document.getElementById("note").innerText = memories[randomIndex];
  }
  
  // Add event listeners for the buttons
// Add event listeners for the buttons 
document.getElementById("getNoteBtn").addEventListener("click", getRandomNote);
document.getElementById("getMemoryBtn").addEventListener("click", getRandomMemory);
document.getElementById("saveNoteBtn").addEventListener("click", addNote);  // Fix for adding notes