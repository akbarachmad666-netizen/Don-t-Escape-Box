let hasKey = false;
let code = "123";

// Update text on screen
function setText(message) {
  document.getElementById("text").innerText = message;
}

// Update inventory display
function updateInventory() {
  document.getElementById("items").innerText = hasKey ? "Key 🔑" : "Empty";
}

// Interactions
function checkBox() {
  if (!hasKey) {
    setText("You found a small key.");
    hasKey = true;
    updateInventory();
  } else {
    setText("The box is empty.");
  }
}

function checkPaper() {
  setText("The paper reads: 'The code is 123'.");
}

function checkDoor() {
  if (!hasKey) {
    setText("The door is locked.");
    return;
  }

  let input = prompt("Enter the code:");
  if (input === code) {
    setText("You escaped successfully! 🎉");
  } else {
    setText("Wrong code. Try again.");
  }
}
