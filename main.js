const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const code = document.getElementsByTagName("h3")[0];
const angle = document.getElementById("angle");
const randomButton = document.getElementsByTagName("button")[0];

const setColor = (angle, color1, color2) => {
  document.body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  code.textContent = `linear-gradient(${angle}deg, ${color1.toUpperCase()}, ${color2.toUpperCase()})`;
};

const getRandomAngle = () => Math.floor(Math.random() * 361);

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const randomize = () => {
  angle.value = getRandomAngle();
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setColor(angle.value, color1.value, color2.value);
};

angle.addEventListener("input", () => {
  setColor(angle.value, color1.value, color2.value);
});

color1.addEventListener("input", () => {
  setColor(angle.value, color1.value, color2.value);
});

color2.addEventListener("input", () => {
  setColor(angle.value, color1.value, color2.value);
});

randomButton.onclick = randomize;

randomize();
