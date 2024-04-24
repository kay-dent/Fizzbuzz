function divisibleBy(num: number, divisor: number): boolean { return num % divisor == 0 };

const possibleFactors = [3, 5, 7, 11];

const key: {[index: number]: Function } = {
    3: (answer: string) => answer += 'Fizz',
    5: (answer: string) => answer += 'Buzz',
    7: (answer: string) => {
        if (answer.length < 5) {
           return answer += 'Bang'
        }
    },
    11: (answer: string) => answer = 'Bong'
}

const fizzBuzz = () => {  
  for (let n = 0; n < 101; n++) {
    let factors: number[] = [];

    possibleFactors.forEach((num) => {
        if (divisibleBy(n, num)) {
            factors.push(num)
        }
    })

    let answer: string = '';

    if (factors.length > 0) {
      for (let i = 0; i < factors.length; i++) {
        answer = key[factors[i]](answer)
      }
    } else {
      answer = String(n)
    }

    console.log(answer);
  }
}

fizzBuzz();