function divisbleByThree(num: number): boolean { return num % 3 == 0 };
function divisibleByFive(num: number): boolean { return num % 5 == 0 };

const fizzBuzz = () => {  
  for (let n = 0; n < 101; n++) {
    if (divisbleByThree(n) && divisibleByFive(n)) {
      console.log('FizzBuzz')
    } else if (n % 3 === 0) {
      console.log('Fizz')
    } else if (n % 5 == 0) {
      console.log('Buzz')
    } else {
      console.log(n);
    }
  }
}

fizzBuzz();