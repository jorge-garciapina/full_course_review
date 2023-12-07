const readline = require("readline");

function drawProgressBar(completed, total, size = 30) {
  const percentage = (completed / total).toFixed(2);
  const filledBarLength = Math.round(size * percentage);
  const emptyBarLength = size - filledBarLength;

  const filledBar = "\x1b[42m" + " ".repeat(filledBarLength) + "\x1b[0m"; // green background
  const emptyBar = "\x1b[40m" + " ".repeat(emptyBarLength) + "\x1b[0m"; // black background
  const displayPercentage = `\x1b[33m ${Math.round(percentage * 100)}%\x1b[0m`; // yellow text

  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`[${filledBar}${emptyBar}]${displayPercentage}`);
}

module.exports = drawProgressBar;
