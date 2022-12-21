let trial = 5;
let rand = Math.round(Math.random() * 100);
console.log(rand);
do {
  guess = Number(prompt(`Enter your guess:`));
  trial--;
  if (guess == rand) {
    console.log(`Congrats,you win`);
  } else if (trial <= 0) {
    console.log(`Sorry you lost.`);
  } else if (guess > rand) {
    console.log(`Decrease your number`);
  } else {
    console.log(`Increase your number`);
  }
} while (trial > 0);
