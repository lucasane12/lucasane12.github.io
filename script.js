const messages = [
    "Kamu yakin sayang?",
    "Beneran sayang??",
    "Apakah kamu yakin sayang?",
    "Hihi ayo sayang...",
    "Pikirkan lagi sayang hihi!",
    "Nanti kalo kamu gamau aku cedih sayang...",
    "Aku sangat sedih sayang...",
    "Aku bener bener sedih sayang...",
    "Ayo sayangku katakan iyaa! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}