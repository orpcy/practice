const fetch = require('node-fetch');
const fs = require('fs');

function multiplyThrough(initial){
    let final = [];
    initial.forEach(numbs => {
        final = final.concat(numbs*2);
    })
    return final;
}

console.log('Concatenating the numbers into final array guves us: ', multiplyThrough([2,4,6,8]));

/*//function that prints out prime numbers between zero and maxNumber
function determinePrime(maxNumber){
    let takePrime = [];
    for(a=0; a<maxNumber; a++){
        let notPrime = false;
        for(b=2; b<a; b++){
            if(a%b === 0){
                notPrime = true;
            }
        }

        if(notPrime === false){
            takePrime.push(a);
        }
    } 
    return takePrime;  
}

console.log(determinePrime(88));*/


//create a function that takes in a number, if the number is divisible by 3, return 'fizz', if its divisible by 5, return 'buzz', if its divisibe by both 3 and 5, return fizzbuzz. pass in the number through the terminal.

// const rl = require("readline");
// const cl = rl.createInterface(process.stdin, process.stdout);

// const question = q => {
//     return new Promise( (res, rej) => {
//         cl.question( q, 
//             answer => {
//             res(answer);
//         }
//         )
//     });
// };

// const number = async okay => {
//     let answer;
//     while ( answer === '' || isNaN(answer) ) {
//         answer = await question('Please enter Number only: ');
//     }
//     if(answer%3 === 0 && answer%5 ===0){
//         answer = 'FizzBuzz';
//     }else if(answer%3 === 0){
//         answer =  'Fizz';
//     }else if(answer%5 ===0){
//         answer = 'Buzz';
//     }else{
//         answer = `${answer} is not divisible by 3, 5 or both`;
//     }
//     console.log(answer);
//     process.exit();
// }

// number();
/*
const splitStrings = str => {
    return str.split('')//.map( takeNum => { return parseInt(takeNum); });
}
//console.log(splitStrings('1234'));

//read on callback, promise and async await and create a code on each.
//callback
// const numbers = (err, response) => {
//     if (err)
//     // console.log('callback function invoked');
//     console.log('api call has finished', response);
//     // return 'Just checking it out numbers';
// }

// const getter = (url, callback) => {
//     // console.log('tgfgtrghuy', callback);
//     // make an api call
//     fetch(url)
//         .then(res => res.json())
//         .then(response => {
//             //console.log('api call has finished');
//             callback(null, response);
//         })
//         .catch(err => {
//             //  console.log('an err occured', err);
//             callback(err, null);
//         });
// }

// getter('https://api.github.com/users/9677897', (err, response) => {
//     if (err) {
//         console.log('err getting data from getter', err);
//     } else {
//         console.log('getter returned data successfully', response);
//     }
// });

//     // console.log('callback function invoked');
//     //console.log('api call has finished', response);
//     // return 'Just checking it out numbers';
// }));
/*
//callback 2
const takeAge = age => {
    return age;
}

const getAge = value => {
    return `I am ${value} years old`;
} 
//console.log(getAge(21));
*/
//Promises 1
// const promiseShola = (name, expected, salary) => {
//     return new Promise( (resolve, reject) => {
//         if(expected>salary){
//             setTimeout(() => {
//                 resolve(`I will buy ${name} a Macbook Pro 2017 model because my salary is greater than ${salary}`)}, 3000);
//         }else{
//             setTimeout(() => {
//             reject(`oops! Sorry ${name}! I can't buy you the system`)}, 3000);
//         }
//     }).then(res => {
//         return res;
//     }).catch(rej => {
//         return rej;
//     });
// }
// //callback 3
// //async await1
// async function asyncCall(callback) {
//     console.log('Verifying...');
//     const result = await callback;
//     console.log(result);

// }

// asyncCall(promiseShola('Shola', 50000, 200000));

/*//promise 2
let wait = new Promise( (resolve, reject) => {
    console.log('Please wait for 3 seconds!');
    setTimeout( () => {
        console.log('... 1')
    }, 1000);
    setTimeout( () => {
        console.log('... 2')
    }, 2000);
    setTimeout( () => {
        console.log('... 3')
    }, 3000);
    setTimeout (() => {
        resolve(`I guess we can start now since we've waited for 3secs`
    )}, 3000);
})
//async await 2
async function usage(){
    const waiting = await wait;
    console.log(waiting);
}

//usage();
*/
//promise 3

//     let determine = new Promise( (resolve, reject) => {
//         const myAge = 7;
//         if(myAge >= 21){
//             resolve(`You are matured enough to live your own life`);
//         }else{
//             reject('Sorry! you are still underage!');
//         }
//     }).then(res => {
//         return res;
//     }).catch(rej => {
//         return rej;
//     });

//     determine.then(getResolve => {
//         console.log(getResolve);
//     });

//     determine.catch(getReject => {
//         console.log(getReject);
//     });
/*
//async await 3
    const tell = async okay => {
        let announce = new Promise ( (resolve, reject) => {
            setTimeout( () => {
                resolve('we are ready!')
            }, 2000);
        })

        let getAnnounce = await announce;
        console.log(getAnnounce);
    }

    //tell();*/





    // fs.writeFile(1111, 'hey dfsdfsude', (err2, res2) => {
    //     if (err2) {
    //         console.log('sdfdsfds', err2)
    //     } else {
    //         console.log('erereeww', res2)
    //     }
    // })