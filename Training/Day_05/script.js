// Button click event
const clickBtn = document.getElementById("clickBtn");
const msg = document.getElementById("msg");

clickBtn.addEventListener("click", function () {
    msg.innerText = "Button Clicked! Function Executed.";
});

// Input event
const nameInput = document.getElementById("nameInput");
const nameText = document.getElementById("nameText");

nameInput.addEventListener("keyup", function () {
    nameText.innerText = "Hello, " + nameInput.value;
});

// Mouse events
const hoverBtn = document.getElementById("hoverBtn");

hoverBtn.addEventListener("mouseover", function () {
    hoverBtn.style.background = "#16a34a";
});

hoverBtn.addEventListener("mouseout", function () {
    hoverBtn.style.background = "#2563eb";
});
