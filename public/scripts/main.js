// /public/scripts/main.js

// Image preview
const chartInput = document.getElementById("chartInput");
const previewImage = document.getElementById("previewImage");

chartInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    previewImage.src = URL.createObjectURL(file);
  }
});

// Fake chat system (temporary until AI is added)
const chatForm = document.getElementById("chatForm");
const chatMessages = document.getElementById("chatMessages");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  if (userText) {
    const userMsg = document.createElement("div");
    userMsg.textContent = "🧑 You: " + userText;
    chatMessages.appendChild(userMsg);

    const botMsg = document.createElement("div");
    botMsg.textContent = "🤖 Bot: (AI response coming soon...)";
    chatMessages.appendChild(botMsg);

    input.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
