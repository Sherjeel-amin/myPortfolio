// var message;
// message = "Hello my name is sherjeel";
// console.log(message);

// var a = 22;
// var b = 32;

// var c;
// c=a+b;

// console.log(c);

// let userName= "Sherjeel"
// let userAge= "23"

// let theMessage = "my name is " + userName + " and I am " + userAge + " years old";
// console.log(theMessage);

// let message1 = "Hello this is message 1"
// let message2 = " Hello this is message 2"

// console.log(message1+message2)

// let userName="sherjeel"
// let age = "23"

// let text = `Hello there! My name is ${userName} and my age is ${age}`
// console.log(text);

// const readlinesync = require("readline-sync");

// const userName = readlinesync.question("May I know your name ?");

// console.log(`Hello ${userName}`);
// // we can concatenate by using simple concatenation or by using the template literal//

// const userAge = readlinesync.question("May I know your age?");

// const birthYear = 2024 - (Number(userAge));
// console.log(`So your year of birth is ${birthYear}`);

// var userAge = Number(readlinesync.question("Enter your age?"));

// if(userAge >18){
//     console.log(`Your age is ${userAge} and you are above 18`);
// }
// else{
//     console.log(`Your age is ${userAge} and you are below 18`);
// }


// const num = Number(readlinesync.question("Number : "));

// var mod =  num %2;

// if(mod ==0){
//     if (num>0){
//     console.log(`Your number is ${num} and is even `);
//     }
// }
// if(num==0){
//     console.log("Your number is 0 and is neither odd or nor even");
// }
// else{
//     console.log(`Your number is ${num} and is odd`);
// }

// const totalMarkScored = 100;

// (totalMarkScored<40)? console.log("You have failed"):console.log("You have passed the exam");

// const result = (totalMarkScored<40)?"You have failed": "You have passed the exam";

// console.log(result);

// const result = (totalMarkScored<40)?"You need to improve":(totalMarkScored<65)?"B":(totalMarkScored<85)?"A": "Genius";

// console.log(result);

// const firstName = "Amin";
// const nickName="";

// const userName = firstName || nickName

// console.log(userName);

// let a = 12;
// let b = "";

// console.log(a+(b||8));

// const firstName = "Amin";
// const nickName="Sherjeel";

// const userName = firstName && nickName;

// console.log(userName);

// Nullish Coalesing

// let a=12;
// let b=""; 

// console.log(a+(b??3)); 
//  let i = 0;

// do{
//     console.log(i);
//     i++;
// }while(i<10)

// while(i<10){
//     console.log(i);
//     i++;
// }

// Nested for loop to print the table for first 10 Numbers

// for (let i = 1;i<=10;i++)
// {
//     for(let j=1;j<=10;j++)
//         console.log(`${i}x${j} = ` + i*j);
// }
// console.log("Execution Completed");

// try catch -- Exception handling
// const userName = "Sherjeeel"

// try{
//     console.log(anyFnc);
// }catch(error)
// {
//     console.log("An error has occured")
// }
// console.log(userName);

// Functions

// function greetMessage (){
//     console.log("Hello, I am a function named greetMessage") // Function declaration
// }

// greetMessage(); // Function Call


// function funMessage(inputName, city)
// {
//     console.log(`${inputName}, welcome!`);
//     console.log(`Thanks for joining from ${city}`);
//     console.log(typeof(city));
// }

// funMessage("Sherjeel",2);
// funMessage("jay",3);

// function twoNumberSum(num1,num2){
//     console.log(num1+num2)
// }

// twoNumberSum(5,10);


// FINDING THE SUM OF FIRST N NATURAL NUMBERS USING FUNCTIONS AND LOOPS

// function calaculateSum(min, max){
//     let sum=0;
//     for(let i=min;i<=max; i++){
//         sum=sum+i;
//     }
//     console.log(sum);
// }

// calaculateSum(1,100);

// ANONYMOUS FUNCTIONS

// let anonymousFunction = function (){
//     console.log("Hello from an anonymous funxction")
// }

// anonymousFunction();
// console.log(typeof(anonymousFunction));

// Getting value using RETURN>>
// function twoNumberSum(n1,n2){
//     return n1+n2;
// }

// console.log(twoNumberSum(2,56));let message = "Hello I am a string"

// let thatCharacter = message.charAt(4);

// console.log(thatCharacter);






//-- STRINGS AND METHODS--

// let message = "I am sherjeel amin";

// for(let char of message){
//     console.log(char);
// }

// To remove the space or a character in the string

// let message = "I am sherjeel amin";

// for(let char of message){
//     if(char=== " "){
//         continue
//     }
//     console.log(char)
// }


// COUNT OF ANY CHARACTER IN A STRING
/*let message = "Hello how are you";
let count = 0;

for (let char of message){
    if(char==="e"){
        count = count + 1; // count ++;
    }
}
console.log(count)*/

// let message = "I am a message"
//  console.log(message[3]);


// Another way to get a string using .length function

