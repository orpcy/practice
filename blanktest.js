/*const items = ['item1', 'item2', 'item3'];
const copy = [];

for (let i=0; i<items.length; i++) {
  copy.push(items[i])

}

console.log(copy);

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(firstString => {
  return firstString[0];
});

console.log(secretMessage);

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(numbers => {
  return numbers/100;
})

console.log(smallNumbers);*/
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below
//using for...in iterration to loop through object's properties..
for(let trying in spaceship.crew){
console.log(`${trying}: ${spaceship.crew[trying].name}`);
}

for(let secondtry in spaceship.crew){
console.log(`${spaceship.crew[secondtry].name} : ${spaceship.crew[secondtry].degree}`);
}