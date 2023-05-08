// Знаходимо елементи DOM
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const arrayInput = document.getElementById("array");
const generateBtn = document.querySelector(".generate-btn");
const resultOutput = document.querySelector(".result");

// Функція, яка знаходить випадкове число в заданому діапазоні
function getRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Функція, яка обробляє клік на кнопці "Згенерувати число"
function generateNumber() {
  const start = Number(startInput.value);
  const end = Number(endInput.value);
  const array = arrayInput.value.split(",").map(Number);

  if (!isNaN(start) && !isNaN(end)) {
    // Генеруємо випадкове число в діапазоні
    const randomNumber = getRandomNumber(start, end);
    resultOutput.textContent = `Згенероване число: ${randomNumber}`;
  } else if (array.every(Number)) {
    // Випадок, коли користувач ввів масив чисел
    const randomNumber = array[Math.floor(Math.random() * array.length)];
    resultOutput.textContent = `Згенероване число: ${randomNumber}`;
  } else {
    resultOutput.textContent = "Будь ласка, введіть коректні значення";
  }
}

// Додаємо обробник події на кнопку "Згенерувати число"
generateBtn.addEventListener("click", generateNumber);
