Shipping Packages Logic Puzzle in JavaScript 

http://www.puzzlersparadise.com/onlinelogic/ShippingPackages.htm

Model the problem and solve this Shipping Packages logic puzzle using JavaScript. This puzzle can be solved incrementally with learning value at each step in the solution. If you have not yet learned a concept listed in a step below, feel free to work on only the steps you understand. We will eventually learn everything you need in order to solve the whole puzzle.

Please put your solution in a GitHub repo called shipping-packages-logic-puzzle.

This exercise does not require running JavaScript in the browser. You can create a main.js file in the root of your repo and run it on the command line using Node.js:

node main.js
# your solution should print here using console.log statements
Step #1

Model the data used in the puzzle. What are some good variable names for this data? What data type(s) can you use to represent this data? Arrays, Strings, Booleans, Objects, etc.

The possible first names are: Ellen, Heather, Rick, Walter

The possible last names are: Bartley, DeForest, Fairview, Gray

The possible states are: Ohio, Montana, Texas, Washington

The possible events are: anniversary, birthday, house warming, wedding

The possible relationships are: cousin, father, friend, sister

Step #2

What logical statements can you use to model the six rules of the puzzle? Don't worry about whether the variables you use exist or not, just focus on the logic of the statements. If you had a magic wand and could create any function that you need, what might the names of those functions be? How would you call them?

For example:

// "Suzy's street name was not Merry Lane, but she did have a Golden Retriever."
if (streetName !== 'Merry Lane' && dogType === 'Golden Retriever') {
  maybeSuzy = true
}
Step #3

Connect your data types with your logical statements in order to solve the puzzle. Use console.log to print the solution as sentences like so:

Heather Bartley lives in Ohio and is Greg's sister. She had a birthday on Thursday.
This is the hardest step of the puzzle. Note that you may need to change how you model the data or your logical statements in order to create the solution. What do you keep the same? What do you change? Why? Is there any temporary / intermediate data that you need to create in order to get closer to the solution? How can you tell if you are on "the right track" as you are working toward the solution?

Problem Description

Yesterday, Greg was very busy packing up some gifts to send out to family and friends. It was a busy month. He had a birthday, an anniversary, a wedding, and even a house warming to send gifts out for - and the events all took place in the same week! Because he moved away from his home area when he took his new job, he lived across the country from most of his family and friends now. As a result, he always tried to find something locally for each person to make each gift more personal and interesting. Determine the full name of each person he shipped a gift to, what state each lived in, what each event was, each person’s relationship to Greg, and what day of the week each event was taking place (Wednesday through Saturday).

Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The birthday girl didn’t have her party on Friday.
Rick’s last name wasn’t Bartley but his event was on Saturday night.
Greg’s father wasn’t getting married, but his last name was Gray.
The friend having a house warming didn’t live in Ohio.
The wedding was for Greg’s cousin. Heather, who didn’t live in Texas, was Greg’s sister but her event wasn’t on Wednesday night.
Walter’s event was one day earlier than the person whose last name was DeForest but after the person who lived in Washington. The anniversary was held in Montana.
Hints

