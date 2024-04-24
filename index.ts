function divisibleBy(num: number, divisor: number): boolean { return num % divisor == 0 };

const possibleFactors = [3, 5, 7];

const key: {[index: number]: string} = {
    3: 'Fizz',
    5: 'Buzz',
    7: 'Bang',
}

const fizzBuzz = () => {  
  for (let n = 0; n < 101; n++) {
    let factors: number[] = [];

    possibleFactors.forEach((num) => {
        if (divisibleBy(n, num)) {
            console.log(`${n} is divisible by ${num}`)
            factors.push(num)
        }
    })

    let answer ='';

    if (factors.length > 0) {
      for (let i = 0; i < factors.length; i++) {
        if (answer.length < 5) {
          answer += key[factors[i]]
        }
      }
    } else {
      answer = String(n)
    }

    console.log(answer);
  }
}

fizzBuzz();