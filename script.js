
function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const chat = document.querySelector(".chat");

    const newMessage = document.createElement("div");
    newMessage.className = "message";

    newMessage.innerHTML = "<strong>You:</strong> " +
        escapeHTML(message);

    chat.insertBefore(newMessage, input);

    input.value = "";
}

function escapeHTML(text) {
    const element = document.createElement("div");
    element.textContent = text;
    return element.innerHTML;
}
