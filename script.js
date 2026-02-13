let userScore = 0;
let computerScore = 0;

let model, webcam, maxPredictions;
let currentPrediction = "-";

const URL = "./model/"; // pasta do modelo

const startBtn = document.getElementById("startBtn");
const playBtn = document.getElementById("playBtn");

startBtn.addEventListener("click", init);
playBtn.addEventListener("click", jogar);

// =======================
// INICIALIZAR MODELO
// =======================

async function init() {

  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  const flip = true;
  webcam = new tmImage.Webcam(300, 300, flip);

  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loop);

  document.getElementById("webcam-container").appendChild(webcam.canvas);

  startBtn.disabled = true;
}

// =======================
// LOOP DA WEBCAM
// =======================

async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

// =======================
// PREDIÇÃO
// =======================

let predictionHistory = [];

async function predict() {

  const prediction = await model.predict(webcam.canvas);

  let highestProbability = 0;
  let bestClass = "-";

  for (let i = 0; i < maxPredictions; i++) {
    if (prediction[i].probability > highestProbability) {
      highestProbability = prediction[i].probability;
      bestClass = prediction[i].className;
    }
  }

  if (highestProbability > 0.85) {
    predictionHistory.push(bestClass);
  }

  if (predictionHistory.length > 10) {
    predictionHistory.shift();
  }

  currentPrediction = getMostFrequent(predictionHistory);
}

function getMostFrequent(arr) {
  if (arr.length === 0) return "-";

  const counts = {};
  arr.forEach(item => {
    counts[item] = (counts[item] || 0) + 1;
  });

  return Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );
}


// =======================
// JOGO
// =======================

function jogar() {

  if (currentPrediction === "-") {
    alert("Mostre um gesto válido!");
    return;
  }

  const computerMove = randomMove();

  document.getElementById("userMove").innerText = currentPrediction;
  document.getElementById("computerMove").innerText = computerMove;

  const winner = checkWinner(currentPrediction, computerMove);

  if (winner === "user") userScore++;
  if (winner === "computer") computerScore++;

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;
}

function randomMove() {
  const moves = ["Pedra", "Papel", "Tesoura"];
  return moves[Math.floor(Math.random() * 3)];
}

function checkWinner(user, computer) {

  if (user === computer) return "draw";

  if (
    (user === "Pedra" && computer === "Tesoura") ||
    (user === "Papel" && computer === "Pedra") ||
    (user === "Tesoura" && computer === "Papel")
  ) {
    return "user";
  }

  return "computer";
}
