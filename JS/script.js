//OPERATORS
//Types of Javascript
// 1. Arithmetic operators: + - * / (E.g: 7+7, 7-7, 7*7, 7/7)

// 2.Equality operators: ===(Equal signs), !==(Not equal signs)

//let a = 221;
//let b = 11;

//if(a === b){
   // console.log("same values");
//}

//else{
   // console.log(" values");
//}

//Urinary operators: ++num, num++, +

//let year = "1967";

//console.log(++year);

// 4. Relational operators: >, <, >=, <=, if(4 >= 9){}
// 5. Logical operators: &&, ||, if(a , b && b , c){}
//or if(a > b || b > c){}
// 6. Conditional operators: if, else, ?, switch
// 7. Assignment operators: +=, -=, *=, =

//WALKING WITH ALL OPERATORS
//QUESTION
//  write program to find the maximum of 3 numbers

// let num1 = 11; num2 = 32; num3 = 57;

// if(num1 > num2 && num1 > num3){
//      console.log("num1 is the highest value");
//}

//else if(num2 > num1 && num2 > num3){
//      console.log("Num 2 is the highest value");
//}

// else if(num3 > num1 && num3 > num2){
//      console.log("Num 3 is the highest value");
//}

//else{
//      console.log("All the numbers are the same");
//}

//ASSESSMENT
//USING CONDITIONAL STATEMENT WRITE A PROGRAM TO FIND THE FOLLOWING
//SCORES IN A TERTIARY INSTITUTION.
//IF A STUDENT GOT BETWEEN 75-100 PRINT OUT>>>>FIRST CLASS UPPER
//IF A STUDENT GOT BETWEEN 65-74 PRINT OUT>>>>SECOND CLASS UPPER
//IF A STUDENT GOT BETWEEN 50-64 PRINT OUT>>>>SECOND CLASS LOWER
//IF A STUDENT GOT BETWEEN 41-49 PRINT OUT>>>>THIRD CLASS 
//IF A STUDENT GOT BETWEEN 30-40 PRINT OUT>>>> PASS
//ELSE FAIL

// let score = 33;
// if(score >= 75 && score <= 100){
//     console.log("FIRST CLASS UPPER");
// }

// else if(score >=65 && score <= 74){
//     console.log("SECOND CLASS UPPER");
// }

// else if(score >= 50 && score <= 64){
//     console.log("SECOND CLASS LOWER");
// }

// else if(score >= 41 && score <= 49){
//     console.log("THIRD CLASS");
// }

// else if(score >= 30 && score <= 40){
//     console.log("PASS");
// }

// else{
//     console.log("FAIL...ASKED TO WITHDRAW");
//}


//Loop- hasten up our development process
    //  a loop is a sequence of instructions that is continually
    //repeated until a certain condition is met 
    //TYPES OF LOOP
    //WHILE LOOP


// let count = 0;
//     while(count < 10 ){
//         document.write(count, " learning while loop <br>");
//         count++;
//     }


    //DO-WHILE LOOP- the operation must be carried out at least once 
    // b4 the condition is checked

// let count = 20;
//     do{
//         document.write(count, " Do while loop <br>");
//         count++;
//     }while(count < 10 );


    //FOR LOOP

// for(let num = 1; num <= 20; num++){
//     if(num % 2 == 0){
//         document.write("Even <br>");
//     }
//     else if(num % 3 == 0){
//         document.write("Odd <br>");
//     }
//     else{
//         document.write(num, "<br>");
//     }
// }

