# Pizza Parlor
#### By Richelle Thorpe
#### Create a custom pizza through this webpage.

## Technologies Used
- HTML
- CSS
- BOOTSTRAP
- JAVA SCRIPT
- MARKDOWN

## Description
This is an application that allows the user to select options to create a custom pizza and the site will display the unique cost of the pizza based upon the sections of the use. 

## Setup/Installation Requirements
- Clone this repository to your desktop.
- Navigate to the top level of the directory.
- Open index.html in your browser.

## Tests

Describe: Pizza()
Test: "It should return an object with the keys: (toppings, size)
Code: let newZa = new Pizza(["anchovies", "pepperoni"],"medium");
Expected Output: Pizza {toppings: ['anchovies', 'pepperoni'], size: 'medium'}

Describe: Pizza.prototype.sizeCost()
Test: "It should return a total cost of $10 if "small" is selected for pizza size"
Code: let newZa = new Pizza("","small");
newZa.sizeCost();
Expected Output: 10

Describe: Pizza.prototype.sizeCost()
Test: "It should return a total cost of $12 if "medium" is selected for pizza size"
Code: let newZa = new Pizza("","medium");
newZa.sizeCost();
Expected Output: 12

Describe: Pizza.prototype.sizeCost()
Test: "It should return a total cost of $12 if "large" is selected for pizza size"
Code: let newZa = new Pizza(["","large");
newZa.sizeCost();
Expected Output: 14

Describe: Pizza.prototype.toppingCost()
Test: "It should return $1 to total cost if a single $1 topping is selected"
Code: let newZa = new Pizza(["marshmallows","");
newZa.toppingCost();
Expected Output: 1

Describe: Pizza.prototype.toppingCost()
Test: "It should return $2 to total cost if two $1 toppings are selected"
Code: let newZa = new Pizza(["marshmallows", "pineapple"],"");
newZa.toppingCost();
Expected Output: 2

Describe: Pizza.prototype.toppingCost()
Test: "It should add $2 to total cost if a $2 topping is selected in addition to the $1 toppings that are already selected"
Code: let newZa = new Pizza(["marshmallows", "pineapple", "anchovies"],"");
newZa.toppingCost();
Expected Output: 4

Describe: Pizza.prototype.toppingCost()
Test: "It should add $2 to total cost if 2 $2 toppings are selected in addition to the $1 toppings that are already selected"
Code: let newZa = new Pizza(["marshmallows", "pineapple", "anchovies", "slime"],"");
newZa.toppingCost();
Expected Output: 6




## Known bugs

## License information
Copyright 2022 Richelle Thorpe;
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


