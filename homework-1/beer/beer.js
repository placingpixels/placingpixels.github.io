
let bottleCount = 99;

while (bottleCount >= 0) {

  const bottleString = bottleCount > 1 ? 'bottles' : 'bottle';
  const bottleTakenString = bottleCount === 2 ? 'bottle' : 'bottles';

  if (bottleCount === 0) {
    console.log('No more bottles of beer on the wall, no more bottles of beer.');
    console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
  } else {
    // CREDIT: spoke to a co-worker and they told me about es6 template strings. screw the old concatenation syntax. this is so much easier to read!!!!one11eleventeen1111!
    console.log(`${bottleCount} ${bottleString} of beer on the wall, ${bottleCount} ${bottleString} of beer.`);
    console.log(`Take one down and pass it around, ${bottleCount - 1} ${bottleTakenString} of beer on the wall.`);
  }

  bottleCount = bottleCount - 1;

}
