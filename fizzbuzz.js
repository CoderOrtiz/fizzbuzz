let numArray = [];

function fizzBuzzGenerator (){
    for (let i = 1; i < 101; i++) {
    
        if (i % 15 == 0){
            numArray.push(" FizzBuzz");
        }
        else if (i % 5 == 0) {
            numArray.push(" Buzz");
        }
        else if (i % 3 == 0) {
            numArray.push(" Fizz");
        }
        else {
            numArray.push(` ${i}`);
        }
    }
    console.log(numArray);
}

fizzBuzzGenerator();