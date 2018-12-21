const sunday = {
    color: "black",
    schGrade: "Pass",
    'girlfriend name': "Azeezat",
    get _getfriendName() {
        if (this['girlfriend name'] === "Azeezat") {
            return `Wow! You are still dating ${this['girlfriend name']}, Great!`;
        } else {
            return `I knew you'd be dating someone else alraedy, smh!`;
        }
    }
}

//module.exports = sunday;

//console.log(sunday._getfriendName);

//function factory. function that stores object as parameter and return them!
const person = (firstName, surname, codeNo) => {
    return {
        firstName: firstName,
        surname: surname,
        codeNo: codeNo,
        get details() {
            if (this.firstName === 'Sofiyullah' && this.surname === 'Jamiu' && this.codeNo === 'LA/18C/2508') {
                return `Yes! This is the Corper we have been looking for, [Firstname: ${this.firstName} SurName: ${this.surname} Code Number: ${this.codeNo}!]`
            } else {
                return 'invalid user';
            }
        }
    }
}

const user1 = person('Sofiyullah', 'Jamiu', 'LA/18C/2508');
const user2 = person('Skimmy', 'rasheed', '14/52');
//console.log(user1.details);
//console.log(user2.details);
//exporting person function factory as a module
module.exports = person;

//we could as well use 'Destructuring technique' known as property value shorthand to create the above code, it makes the code shorter, imagine we have to create a lot of object properties, see example below

const dataTypes = (string, number, boolean, nulltype, undefined, object, symbol) => {
    return {
        string,
        number,
        boolean,
        nulltype,
        undefined,
        object,
        symbol,
        JSdatatypes() {
            console.log(`${string}, ${number}, ${boolean}, ${null}, ${undefined}, ${object}, ${symbol}`);
        }
    }
}

const verify = dataTypes('shola', 66, true, null, undefined, 'object', 'I dunno')
//verify.JSdatatypes();

const apply = () => {
    return new Promise((resolve, reject) => {
        console.log("Applying to Andela...");
        setTimeout(() => {
            console.log("Application sent Successfully!");
            resolve();
        }, 2000)
    });
}

const receiveApplication = () => {
    return new Promise((resolve, reject) => {
        console.log("\nApplication received Successfully!");
        console.log("Checking out files in 3secs....")
        setTimeout(() => {
            console.log('. 1')
        }, 1000);
        setTimeout(() => {
            console.log('.. 2')
        }, 2000);
        setTimeout(() => {
            console.log('... 3')
        }, 3000);
        setTimeout(() => {
            console.log("Files checked! You've been accepted! Welcome to Andela!");
            resolve();
        }, 4000);
    });
}

const workDuration = () => {
    return new Promise((resolve, reject) => {
        let years = 2;
        setTimeout(() => {
            console.log("\nChecking if my work duration is up to two years so I can quit...");
        }, 2000);

        setTimeout(() => {
            console.log(`\nYes! you have used ${years} years, You can resign now!`);
            resolve(true);
        }, 4000);

    });
}

const checkResignation = (isTwo) => {
    return new Promise((resolve, reject) => {
        console.log("okay! Processing my resignation....");
        if(isTwo){
        setTimeout(() => {
            resolve('\n\nDone! am out guys!!');
        }, 2000);
    }
    });
}

async function workTimeline() {
    const one = await apply();
    const two = await receiveApplication(one);
    const three = await workDuration(two);
    const four = await checkResignation(three);
    console.log(four);
}

workTimeline();