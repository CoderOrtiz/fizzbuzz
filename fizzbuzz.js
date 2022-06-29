let numArray = [];

function fizzBuzzGenerator (){
    for (let i = 1; i < 101; i++) {
    
        if (i % 5 == 0 && i % 3 == 0){
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

// document.querySelector("h3").textContent = numArray;
