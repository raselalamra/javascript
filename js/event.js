// Red Button Color
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Blue Button Color
const blueButton = document.getElementById("makeBlue");
blueButton.onclick = makeBlueButton;

function makeBlueButton() {
  document.body.style.backgroundColor = "blue";
}

// Green Button Color
const greenButton = document.getElementById("makeGreen");

greenButton.onclick = function makeGreenButton() {
  document.body.style.backgroundColor = "green";
};

// Golden Rod Button Color
const goldenRodButton = document.getElementById("makeGoldenRod");
goldenRodButton.addEventListener("click", makeGoldenRodButton);

function makeGoldenRodButton() {
  document.body.style.backgroundColor = "goldenrod";
}

// Hot Pink Button Color
const makeHotPink = document.getElementById("make-hot-pink");
makeHotPink.addEventListener("click", function () {
  document.body.style.backgroundColor = "hotpink";
});

// Black Button Color
document.getElementById('makeBlack').addEventListener('click', function (){
  document.body.style.backgroundColor = 'black'
});