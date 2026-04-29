function sendMessage() {
  let input = document.getElementById("messageInput");
  let message = input.value.trim();

  if (message === "") return;

  let chatBox = document.getElementById("chatBox");

  // Create message div
  let msgDiv = document.createElement("div");
  msgDiv.classList.add("message", "sent");
  msgDiv.innerText = message;

  chatBox.appendChild(msgDiv);

  // Auto reply (for demo)
  setTimeout(() => {
    let reply = document.createElement("div");
    reply.classList.add("message", "received");
    reply.innerText = "Reply: " + message;
    chatBox.appendChild(reply);

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Enter key support
document.getElementById("messageInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});