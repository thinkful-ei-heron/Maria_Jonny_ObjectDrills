let loaf = {
    flour: 300,
    water: 210,
    hydration: function () {
        return this.water / this.flour * 100;
    }
}
console.log(loaf.flour, loaf.water, loaf.hydration());

let obj = {
    foo: 7,
    bar: 'yeet',
    fum: true,
    quux: ['yes', 'no'],
    spam: 'SPAM'
};
for (let key in obj) {
    console.log(key, obj[key]);
}

let obj2 = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(obj2.meals[3]);

let employees = [{name: 'Scott', jobTitle: 'MemeViewer'}, {name: 'Billy', jobTitle: 'Chef'}, {
    name: 'Leanna',
    jobTitle: 'Vendor'
}];
employees.forEach((employee) => employee.boss = (employee.name !== 'Scott') ? 'Scott' : undefined);

employees.forEach((employee) => {
    let {jobTitle, name, boss} = employee;
    if (boss) {
        console.log(`${jobTitle} ${name} reports to ${boss}.`)
    } else {
        console.log(`${jobTitle} ${name} doesn't report to anybody.`)
    }
});

let cypher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
};
let test = 'craft block argon meter bells brown croon droop'.split(' ');
function decode(encoded) {
    return (cypher[encoded.substr(0,1)]) ? encoded.substr(cypher[encoded.substr(0,1)]-1,1) : ' ';
}
function decodeWords(encodedArr) {
    let x = '';
    encodedArr.forEach((encoded) => x += decode(encoded));
    return x;
}
console.log(decodeWords(test));

function createCharacter() {
    return {
        name: '',
        nickname: '',
        race: '',
        origin: '',
        describe: function () {
           console.log(`${this.name} is a ${this.race} from ${this.origin}.`)
        },
        evaluateFight: function(character) {
            "Your opponent takes {x} damage and you receive {y} damage"
        }
    }
}