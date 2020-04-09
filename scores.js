function printHighScores() {
  var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

  highScores.sort((a, b) => {
    b.score - a.score;
  });

  highScores.forEach(score => {
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    var olEl = document.getElementById("highScores");
    olEl.appendChild(liTag);
  });
}

function clearHighScores() {
  window.localStorage.removeItem("highScores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighScores;
printHighScores();
