//Let's get Mathy!

const a = 42.78
const b = 1.1
const c = -2
const d = .5
const e = 16

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.abs(b - a));
console.log(Math.max(a, b, c, d, e));
console.log(Math.min(a, b, c, d, e));
console.log(Math.sqrt(e));
console.log(Math.pow(e, d));
console.log(Math.floor(Math.random() * 6) + 1);



//Strings Activity 1

//Strings - Switcharoo
//1. Create a variable called `firstVariable`.
let firstVariable;
//2. assign it the value of a string: `"Hello World"`
firstVariable = "Hello World";
//3. On the next line, change the value of this variable to a number.
firstVariable = 2;
//4. store the value of `firstVariable` into a new variable called `secondVariable`
secondVariable = firstVariable;
//5. On the next line, change the value of `secondVariable` to a string.
secondVariable = "String"
//6. What is the value of `firstVariable`?
console.log(`First variable is:`, + firstVariable);


//Strings - Combine it

//1. Create a variable called `yourName` and set it equal to your name as a string.
let yourName = "Roman";

//- Write an expression that takes the string 
//"Hello, my name is " and the variable `yourName` 
//so that it prints a new string with them concatenated
console.log("Hello, my name is " + yourName);

//ex: `Hello, my name is Jean Valjean`


//Booleans Activity

//Using the provided variable definitions, replace the blanks with a mathematical or boolean operator
/*const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';*/

/*
1. a < b;
2. c < d;
3. 'Peanut' === 'Peanut';
4. a < b > c;
5. a === a < d;
6. e !== 'Jelly Bean';
7. 48 !== '48';
8. 'e' !== 'Eh'
*/


//The Farm
//1. Write code that will print out "mooooo" if the variable `animal` is equal to `cow`.
//I used switch/case approach
let animal = "cow"; //declaring a variable we will be using and assigning a value to it
switch (animal) { //switching the variable
    case "cow": //in case of our value
    console.log("mooooo"); //running this block of code/logging a message
    break; //stopping code from running further
default: //it other case running another block of code below
    console.log("Hey! You're not a cow.");
    break; //stopping code from running further
}

//2. Change your code so that if the variable `animal` is anything other than a cow,
//your should print out "Hey! You're not a cow."
//please see above



//Driver's Ed
//Write a variable that will hold a person's age.
let age; //setting up a variable, a place holder for a va;lue to be assigned later.

//Write code that will print out "Here are the keys", if the age is 16 years or older.
age = 18; //assigning a value at the beginning of the IF/ELSE statement,
//so it gets into the local block-level code. Inner variable and outer placeholder. Variable shadowing.
if (age>=16) {
console.log("Here are the keys");
} else {
    console.log("Sorry, you're too young.");
}

//The same task can be solved using ternary operators:

let result = (age>=16) ? "Here are the Keys" : "Sorry, too young to drive"
console.log(result);

//Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
//Please see above.



//Just Loop It
//Write code that will print out all the numbers in the range 0 - 10.
for(i=0; i<=10; i++) {
    console.log(i);
}
console.log("***************")
//Write code that will print out all the numbers in the range 500 - 50.
for (j=10; j>=5; j--) { //replace 10 with 500 and 5 with 50 as per task.
    console.log(j);
}


console.log("***************")
//Let's get odd
//Print out the odd numbers that are within the range of 1 - 100.
for (k=1; k<=10; k+=2) { //changed step to get to odd numbers. Replace 10 with 100 as per task
    console.log(`${k} is an odd number`);
}

console.log("***************")

for (l=1; l<=100; l++) { //another version with simple IF statement and 
    if (l % 2 !== 0) { //checking the condition for being odd number
        console.log(l + " is an odd number")
    }
}
//Adjust your code to add a message next to the odd number that says: "is an odd number".

//Example Output:

/*3 is an odd number
5 is an odd number
7 is an odd number*/
console.log("***************")



//Give me Five
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
for (m=0; m<=50; m++) {
    if (m % 5 == 0) {
        console.log(`I found a ${m}. High five!`)
    }
}

console.log("***************")
//Example Output:

//I found a 5. High five!
//I found a 10. High five!


//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
for (n=0; n<=50; n++) {
    if (n % 3 == 0) {
        console.log(`I found a ${n}. Three is a crowd`)
    }
}
//Example Output:
console.log("***************")
/*I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!*/
for (o=0; o<=50; o++) {
    if (o % 3 == 0) {
        console.log(`I found a ${o}. Three is a crowd`)
    }
    else {
        if (o % 5 == 0) {
        console.log(`I found a ${o}. High five!`)
    }
}
}
console.log("***************")


//Savings account
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your banck_account should have $55 in it.
let bank_account = 0;
for (p=0; p<=10; p++) {
    bank_account += p; //adding up the curent loop counter
}
console.log(bank_account);
console.log("***************")


let bank_account1 = 0;
for (p=0; p<=100; p++) {
    bank_account1 += p; //adding up the curent loop counter
}
console.log(`Bonus pay applied ` + `$` + bank_account1* 2); //statement after new bonus pay applied

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your banck_account should have $10,100 in it.
console.log("***************")



//Fibonacci
/*Fibonacci is a classic example in coding. Its name will appear often. In its essence, it is adding numbers together in a specific sequence. Don't let the inherent 'mathyness' or fancy name scare you. You've got this!

Here are some sequences, can you figure out the next number? Can you figure out the pattern so you could write a loop to generate these?:

1, 2, 3, 4

Here is another one:

2, 4, 6, 8

And another:

5, 10, 15, 20

and one more:

2, 4, 8, 16, 32

Fibonacci is just another sequence of numbers.

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...


1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
8 + 5 = 13
Can you see the pattern?

Think about how you would create that pattern using JavaScript

Here is the challenge: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

Fun fact! Fibonacci appears often in nature. Check it out

Feeling overwhelmed?

Start with some pseudoecode!
First just try to console.log the first 10 Fibonacci numbers
Try thinking of the smallest step, solve it and then find the next step to take*/
console.log("***************")


//Checkerboard
/*Set a checkerboard size to a variable*/

const boardSize = 8;
/*Now, using what you know about control flow, build a checkerboard

 # # # #
# # # #
 # # # #
# # # #

/*the approach that I been able to come up with is to log symbols # based on their position.
if hte position is even, then it posts #, else it posts "_".
so I am going to run a for loop for the entire boars and post those # symbols
on even spots and empty spaces on odd spots.
The tricky part is to have it as a board, not a single line.
Another tricky thing is to have an empty board initially.*/
//const boardSize = 8;

let board = '';

for (let row = 0; row < boardSize; row++) {
  for (let col = 0; col < boardSize; col++) {
    // Here we are checking if the current row is even or odd to determine the starting symbol
    if (row % 2 === 0) { //here we are checking the raws and based on those being odd or even, we start  it with
        //an appropriate symbol (# or " ").
      board += col % 2 === 0 ? ' ' : '#'; //using ternanry concept as we have only 2 variants to choose from
    } else {
      board += col % 2 === 0 ? '#' : ' '; ///alternating symbols in a raw
    }
  }
  board += '\n'; // Here we add a newline character after each row
}

console.log(board);



  console.log(board);
  console.log("***************")
/*You should be able to change the variable boardSize and generate a larger or smaller grid*/

//const boardSize = 20;

/*Should now generate:

 # # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #
 # # # # # # # # # #
# # # # # # # # # #

*/
