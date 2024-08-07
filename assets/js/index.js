
const texts = [
    "The World's first stablecoin",
    "Driving the future of Money",
    "Exponential Growth",
    "Unparalleled Liquidity"
];

const typingSpeed = 100; // Speed of typing in milliseconds
const deletingSpeed = 50; // Speed of deleting in milliseconds
const delayBetweenTexts = 1000; // Delay before starting to type next text

function typeWriter(element, text, speed, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(callback, delayBetweenTexts);
        }
    }
    type();
}

function deleteWriter(element, speed, callback) {
    let i = element.textContent.length;
    function erase() {
        if (i > 0) {
            element.textContent = element.textContent.substring(0, i - 1);
            i--;
            setTimeout(erase, speed);
        } else {
            setTimeout(callback, delayBetweenTexts);
        }
    }
    erase();
}

function startTypingEffect() {
    const typewriterElement = document.getElementById("typewriter-text");
    let index = 0;

    function nextText() {
        if (index >= texts.length) {
            index = 0; // Restart the cycle if needed
        }

        const text = texts[index];
        index++;

        typeWriter(typewriterElement, text, typingSpeed, () => {
            deleteWriter(typewriterElement, deletingSpeed, nextText);
        });
    }

    nextText();
}

document.addEventListener("DOMContentLoaded", startTypingEffect);