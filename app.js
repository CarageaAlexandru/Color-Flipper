const colors = ["green", "red", "rgba(133,122,200)", "f15025", "yellow"];

// accessing the btn and the color

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

// event listener where we are going to change the background color.

btn.addEventListener('click', function () {
  // manualy changing the background color
  // generating random number brtween 0 and 3 (4 items in the array)
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];

  // Showing the color currently displaying
  color.textContent = colors[randomNumber];
});

// function to generate a random number;

getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}

