/*
1. Write an if...else statement that:
prints "even" if the number is an even number
prints "odd" if the number is an odd number
Hint: Use the % (modulo) operator to determine if a number is even or odd. The modulo operater takes two numbers and returns the remainder when the first number is divided by the second one: 
console.log(12 % 3);
console.log(10 % 4);
Result:
0
2
The answer for 12 % 3 is 0 because twelve divided by three has no remainder. 10 % 4 is 2 because ten divided by 4 has a remainder of two.
Make sure to test your code with different values. For example:
If number equals 1, then odd should be printed to the console.
If number equals 12, then even should be printed to the console.
/*
 * Programming Quiz: Even or Odd 
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */
// change the value of `number` to test your if...else statement

let number = 2;
if (number%2===0) {
  console.log("even");
} else {
  console.log("odd");
}


/*
2. Musical groups have special names based on the number of people in the group. For example, a "quartet" is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.
Directions:
Write a series of conditional statements that:
Prints "not a group" if musicians is less than or equal to 0
Prints "solo" if musicians is equal to 1
Prints "duet" if musicians is equal to 2
Prints "trio" if musicians is equal to 3
Prints "quartet" if musicians is equal to 4
Prints "this is a large group" if musicians is greater than 4
TIP: Test your code with different values. For example,
If musicians equals 3, then "trio" should be printed to the console.
If musicians equals 20, then "this is a large group" should be printed to the console.
If musicians equals -1, then "not a group" should be printed to the console.
Be sure to watch out for any extra or missing characters (including spaces or punctuation marks) in your output string as well!
/*
 * Programming Quiz: Musical Groups
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */
 
// change the value of `musicians` to test your conditional statements


let musicians = 1;
if (musicians<=0) {
  console.log("not a group");

} else if (musicians==1) {

  console.log("solo");

} else if (musicians==2) {
    console.log("duet");

} else if (musicians==3) {
    console.log("trio");

} else if (musicians==4) {
    console.log("quartet")


} else if (musicians>4) {
    
    console.log("this is a large group");
}



/*
3. For this quiz, you're going to help solve a fictitious murder mystery that happened at Stutern! A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.
Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:
four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so...
the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
And we know that each suspect was located in a specific room at the time of the murder.
Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
To help solve this mystery, write a combination of conditional statements that:
sets the value of weapon based on the room and
sets the value of solved to true if the value of room matches the suspect's room
Afterwards, use this template to print a message to the console if the mystery was solved:
__________ did it in the __________ with the __________!
What goes into the three blank spaces? You can fill in the blanks with the name of the suspect, the room, and the weapon! For example, an output string may look like:
Mr. Parkes did it in the dining room with the knife!
Be sure to watch out for any extra or missing characters (including spaces and punctuation marks) in your output string as well!
TIP: Test your code with different values. For example,
If room equals gallery and suspect equals Ms. Van Cleve, then Ms. Van Cleve did it in the gallery with the trophy! should be printed to the console.
 
 
/*
 * Programming Quiz: Murder Mystery 
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */
 
/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code
 
// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";
 
// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mr. Parkes"; 
 
/* ****************************************** */
 
/* IMPLEMENTATION LOGIC*/
 
// Initial values
var weapon = "";
var solved = false;
 
/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/

let room = "gallery";
let suspect = "Ms.Van Cleve";
let weapon = "";
let solved = "false";

if (room=="dining room"){
    weapon = "knife";

} else if (room=="gallery"){
    weapon = "trophy";

} else if (room=="billards room"){
    weapon = "pool stick";

} else if (room=="ballroom"){
    weapon = "poison";
}

if (room=="ballroom" &&suspect=="Mr.kalehoff"){
    
    solved=true;
    console.log(` ${suspect} did it in the ${room} with the ${weapon}! `);

}else if (room=="gallery" &&suspect=="Ms.Van Cleve"){
    solved=true;
    console.log(` ${suspect} did it in the ${room} with the ${weapon}! `);

} else if (room=="billards room" &&suspect=="Mrs.Sparr"){
    solved=true;
    console.log(` ${suspect} did it in the ${room} with the ${weapon}! `);

} else if (room=="dining room" &&suspect=="Mr.Parkes"){
    solved=true;
    console.log(` ${suspect} did it in the ${room} with the ${weapon}! `);

} else {
    console.log ("");
}


if (solved) {
    console.log(" Murder is solved.");
}


/*
4. Checking your balance
Using the flowchart below, write the code to represent checking your balance at the ATM. The yellow diamonds represent conditional statements and the blue rectangles with rounded corners represent what should be printed to the console.

Use the following variables in your solution:
balance - the account balance
isActive - if account is active
checkBalance - if you want to check balance
Hint: The variable balance could be a value less than, greater than, or equal to 0. The variables isActive and checkBalance are booleans that can be set to true or false.
TIP: To print out the account balance with decimal points (i.e. 325.00), use the .toFixed() method and pass it the number of decimal points you want to use. For example, balance.toFixed(2) returns 325.00.

TIP: Make sure to test your code with different values. For example,
 
If checkBalance equals true and isActive equals false, then Your account is no longer active. should be printed to the console.
/*
 * Programming Quiz - Checking Your Balance
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
// change the values of `balance`, `checkBalance`, and `isActive` to test your code


let balance = 325.00;
let checkbalance = true;
let isActive = false;

if (checkbalance){

    if (isActive && balance>0){

        balance = balance.toFixed(2);
        console.log ("Your balance is $" + balance + "." )
       
    } else if (! isActive) {
        console.log ("Your account is no longer active.");

    } else if (balance==0) {

        console.log("Your account is empty.");

    } else {
        console.log ("Your balance is negative. Please contact your bank");
    }

 

}else { 
   console.log("Thank you. Have a nice day!")
}

 




 
