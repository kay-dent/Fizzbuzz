function divisbleByThree(x) { return x % 3 == 0; }
;
function divisibleByFive(x) { return x % 5 == 0; }
;
var fizzBuzz = function () {
    for (var n = 0; n < 101; n++) {
        if (divisbleByThree(n) && divisibleByFive(n)) {
            console.log('FizzBuzz');
        }
        else if (n % 3 === 0) {
            console.log('Fizz');
        }
        else if (n % 5 == 0) {
            console.log('Buzz');
        }
        else {
            console.log(n);
        }
    }
};
fizzBuzz();
