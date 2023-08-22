// skillTest Level 0 Task 0 1
x = 0;
console.log(x)

y = 1;
console.log(y)

x = x + 3;
console.log(x)

y = y + x;
console.log(y)

//Task 0 2 convert Pseudocode in to code

x = 1 + 1 * 2;
console.log(x)

y = (1 + 1) * 2;
console.log(y)

z = 1 + (1 * 2)
console.log(z)

a = 1 + 1 * 2 / 2;
console.log(a)

b = (1 + 1 * 2) / 2;
console.log(b)

//Task 0 3 Write Function name

function hello() {
  console.log("Tshebo");

}
var name = "Hello"
console.log(name);
hello();

// Task 0 4 Write Function even or odd

let number = 56

let  remainder = (number % 2)

if  (remainder == 0 ){

    console.log(`${number} is even`)

    }else{
        console.log(`${number} is odd`)
    }

// Task 0 5 Write Function that returns area of triangle

var sideB = 5;
var sideC = 3;

a = sideB * sideC / 2;
console.log(a)


// Task 0 6 Return maximum number


var arr = [4, 6, 8];

var max = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
                max = arr[i];
                 console.log(`setting max to ` +max);

    }
}

console.log(max);

// example 2


//Task 07   Celsius to Farheneit
// celsiust to Fahrenheit
var cel = 35

Far = cel * 1.8 + 32;

console.log(Far)

//Fahrenheit to celsius
var farH = -20

Celc = farH * 1.8 + 32;

console.log(farH)


// Task 07 Example B

function convertCelToFar(celsius) {
  var fahrenheit = celsius * 9/5 + 32;


  return fahrenheit;

}

convertCelToFar(55);

// Task 08 Convert Hours to minutes to seconds

function time_convert(num)
{
var hours = Math.floor(num / 60);
var minutes = num % 60;
return hours + ":" + minutes;

}
console.log(time_convert(50));
console.log(time_convert(650));
console.log(time_convert(2000));

// Task 09 Function to Print string Output = Vowl     

//In Progress not completed

// Task Combine two string gives output of shared 

//In Progress not completed