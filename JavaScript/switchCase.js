let day="Monday";
switch(day){
    case 'Monday':
        console.log("Work on premise");
        break;
    case 'Tuesday':
        console.log("Work from home");
        break;
    case 'Wednesday':
        console.log("work from home");
        break;
    case 'Thursaday':
        console.log("Work on premise");
    default:
        console.log("Enter valid day!");

}

let readLineSync = require('readline-sync');

let uName = readLineSync.question("What is your name")

console.log(uName)
