// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }

// counter program
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

// something new

// math

// let x = 3;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(max);
// console.log(min);
// console.log(z);

//RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1= Math.floor(Math.random() * max) + min;
    randomNum2= Math.floor(Math.random() * max) + min;
    randomNum3= Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}

// IF project

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = "Bro you are TOO OLD to enter this site!";
    }
    else if(age == 0){
        resultElement.textContent = "You can not enter. You were just born!";
    }
    else if(age >= 18){
        resultElement.textContent = "You are old enough to enter this site";
    }
    else if(age < 0){
        resultElement.textContent = "Your age can not be below 0!";
    }
    else{
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}

// payment project

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit2 = document.getElementById("mySubmit2");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit2.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are not subscribed!`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}

//ternary operator

// let age2 = 21;
// let message = age2 >= 18 ? "You are an adult" : "You are a minor";

// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

//switch

// let day = 'pizza';

// switch(day){
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//     default:
//         console.log(`${day} is not a day`);
//         break;
// }

// let testScore = 22;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = 'A';
//         break;
//     case testScore >= 75:
//         letterGrade = 'B';
//         break;
//     case testScore >= 60:
//         letterGrade = 'C';
//         break;
//     case testScore >= 50:
//         letterGrade = 'D';
//         break;
//     case testScore >= 30:
//         letterGrade = 'E';
//         break;
//     default:
//         letterGrade = 'F';
// }
// console.log(letterGrade);

// string methods

let userName = "kwasnakiwi123";
// userName = userName.trim()

// console.log(userName.charAt(0));
// console.log(userName.indexOf("k"));
// console.log(userName.lastIndexOf("k"));
// console.log(userName.length);
// console.log(userName);
// console.log(userName.repeat(2137));
// let result = userName.startsWith("123");
// if(result){
//     console.log("Your username can't begin with '123'")
// }
// else{
//     console.log(userName)
// }
// let result2 = userName.endsWith("123");
// if(result2){
//     console.log("Your username can't end with '123'")
// }
// else{
//     console.log(userName)
// }
// let result3 = userName.includes("123");
// if(result3){
//     console.log("Your username can't include '123'")
// }
// else{
//     console.log(userName)
// }
// let phoneNumber = " 123-456-789";

// phoneNumber = phoneNumber.replaceAll("-", " ")
// phoneNumber = phoneNumber.padStart(15, "+48");
// phoneNumber = phoneNumber.padEnd(15, "+48-");

// console.log(phoneNumber)