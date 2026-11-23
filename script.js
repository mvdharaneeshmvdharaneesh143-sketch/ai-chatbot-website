
// AI CHATBOT - JAVASCRIPT

const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");
const typingIndicator = document.getElementById("typing-indicator");
const clearButton = document.getElementById("clear-chat");

// DISPLAY MESSAGE
function addMessage(message, sender) {
    const messageElement = document.createElement("div");

    messageElement.classList.add(sender + "-message");
    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// DEMO CHATBOT RESPONSES
function getBotResponse(message) {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! Welcome to AI Chatbot. How can I help you?";
    }

    if (text.includes("name")) {
        return "I am your AI Chatbot demonstration assistant!";
    }

    if (text.includes("how are you")) {
        return "I am working perfectly! Thanks for asking.";
    }

    if (text.includes("help")) {
        return "Sure! Tell me what you need help with.";
    }

    if (text.includes("bye")) {
        return "Goodbye! Have a great day!";
    }

    return "Interesting question! I am currently a demo chatbot. Real AI integration will come later.";
}

// SEND MESSAGE
chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    userInput.value = "";

    typingIndicator.style.display = "block";

    setTimeout(function() {
        typingIndicator.style.display = "none";

        const response = getBotResponse(message);

        addMessage(response, "bot");
    }, 1000);
});

// CLEAR CONVERSATION
clearButton.addEventListener("click", function() {
    chatMessages.innerHTML = "";

    addMessage(
        "Hello! Welcome to AI Chatbot. How can I help you?",
        "bot"
    );

    typingIndicator.style.display = "none";
});

