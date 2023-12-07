function isPrime(num, knownPrimes) {
  for (let i = 0; i < knownPrimes.length; i++) {
    if (knownPrimes[i] > Math.sqrt(num)) break;
    if (num % knownPrimes[i] === 0) return false;
  }
  return true;
}

function findPrimes(n) {
  if (n < 1) return [];
  let primes = [2];
  for (let num = 3; primes.length < n; num += 2) {
    // Skip even numbers > 2
    if (isPrime(num, primes)) {
      primes.push(num);
    }
  }
  return primes;
}

module.exports = findPrimes;
