const findPrimes = require("./primeCalc");
const drawProgressBar = require("./progressBar");

function main() {
  const args = process.argv.slice(2);
  const n = parseInt(args[0], 10);

  if (isNaN(n)) {
    console.error("Please provide a number");
    process.exit(1);
  }

  // Use findPrimes function to get the first N prime numbers
  const primes = findPrimes(n);

  primes.forEach((prime, index) => {
    // Update the progress bar for each prime number found
    drawProgressBar(index + 1, n);
  });

  // Display the results
  console.log("\nPrimes:", primes);
}

main();
