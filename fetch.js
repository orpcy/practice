const fetch = require('node-fetch');
const fs = require('fs');

// fetch('https://api.github.com/')
// .then(res => res.json())
// .then(res => {
//     console.log('Data fetched Successfully', res);
// })
// .catch(err => {
//     console.log("error occured while fetching data", err);
// });

//create a function that takes in a number and determine if its a prime number or not
// let isPrime = false;

// const determinePrime = (number, callback) => {
//     let isPrime = true;
//     for(i=2; i<number; i++){
//         if(number%i === 0) {
//             isPrime = false;
//         }
//     }
//     callback(number, isPrime)
// }

// const check = (number, isPrime) => {
//         if (isPrime){
//             console.log(`${number} is a prime`)
//         }else{
//             console.log(`${number} is not a prime`)
//         }
// }

// determinePrime(2, check);

const getPrime = number => {
    let isPrime = true;
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }

    return new Promise((resolve, reject) => {
        if (isPrime) {
            resolve(number);
        } else {
            reject(number);
        }
     }).then(good => {
        console.log( `${good} is a prime number`);
    }).catch(bad => {
        console.log(`${bad} is not a prime number`);
    });

}
getPrime(12);
// getPrime(11).then(good => {
//     console.log(`${good} is a prime number`);
// })
// .catch(bad => {
//     console.log(`${bad} is not a prime number`);
// })

// async function useAsync() {
//     const verify = await getPrime(11);
//     console.log(verify);
// }
// useAsync();