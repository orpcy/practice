const fetch = require('node-fetch');

// const fetchData = (id, callback) => {
//     fetch(`https://api.github.com/users/${id}`)
//         .then(res => res.json())
//         .then(response => {
//             callback(null, response);
//         }).catch(err => {
//             callback(err, null)
//         });
// }

// fetchData(500000, (err, response) => {
//     if (err) {
//         console.log('Invalid url\n Error msg:', err);
//     }else if(response.message === "Not Found") {
//         console.log('User/Json Object not found');
//     } else {
//         console.log(`Data fetched successfully:\nLogin: ${response.login} \nid: ${response.id} \nname: ${response.name}`);
//     }
// });

// const fetchData = (id) => {
//     return new Promise((resolve, reject) => {
//         fetch(`https://anmvvpi.github.com/users/${id}`)
//             .then(res => res.json())
//             .then(response => {
//                 resolve(response);
//             }).catch(err => {
//                 reject(err);
//             });
//     });
// }

// fetchData(4678343674)
//     .then(positive => {
//         if (positive.message === "Not Found") {
//             console.log('User/Json Object not found');
//         }else {
//             console.log(`Data fetched successfully:\nLogin: ${positive.login} \nid: ${positive.id} \nname: ${positive.name}`);
//         }
//     })
//     .catch(negative => {
//         console.log('Invalid url\n Error msg:', negative);
//     });

const fetchData = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/users/${id}`)
            .then(res => res.json())
            .then(response => {
                resolve(response);
            }).catch(err => {
                reject(err);
            });
    });
}

async function waitData() {
    try {
        const takeData = await fetchData(500004764);
        if (takeData.message === "Not Found") {
            console.log('User/Json Object not found');
        } else {
            console.log(`Data fetched successfully:\nLogin: ${takeData.login} \nid: ${takeData.id} \nname: ${takeData.name}`);
        }
    } catch (takeData) {
        console.log('Invalid url\n Error msg:', takeData);
    }

}

waitData();


