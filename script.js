const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const textInputSection = document.getElementById("text-input");
const textOutputSection = document.getElementById("text-output");
const textarea = document.querySelector("textarea");
const defaultMessage = document.querySelector(".default-message");
const copyButton = document.getElementById("copy-button");

encryptButton.addEventListener("click", function () {
  encryptMessage();
});

decryptButton.addEventListener("click", function () {
  decryptMessage();
});

copyButton.addEventListener("click", function () {
  copyToClipboard();
});

function copyToClipboard() {
  let text = document.querySelector(".message");
  navigator.clipboard.writeText(text.innerHTML);
}

function deleteMessage() {
  let messageToDelete = document.querySelector(".message");
  if (messageToDelete !== null) {
    messageToDelete.parentNode.removeChild(messageToDelete);
  }
}

function displayMessage(message) {
  deleteMessage();
  defaultMessage.setAttribute("class", "invisible");
  copyButton.removeAttribute("class");
  let text = document.createElement("div");
  text.setAttribute("class", "message");
  text.innerHTML = message;
  textOutputSection.insertBefore(text, copyButton);
  textarea.value = "";
}

function encryptMessage() {
  let message = textarea.value;
  let arrayMessage = message.split("");
  let encryptedMessage = [];

  for (let i = 0; i < arrayMessage.length; i++) {
    switch (arrayMessage[i]) {
      case "e":
        encryptedMessage.push("enter");
        break;
      case "i":
        encryptedMessage.push("imes");
        break;
      case "a":
        encryptedMessage.push("ai");
        break;
      case "o":
        encryptedMessage.push("ober");
        break;
      case "u":
        encryptedMessage.push("ufat");
        break;
      default:
        encryptedMessage.push(arrayMessage[i]);
    }
  }

  let messageToDisplay = encryptedMessage.join("");
  displayMessage(messageToDisplay);
}

function decryptMessage() {
  let message = textarea.value;
  let arrayToDecrypt = message.split("");
  let decryptedArray = [];

  for (let i = 0; i < arrayToDecrypt.length; i++) {
    switch (arrayToDecrypt[i]) {
      case "e":
        arrayToDecrypt.splice(arrayToDecrypt.indexOf("e"), 4);
        decryptedArray.push("e");
        break;
      case "i":
        arrayToDecrypt.splice(arrayToDecrypt.indexOf("i"), 4, "i");
        decryptedArray.push("i");
        break;
      case "a":
        arrayToDecrypt.splice(arrayToDecrypt.indexOf("a"), 2, "a");
        decryptedArray.push("a");
        break;
      case "o":
        arrayToDecrypt.splice(arrayToDecrypt.indexOf("o"), 4, "o");
        decryptedArray.push("o");
        break;
      case "u":
        arrayToDecrypt.splice(arrayToDecrypt.indexOf("u"), 4, "u");
        decryptedArray.push("u");
        break;
      default:
        decryptedArray.push(arrayToDecrypt[i]);
    }
  }

  let messageToDisplay = decryptedArray.join("");
  displayMessage(messageToDisplay);
}