// ASSESSMENT ON FIZZBUZZ GAME
// WRITE A JAVASCRIPT PROGRAM TO RUN A FIZZBUZZ GAME FROM 1-100

     //INSTRUCTIONS
         // DECLARE AND INITIALIZE YOUR VARIABLE NUM = 1
         // PRINT OUT FIZZBUZZ IF NUM % 3 & NUM % 5 EQUALS 0
         // PRINT OUT FIZZ IF NUM % 3 EQUALS 0
         // PRINT OUT BUZZ IF NUM % 5 EQUALS 0
         // ELSE PRINT NUM

        //  document.write(" This is a FIZZBUZZ GAME <br> <br>");

        //  for(let num = 1; num <= 100; num++){
        //         if(num % 3 == 0 && num % 5 == 0){
        //             document.write("Fizzbuzz <br>");
        //         }
        //         else if(num % 3 == 0){
        //             document.write("Fizz <br>");
        //         }
        //         else if(num % 5 == 0){
        //             document.write("Buzz <br>");
        //         }
        //         else{
        //             document.write(num, "<br>");
        //         }
        //  }

        //FUNCTION / METHODS
            //A FUNCTION IS A GROUP OF REUSABLE CODES CAN BE CALLED
            //ANYWHERE IN YOUR PROGRAM
            // function atWebdos(){
            //     document.write("Web Development Online School");
            // }

            //  atWebdos();

            // function calcArea(width, height){
            //     let area = width * height;
            //     document.write(area);
            // }
            // calcArea(5, 6);


            // function calc(){
            //     let w = document.getElementById("width").value;

            //     let h = document.getElementById("height").value;

            //     let area = w * h;

            //     document.getElementById("answer").value = area;
            // }

            //FUNCTION ASSESSMENT
                //WRITE A JAVASCRIPT PROGRAM TO FIND THE AREA OF 
                //TRIANGLE GIVEN
                //The three sides of the triangle as a, b, c
                //area = sqrt (s(s - a) * (s - b) * (s - c));
                    //HINT
                        //let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
                        //let s = a * b * c / 2; 


                    // function calc(){
                    //     let a = document.getElementById("first").value;

                    //     let b = document.getElementById("second").value;

                    //     let c = document.getElementById("third").value;

                    //     let s = a * b * c / 2;

                    //     let area = Math.sqrt(s * (s - a) * (s - b) * (s- c));

                    //     document.getElementById("answer").value = area;
                    // }

        //ARRAYS []
            //ARRAY IS AN OBJECT THAT STORES MULTIPLE VALUES ON A SINGLE VARIABLE

        //     let subjectNames = ["Mathematics", "English", 20, 30, "Computer","Biology"];
        //         document.write(subjectNames [3]);

        //     let femaleNames = [];
        //     femaleNames[0] = "Sarah";
        //     femaleNames[1] = "Faith";
        //     femaleNames[2] = "Rose";
        // document.write(femaleNames[0]);

            //OBJECT ARRAYS
                //A. ENCAPSULATION: 
                //B. AGGREGATION
                //C. INHERITANCE
                //D. POLYMORPHISM

                // let person = new Array();
                // person.name = "Gabriel";

                // person.age = 34;

                // document.write(person.age);


            //NUMBERS

                // let num1 = 3;
                // let num2 = 5;
                // document.write(num1 + num2 + "<br>");

                // let num3 = 4;
                // let num4 = "6";
                // document.write(num3 + num4);


                // let num1 = 7.6;
                // let num2 = Math.round(num1);
                // let value = Math.floor(Math.random() * 200);
                // document.write(value);

        //DESTRUCTURING OF ARRAYS
            //When we destructure an array, we are assigning it into a variable

        // //First Example
        //     let nameOfAnimals = ["Cats", "Dogs", "Goats", "Cows"];
        //         let [animal1, animal2, animal3, animal4] = nameOfAnimals;
        //         document.write(animal1, animal3);


        //Second Example

            // let carNames = ["Toyota", "Lexus", "BMW", "Innoson"];
            // let car1, remainigCars;
            // [car1, ...remainigCars] = carNames;
            // document.write(car1, remainigCars);


        //Third Example

        //  let carNames = ["Toyota", "Lexus", "BMW", "Innoson"];
        //     let remainigCars;
        //     [,,, ...remainigCars] = carNames;
        //     document.write(remainigCars);



        //OBJECTS

        // let person = new Object();

        // person.name ="Bola";
        // person.age = 49;

        // document.write(person.age);


        // let person = {
        //     name:"Aminat", 
        //     age: 22,
        //      grade: 10, 
        //     state: "Ondo"
        // };

        // document.write(person.state);


        //DESTRUCTURING OF OBJECTS

        // let car = {
        //     id: 5000,
        //     style: "Convertible"
        // };
        // console.log(car.style);
        // let {id, style} = car;
        // console.log(id, style);


        //TypeOf

        // typeof(1);              //number
        // typeof(true);           //boolean
        // typeof("Hello");        //string
        // typeof(function(){});   //function
        // typeof({});             //object
        // typeof(undefined);      //undefined

        //  console.log(typeof(function(){}));


        //Tweet composer
        // let myName = prompt("What is your name?");
        // alert("The length of your name " + myName + " is " +
        //  myName.length);

        // let tweet = prompt("Compose your tweet");
        // let tweetLength = tweet.length
        // alert("You have written " + tweetLength + 
        // " characters, you have" + (150-tweetLength) + 
        // "characters remaining");


        //SLICE -input keyword to slice a text
        // let myName = "Opeyemi";
        // alert(myName.slice(3,7));

        // let tweet= prompt("Compose your tweet");
        // let tweetUnder150 = tweet.slice(0,150);

        // alert(tweetUnder150);

        //toUpperCase

        // let country = "nigEria";
        // console.log(country.toLowerCase());
        

        // Assessment
        //     Your job is to change the first letter of the name
        //     to uppercase not the rest. 

        // HINTS
        //     create a variable that stores the name that the user 
        //     enters.

        //Capitalize the first letter of the name
        //Isolate the first character
        //Turn the first character to Uppercase
        //isolate the rest of the name
        //Concatenate the characters

        //We use the capitalize version of their name to greet them
        //using an alert.

        // let myName = prompt("What's your name?");
        // let firstName = myName.slice(0,1);
        // let firstNameUpperCase = firstName.toUpperCase();
        // let otherNames = myName.slice(1,myName.length);
        // alert("Hello! " + firstNameUpperCase + otherNames);


        

        //ASSESSMENT
            //In this challenge, you are going to create a function that tells
            //us how many days, weeks, months we have left if we live until 90 years


        //Assume that 365 days in a year, 52 weeks in a year and 12 months
        //in a year.


        //OUTPUT SHOULD BE
                //You have x days, Y weeks, and Z months left
            //to get console.log press ctrl+shift+i



          /*  var firstName = 'Opeyemi';
            var age = 21;

            console.log(firstName + ' ' + age);

            var job, isMarried;
            job = 'student';
            isMarried = false;

console.log(firstName + ' is a ' + age 
+ ' year old ' + job + ' . Is she married? ' + 
isMarried);     */



   /* var firstName = 'Shina';
    var age = 27;
    console.log(firstName + ' ' + ' is ' + age + ' years old ');*/

     firstName = 'Omotola';
     age = 28;
    console.log(firstName + ' ' + ' is ' + age + ' years old ');
