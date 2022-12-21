let trial = 5;
let rand = Math.round(Math.random() * 100);
console.log(rand);
do {
  guess = Number(
    prompt(`Try to find my number.Enter your guess between 0-100:`)
  );
  trial--;
  if (guess == rand) {
    alert(`Congrats,you win`);
  } else if (trial <= 0) {
    alert(`Sorry you lost.`);
  } else if (guess > rand) {
    alert(`Decrease your number`);
  } else {
    alert(`Increase your number`);
  }
} while (trial > 0);
