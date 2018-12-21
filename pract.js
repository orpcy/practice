/*function add(x, y){
    var sum = x + y;
    return sum;
}


console.log('The result of this operation is', add(13, 6));



function bars(numbers){
    console.log('printing out the arrays', numbers); 
    const addition  = (a, b) => a + b;
    const addArray = numbers.reduce(addition);
    return addArray;
}

console.log(bars([10, 10, 10, 10, 10, 10, 10, 10]));


//declaring a function
function name(){}
//function expression
const func = function(){}
//arrow functions
//single-line block
const func = calc => num = 1+1;
//Multiple-line block
const func = () => {
    num = 1+1;
    return num;
}*/

// defining an anonymous function. the function has one parameter called "good". the parameter is not enclosed inside parenthesis because its just one, when we have a function without parameter or more than one parameter, we have to use parenthesis. we also used arrow function in defining.
    const forLoop = good => {
    let sum = 1;
    for(var a=0; a<good.length; a++){
        sum = sum * good[a];
    } 
    return sum;
} 

console.log('Multiplying all the numbers together gives us ', forLoop([1,2,8,3,4,2]));

//multiplying through arrays using foreach and assugnung them to a new array
function timesUsingForEach(initial){
    const final = [];
    initial.forEach(a =>{
        final.push(a*2);
    })
    return final;
}

console.log('Final variable has elements:', timesUsingForEach([2,4,6,10]));

//Using Map operator
function mapping(ma){
    const mul = ma.map(numbs => numbs*2);
    return mul;
}

console.log("Using Map Method we have", mapping([2,4,6,8]));

/*
//Writing the Map operator in a concise form
const mapping = ma => mul = ma.map(numbs => numbs*2);

console.log("Using Map Method we have", mapping([2,4,6,8]));*/

//create a function that takes in a number and determine if its a prime numebr or not
function determinePrime(prime){
    for(i=2; i<prime; i++){
        if(prime % i === 0){
            return false;
        }
    }
    return true;
}

console.log(determinePrime(9));

//nested loops
/*
const bobsFollowers = ['Shola', 'Akin', 'Olu', 'Jacob'];
const tinasFollowers = ['Ajao', 'Akin', 'Olu'];
const mutualFollowers = [];

for (let a=0; a<bobsFollowers.length; a++){
  for (let b=0; b<tinasFollowers.length; b++){
    if(bobsFollowers[a] === tinasFollowers[b]){
      mutualFollowers.push(tinasFollowers[b]);
    }
  }
};

console.log(mutualFollowers);
*/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(eachFruit => {
    console.log(`I want to eat a ${eachFruit}`);
})
