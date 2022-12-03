1: difference between var let const
difference between arrow function and regular function
difference between map foreach filter find
why you will use template string


------------ bonus -----------------

minimum 10 ta commit




------------------------------
difference between var let const

The scope of a var variable is functional scope. The scope of a let variable is block scope. The scope of a const variable is block scope


----------------
Unlike regular functions, arrow functions do not have their own this . The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.


-------------------------
foreach 
The easy one right ? we all know why this method is used for and even you don’t know about this method the name pretty much explains everything.

2. Filter
Whenever you have to filter an array Javascript inbuilt method to filter your array is the right choice to use. Filter let you provide a callback for every element and returns a filtered array.

-----------------

3. Map
One of my favourite and most used array method of all time. As a ReactJS developer I use map a lot inside my application UI.

-------------------
find
As the name already suggest reduce method of the array object is used to reduce the array to one single value.
