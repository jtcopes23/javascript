/**** conditional statements javascript ****/
/*if, else if, else */
console.log('JOSHUA')

let x = 'nf';
if (x < 10){
    console.log("x is less than 10")
}else if(x > 10){
    console.log("x is greater than 10")
}else if(x > 10){
    console.log("x is greater than 10")
}else if(x > 10){
    console.log("x is greater than 10")
}else if(x > 10){
    console.log("x is greater than 10")
}else if(x > 10){
    console.log("x is greater than 10")
}else if(x > 10){
    console.log("x is greater than 10")
}else if(x > 10){
    console.log("x is greater than 10")
}
else{
    console.log("bye")
}
/* switch javascript */

let age = 25 ;
switch(age){
    case 10 :
        console.log('you are a minor');
        break;

    case 20:
        console.log('you are a teenager');
        break;

    case 25:
        console.log('you are an adult');
        break;

    default:
        console.log('they didnt gave proper age');
}
/****
 calling functions
 ***/

 function example(){
    console.log('this is simple');
    console.log('i can do this');
    console.log('oh lets do it');
 }
 example();

 /*
 parameters and arguments
  */

 /*
 default
 */

 function greeting(name = 'stranger') {
    console.log(`Hello, ${name}!`)
 }
 greeting('Nick')
 greeting()

 /*
 return keyword within function
 */

function calculatedArea(width, height) {
    const area =width * height ;
    return area;
}
let ar= calculatedArea(200, 200)
console.log(ar)

/*
helper functions
*/
function multiplyByNineFifths(number){
    return number *(9/5);

};
function getFahrenheit(celsius){
    return multiplyByNineFifths(celsius)
    + 32;
};
let au=getFahrenheit(15)
console.log(au)

/*
function expressions
*/

const calculateArea = function(width, height) {
    const area = width * height;
    return area;
}
let are = calculateArea(59,44)
console.log(are)

/*
arrow functions
*/

const rectangleArea =(width, height) => {
    let area= width * height;
    return area;
}
let t= rectangleArea(234,900)
console.log(t)

/*
concise arrow functions
*/
/* single-line block */
const sumNumbers = number => number + number;

/* multi-line block */

const sumNumber = number => {
    const sum = number + number;
    return sum;
}

/*
scope n javascript
*/

/*
let is not a way to define a variable globally, but const is. it can be called outside of {} braces
*/
const cars=['corvette', 'mustang','hellcat']
console.log(cars)
console.log(cars[0])
cars [1]='Trackhawk';
console.log(cars)
console.log(cars.length)
cars.push('srt challenger','ram trx')//push adds elements to the end of the array
console.log(cars)
cars.pop();//this will remove the last element from array
console.log(cars)
cars.unshift('lambo')//this adds to begining of the array
console.log(cars)
cars.shift()//will remove the begining of the element from array
console.log(cars)

//loops in javascript
for(let counter=0; counter<5; counter++){
    console.log(counter)
}

//loops through arrays

//for loops will list every element in the loop
const animals=['bird','horse','fish','snake']
for(let i =0; i<animals.length; i++){
    console.log(animals[i])
}

//while loop that prints 1,2 and 3
let countertwo =1;
while(countertwo <4){
    console.log(countertwo);
    countertwo++;
}

//do... while loop
let result ="";
let i =0;
do{
    i=i+1;
    result = result +i;
}
while(i<5);
console.log(result);

//iterators in javascrip

//.forEach() method will execute the same code for each element of an array
const array =['a', 'b', 'c']
array.forEach(element => console.log(element))

//.map()method takes a aurgement of call back function and returns a new array, it takes an aurgument of a callback function and returns a new array!
const array1=[1,4,9,16];
const map1 = array1.map(x =>x*2);
console.log(map1);

//.filter()method creates a new filtered copy of a portion of a array filtered down to just the elements from the givin array that passed the test implemented by provided function.
const words=['rapper', 'actor', 'dancer', 'producer', 'engineer', 'dj']
const res = words.filter(word=>word.length>6);
console.log(res);

//.reduce()method executes a reducer function for array method.
//it returns a single value: the function accumulated result.
//it does not execute the function for empty array elements.
//it does not change the orriginal array.

const array2=[1,2,3,4];
const initialValue = 0;
const sumWithinitialValue =array2.reduce((previousValue, currentValue)=>previousValue+currentValue,initialValue);
console.log(sumWithinitialValue);