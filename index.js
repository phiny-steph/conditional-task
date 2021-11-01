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



/*
5. Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:
if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
If the above conditions are true, then print out:
I'd like two scoops of __________ ice cream in a __________ with __________.
Fill in the blanks with the flavor of the ice cream, vessel, and toppings. For example,
I'd like two scoops of vanilla ice cream in a cone with peanuts.
TIP: Make sure to test your code with different values. For example,
If flavor equals "chocolate", vessel equals "cone" and toppings equals "sprinkles", then "I'd like two scoops of chocolate ice cream in a cone with sprinkles." should be printed to the console.
/*
 * Programming Quiz: Ice Cream
  *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
*  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */
 
// change the values of `flavor`, `vessel`, and `toppings` to test your code
let flavor = "strawberry";
let vessel = "cone";
var toppings = "cookies";
 
let flavor = "chocolate";
let vessel = "bowl";
let toppings = "peanuts";

if ((flavor == "vanilla" || flavor == "chocolate") &&
(vessel == "cone" || vessel == "bowl") &&
(toppings == "peanuts" || toppings == "sprinkles")){
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
} else {
  console.log( "Don't buy the ice cream");
}


/* 
6. What do i wear?
If you're like me, finding the right size t-shirt can sometimes be a challenge. What size am I? What's the difference between S (small), M (medium), and L (large)? I usually wear L, but what if I need an XL (extra large)?
Thankfully, our friends at Teespring have got us covered because they've created a sizing chart to make things a lot easier.


Directions:
Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.
For example, if...
var shirtWidth = 23; // size L (large)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.71; // size L (large)
 
Then print L to the console.
Hint: You will need to compare a range of values when checking for shirtWidth, shirtLength, and shirtSleeve. For example, if the shirt's width is at least 20", but no more than 22", then the t-shirt should be medium (M) — as long as the other values for the shirt's length and sleeve measurements match up.


If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...
var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)


Then print N/A to the console because the measurements don't all match up with one particular size.
TIP: Make sure to test your code with different values. For example,
If shirtWidth equals 19, shirtLength equals 28 and shirtSleeve equals 8.21, then S should be printed to the console.
If shirtWidth equals 26, shirtLength equals 33 and shirtSleeve equals 9.63, then 2XL should be printed to the console.
If shirtWidth equals 18, shirtLength equals 29 and shirtSleeve equals 8.47, then NA should be printed to the console.
/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *


* Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions

* 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */
// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;
/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/
// WRITE YOUR CODE HERE


var shirtWidth = 28;
var shirtLength = 34;
var shirtSleeve = 10.13; 

if ((shirtWidth == 18 && shirtWidth < 20) && (shirtLength ==28 && shirtLength < 29) && (shirtSleeve == 8.13 && shirtSleeve < 8.63)) {
   console.log("S, size small.");

} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >=29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)){
  console.log("M, size medium.");

} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >=30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)){
  console.log("L, size large.");

} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >=31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
  console.log("XL, size extra large.");

} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >=33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)){
  console.log("2XL, size double extra large.");

}else if ((shirtWidth >= 28) && (shirtLength >=34) && (shirtSleeve >= 10.13)){
  console.log("3XL, size triple extra large.");
}

 else {
  console.log("N/A");
}

/*
7. From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.
Animals that eat only plants are called herbivores
Animals that eat only other animals are called carnivores
Animals that eat both plants and animals are called omnivores
 
Directions:
Write a series of ternary statements that sets the variable category equal to:
"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
"undefined" if an animal doesn't eat plants or animals
Use the eatsPlants and eatsAnimals variables to test your code.
TIP: Make sure to test your code with different values. For example,
If eatsPlants equals true and eatsAnimals equals false, then herbivore should be printed to the console.
/*
 * Programming Quiz - Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */
 
/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;
 
/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

let eatsPlants = true;
let eatsAnimals = false;

let catergory = eatsPlants&&eatsAnimals? "omnivore": !eatsPlants&& eatsAnimals? "carnivore":eatsPlants&& !eatsAnimals? "herbivore":"Undefined";

console.log(catergory);




 
/*
 8. In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:
no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.
Directions:
Write a switch statement to set the average salary of a person based on their type of completed education.
Afterwards, print the following to the console.
In 2015, a person with __________ earned an average of __________/year.
Fill in the blanks with the type of education and the expected average salary. Make sure to use correct grammar in your printed statement, and watch out for any extra or missing characters (including spaces and punctuation marks). For help, refer to the findings above.
In 2015, a person with a Bachelor's degree earned an average of $59,124/year.
TIP: To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US").

TIP: Make sure to test your code with different values. For example,
If education equals "an Associate's degree", then the string"In 2015, a person with an Associate's degree earned an average of $41,496/year." should be printed to the console.
/*
 * Programming Quiz: Back to School 
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */
 
/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the value of `education` to test your code
var education = 'no high school diploma';
 
// set the value of this based on a person's education
let salary = 0;
 
switch (education){
  case 'no high school diploma':
    console.log('In 2015, a person with ' + education +  ' earns an average of $25,636/year')
    break
  case 'high school diploma':
    console.log('In 2015, a person with ' + education +  ' earns an average of $35,256/year,')
    break
    case "Associate's degree":
    console.log('In 2015, a person with ' + education +  ' earns an average of $41,496/year')
    break
    case "Bachelor's degree":
    console.log('In 2015, a person with ' + education +  ' earns an average of $59,124/year')
    break
    case "Master's degree":
    console.log('In 2015, a person with ' + education +  ' earns an average of $69,732/year')
    break
    case "Professional degree":
    console.log('In 2015, a person with ' + education +  ' earns an average of  $89,960/year')
    break
    case "Doctoral degree":
    console.log('In 2015, a person with ' + education +  ' earns an average of  $84,396/year')
    break
} 



