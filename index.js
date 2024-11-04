//1
function greet(){
    console.log("Hello, World!")
}
greet();

//2
function favoriteNumber(){
    console.log(42);
}
favoriteNumber();

//3

function magicEightBall(){
    const response=["Yes", "No", "Maybe","Ask again later" ];
    const randomIndex= Math.floor(Math.random() * response.length);
    console.log(response[randomIndex]);
}
magicEightBall();

//4

function getCurrentYear(){
    const currentYear=new Date().getFullYear();
    console.log(currentYear);
}
getCurrentYear();

//5

function tellJoke(){
    const jokes=[
        "What did one snowman say to the other snowman? It smells like carrots over here!",
       "Why did Beethoven get rid of his chickens? All they ever said was, “Bach, Bach, Bach!",
        "What did 20 do when it was hungry? Twenty-eight.",
        "Why is grass so dangerous? Because it's full of blades!",
        "Why are mountains so funny? They’re hill areas."
    ];
    const randomIndex= Math.floor(Math.random() * jokes.length);
    console.log(jokes[randomIndex]);
}
tellJoke();

//6

function personalGreeting(name){
   console.log(`Hello ${name}!`);
}
personalGreeting("Khaled");

//7

function add(num1, num2){
   const sum= num1 + num2;
   console.log(sum);
}
add(25, 30);
add(70, 80);

//8

function ageInMonths(ageInYear){
    const ageInMonths= ageInYear * 12;
    console.log(ageInMonths);
}
ageInMonths(25);
ageInMonths(41);

//9 

function celsiusToFahrenheit(temperatureInCelsius){
    const Fahrenheit= (temperatureInCelsius * 9/5) + 32;
    console.log(Fahrenheit);
}
celsiusToFahrenheit(0);
celsiusToFahrenheit(100);

// 10

function getFullName(firstName,lastName){
   const fullName=(firstName+ " " +lastName);
    console.log(fullName);
}
getFullName("Khaled", "Ibrahim");

//11

function calculateArea(length,width){
    const area= length * width;
    console.log ("Area of the rectangle: " + area);
    return area;
}
calculateArea(8, 9);

//12

function findMax(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is the larger number.");
        return num1;
    } else if (num2 > num1) {
        console.log(num2 + " is the larger number.");
        return num2;
    } else {
        console.log("Both numbers are equal.");
        return num1; 
    }
}

findMax(10, 40);

// 13

function countVowels(inputString) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of inputString) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log("Number of vowels: " + count);
    return count;
}

countVowels("Hello World");


// 14

function calculateDiscount(originalPrice, discountPercentage){
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice= originalPrice - discountAmount;
    console.log(finalPrice.toFixed(2));
    return finalPrice;
}
calculateDiscount(100, 20);

// 15

function reverseString(inputString) {
    const reversed = inputString.split("").reverse().join("");
    console.log("Reversed string: " + reversed);
    return reversed;
}
reverseString("Hello"); 


//Level Intermediate

//1
function isPalindrome(inputString) {
    const normalizedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedString = normalizedString.split("").reverse().join("");
    
    return normalizedString === reversedString;
}
console.log(isPalindrome("hello"));

//2
function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}
console.log(fizzBuzz(15));

//3
function factorial(n) {
    if (n < 0) {
        return "Please enter a positive integer";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); 
