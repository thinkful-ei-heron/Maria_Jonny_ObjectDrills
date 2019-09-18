
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



function createCharacter(name, nickname, race, origin, attack ,defence) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defence,
        describe: function () {
            if(this.equipped) {
                console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.equipped}.`)
            } else {
                console.log(`${this.name} is a ${this.race} from ${this.origin}.`)
            }
            },
        evaluateFight: function(character) {
            console.log(`Your opponent takes ${(character.defence > this.attack) ? 0 : this.attack - character.defence} damage and you receive ${(this.defence > character.attack) ? 0 : character.attack - this.defence} damage`);
        }
    }
}
let characters  = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
];
characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 4,3));

characters.find((char) => char.nickname === 'aragorn').describe();

let hobbits = characters.filter((char) => char.race === 'Hobbit');
console.log(hobbits);

let strChars = characters.filter((char) => char.attack > 5);
console.log(strChars);

characters [1].evaluateFight(characters[0]);

function equipItem(character, string) {Object.assign(character, {equipped: string})}
equipItem(characters[0], 'a wizard staff');
equipItem(characters[1], 'the Ring');
equipItem(characters[2], 'String and Barrow Blade');
equipItem(characters[3], 'Anduril');
equipItem(characters[4], 'Bow and Arrow');
equipItem(characters[5], 'Hadhafang');


characters.forEach(character => character.describe());

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
    let match = null;
    arr.find((item) => {
        let success = true;
        for(let key in query) {
            if(item[key] !== query[key]) {
                success = false;
            }
        }
        if(success) {
             match = item;
        }
    });
    return match;
}
console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice League' }));

