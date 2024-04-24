function divisibleBy(num: number, divisor: number): boolean { return num % divisor == 0 };

const fizzBuzz = () => {  
  for (let n = 0; n < 101; n++) {
    const divisbleByThree: boolean = divisibleBy(n, 3);
    const divisibleByFive: boolean = divisibleBy(n, 5);

    let answer = String(n)

    if (divisbleByThree && divisibleByFive) {
      answer = 'FizzBuzz'
    } else if (divisbleByThree) {
      answer = 'Fizz'
    } else if (divisibleByFive) {
      answer = 'Buzz'
    } 

    console.log(answer);
  }
}

fizzBuzz();