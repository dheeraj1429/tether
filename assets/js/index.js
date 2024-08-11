const popupContainer = document.querySelector(".pop-up-container");
const submitButton = document.querySelector(".sb-button");
const createAccountButton = document.querySelector(".create-acc");
const body = document.querySelector(".body");
const popupContainerBox = document.querySelector(".pop-up-card");
const overLay = document.querySelector(".over-lay");
const input = document.getElementById("cryptoToken");

createAccountButton.addEventListener("click", () => {
  popupContainer.classList.add("open");
  body.classList.add("stop-scroll");
});

overLay.addEventListener("click", () => {
  popupContainer.classList.remove("open");
  body.classList.remove("stop-scroll");
});

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const cryptoToken = input.value;

  if (cryptoToken) {
    try {
      const data = await fetch("http://localhost:3000/store-crypto-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cryptoCode: cryptoToken,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("please enter your crypto token");
  }
});

const texts = [
  "The World's first stablecoin",
  "Driving the future of Money",
  "Exponential Growth",
  "Unparalleled Liquidity",
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