/*  math Operators  */
    var now = 2022;
    var ageEd = 21;
    var dob;
    dob = now - ageEd;
    console.log(dob);
    console.log(now + 2);
    console.log(now * 2);
    console.log(now / 10);

    /* Logical operators    */

    // var johnAged = 33;
    // var markAged = 24;
    // var johnOlder = johnAged < markAged;
    // console.log(typeof johnOlder);


    /* Coding Challenge */
// var neyMars = {
//     mass: 50,
//     height: 1.6
// };
// var mbapPes = {
//     mass: 65,
//     height: 1.45
// };
       
/*Code challenge 3*/

function areaOfTriangle(base, height) {
    return Math.floor (base * height)/2
}
console.log(`The answer is ${areaOfTriangle(10, 20)}`);

let playerName = ["Hakeem", "Mbappe", "Neymar", "Messi"]


/* Code Challenge 4 practice 1*/
let myArray = ["Fried rice", "Pounded yam", "Moimoi"];
let bracketNotation = {};


myArray.unshift("Eba");
console.log(myArray);

/*Array practice 2*/

let schoolName = ["UI", "Unilag", "Lautech", "Futa", "Fuoye",
"Babcock", "Uniosun", "Kwasu"];
console.log(schoolName);
let removeList = schoolName.pop();
console.log(removeList);
let addedName = schoolName.push("Uniilorin", "Uniben");
console.log(addedName);

let joinedItems = schoolName.concat(myArray);
console.log(joinedItems);






//Intermediate Javascript

//Random numbers

let n = Math.random();
n = n * 6
n = Math.floor(n);
console.log(n);