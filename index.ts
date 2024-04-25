function divisibleBy(num: number, divisor: number): boolean { return num % divisor == 0 };

const key: {[index: number]: Function } = {
    3: (answer: string[]) => {
        answer.push('Fizz');
        return answer;
    },
    5: (answer: string[]) => {
        answer.push('Buzz');
        return answer;
    },
    7: (answer: string[]) => {
        if (answer.length < 2) {
          answer.push('Bang');
          return answer;
        } else {
          return ['Bang'];
        } 
    },
    11: (answer: string[]) => answer = ['Bong'],
    13: (answer: string[]) => {
        let newAnswer: string[] = []
        for (let i = 0; i < answer.length; i++) {
            if (answer[i][0] == 'B') { newAnswer.push('Fezz') };
            newAnswer.push(answer[i])
        }
        if (!newAnswer.includes('Fezz')) { newAnswer.push('Fezz') } 
        return newAnswer;
    },
    17: (answer: string[]) => answer = answer.reverse()

}

const fizzBuzz = () => {  
  for (let n = 0; n < 101; n++) {
    let answer: string[] = [];

    for (const num of Object.keys(key)) {
      if (divisibleBy(n, Number(num))) {
        answer = key[Number(num)](answer)
      }
    }

    if (answer.length == 0) { answer.push(String(n))}

    answer.length > 1 ? console.log(answer.join('')) : console.log(answer[0]);
  }
}

fizzBuzz();