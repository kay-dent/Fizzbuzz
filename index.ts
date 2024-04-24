function divisibleBy(num: number, divisor: number): boolean { return num % divisor == 0 };

const fizzBuzz = () => {  
  for (let n = 0; n < 101; n++) {
    const divisbleByThree: boolean = divisibleBy(n, 3);
    const divisibleByFive: boolean = divisibleBy(n, 5);
    if (divisbleByThree && divisibleByFive) {
      console.log('FizzBuzz')
    } else if (divisbleByThree) {
      console.log('Fizz')
    } else if (divisibleByFive) {
      console.log('Buzz')
    } else {
      console.log(n);
    }
  }
}

fizzBuzz();