// let message = "hello this is a string";

// strLen = message.length;

// for(let i =0;i<strLen; i++){
//     console.log(message[i]);
// }

// String method charAt()

// let message = "Hello I am a string"

// let thatCharacter = message.charAt(4);

// console.log(thatCharacter);

// To get the ASCII code of a character

// let char = 'B';
// let charCode = char.charCodeAt(0);
// console.log(charCode);


// program to get a character from a string then get the ascii value of the extracted char//

// let message = "the is a message"
// const index = 7
// const char = message.charAt(index);

// const asciiVal = message.charCodeAt(index);

// console.log(`The ascii value of ${char} is ${asciiVal}`);

// ARRAYS AND ARRAY METHODS
// NON-PRIMITIVE DATATYPES

// let empName = ["Sherjeel", "Manoj", "Girivel", "Abhishek","Hello", "how", "are", "you"];

// console.log(typeof(empName));
// console.log(empName);

// We can store an array inside an array and we can also add an object inside an array//
// let empName1 = ["Sherjeel", "Manoj", "Girivel", "Abhishek",["This", "is", "test"],{empAdd:"chennai"}];
// console.log(empName1);

// Every item has an idex inside an array similar to that of strings//

// console.log(empName[0]);
// console.log(empName[1]);
// console.log(empName[2]);
// console.log(empName[3]);

// But we cannot get all the elements one by one as we will be repeating the code [DRY-Do not repeat yourself]

// We use a for loop to iterate the items of the array//
// for (let i=0; i<4;i++)
// {
//     console.log(empName[i]);
// }


// How to make the range dynamic
// WE can do it by finding the lengthof an array using array.length

// let arrLength = empName.length;

// for(let i=0;i<arrLength;i++){
//     console.log(empName[i]);
// }

// FOR LET OF method is also used to iterate the array 

// for (let items of empName){
//     console.log(items);
// }

// TO GET THE INDEXES -- WE CAN USE FOR LET IN

// for(let items in empName){
//     console.log([items]);
// }


// Copying or referencing an array-- In this way if we push an element in the second array,the changes are reflected in the first array too because they are both referring to same memory location
// let arr1 = [1,2,3,4]
// let arr2=arr1;

// console.log(arr1);
// console.log(arr2);

// arr2.push(5);

// console.log(arr1);
// console.log(arr2);

// The solution is using spread operator, it makes sure that the second array does not have anything to do with the first array
// let arr1 = [1,2,3,4];
// let arr2 = [...arr1];

// console.log(arr1);
// console.log(arr2);

// arr2.push(5);

// console.log(arr1);
// console.log(arr2);

// To understand how it works under the hood --> //

// let arr1 = [1,2,3,4,5]
// let arr2 = []

// for(let num of arr1){
//     arr2.push(num);
// }

// console.log(arr2);
// arr2.push(7,8);
// console.log(arr2);

// array concat //

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];

// let arr4 = arr1.concat(arr2, arr3);

// console.log(arr4);

// Pop slice and splice

// let arr1 = [1,2,3,4,5]

// arr1.pop()

// console.log(arr1);
// let value = arr1.slice(1,3);
// console.log(value);

// splice for inserting element in a array

// let arr1 = ["hello", "how", "are", "you"];
// arr1.splice(1,0,"sherjeel");
// console.log(arr1);

// // Spice for deleting element in an array

// let arr2 = ["hello", "how", "are", "you", "today"];
// arr2.splice(3,2)
// console.log(arr2);


// const sizeAvailable = ["S","M","L", "XL", "XXL"];
// const readlineSync = require("readline-sync");

// const userSize = readlineSync.question("what is your size?");

// const isSizeAvailable = sizeAvailable.includes(userSize);
// if(isSizeAvailable)
// {
//     console.log("Your size is avaiable");
// }else{
//     console.log("Not available");
// }

// SORTING ARRAYS

// let fruitNames = ["apple", "orange", "mango", "banana", "cherry"];
// fruitNames.sort();
// console.log(fruitNames);

// let numbers = [22,47,39,101,3,66,2,54]
// numbers.sort()
// console.log(numbers);
 // The sorting here is not correct because the numbers are getting converted into string and then to their UTF 16 values. Therefore the numbers are not sorted into a proper order. eg the UTF 16 transformation for 11 is lesser than 2. So it will but 11 before 2 while sorting

//  let numbers = [22,47,39,101,3,66,2,54];
 // inorder to tackle this problem we use a call back function which calculates the difference between the two adjacent numbers and swaps if the result is positive and stays the same if the difference is negative.

//  function diffOfNumbers(a,b)
//  {
//     return a-b
//  }

//  numbers.sort(diffOfNumbers);
//  console.log(numbers);

// SPLIT AND JOIN

// const inputString = "Sherjeel";
// const splitStr = inputString.split("");
// console.log(splitStr);

// const revStr = splitStr.reverse();
// console.log(revStr);
// const revJoinedStr = revStr.join("");
// console.log(revJoinedStr);





