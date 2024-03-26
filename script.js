'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[0]]: {
    open: 10,
    close: 22,
  },
  [weekdays[1]]: {
    open: 9,
    close: 21,
  },
  [weekdays[2]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // 24 hours free
    close: 24,
  },
};

const restaurant = {
  name: 'Diplomat',
  location: 'Islom Karimov 9-A. Street',
  category: ['breakfast', 'lunch', 'dinner'],
  starterMenu: ['qiyma shashlik', 'jaz shashlik', 'qozon kabob', 'dimlama'],
  mainMenu: ['Diplomat Assarti', 'big assarti', 'medium assarti'],

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // ES5
  // openingHours: openingHours,

  // ES6
  openingHours,

  orderDelivery({ time = '13:00', personName, address }) {
    console.log(`${personName} recived his order in ${time} in ${address}`);
  },

  pastaIngredine(ing1, ing2, ing3) {
    console.log(`Pasta is prepered ${ing1}, ${ing2} and ${ing3} `);
  },

  orderShashlik(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// optinal chaining (?.)

// if (restaurant.openingHours && restaurant.openingHours.sat) {
//   console.log(restaurant.openingHours.sat.open);
// }

// console.log(restaurant.openingHours.sat?.open);

// restaurant.order(1, 2);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // const open = openingHours[day]?.open ?? 'close';
  // console.log(`On ${day} we are open ${open}`);
}

// methods
// console.log(restaurant.order(0, 2) || 'Method doesnt exist');
// console.log(restaurant.orderMenu?.(0, 2) || 'Method doesnt exist');

//arrays
// const users = [
//   {
//     name: 'jons',
//     email: 'aaa@gmail.com',
//   },
//   {
//     name: 'jonas2',
//     email: 'aaa2@gmail.com',
//   },
// ];

// console.log(users[0]?.name || 'empty');

// emply arrray
// const users = [];
// if (users.length > 0) {
//   console.log(users[0].name);
// } else {
//   console.log('Empty');
// }

// const obj = {
//   firstName: 'Tom',
//   age: 20,
// };

const properties = Object.keys(openingHours);

// let openStr = `we are open ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

const entries = Object.entries(openingHours);

for (const [key, value] of entries) {
  // console.log(key, value);
}

// console.log(Object.values(obj));
// for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// ES 5
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// ES 6
for (const item of menu.entries()) {
  // console.log(`${item[0] + 1} ${item[1]}`);
  // console.log(item);
}

for (const [i, value] of menu.entries()) {
  // console.log(i, value);
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'March 14th, 2024',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries()) {
  // console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
}
// console.log(average);

//3.
for (const [team, value] of Object.entries(game.odds)) {
  const playerStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  // console.log(`Odd of ${playerStr} ${value}`);
}

// ------------------------object destructuring
// const { name, category, mainMenu } = restaurant;
// console.log(name, category, mainMenu);

// const { name: restaurantName, category: tags, mainMenu: mainFood } = restaurant;
// console.log(restaurantName, tags, mainFood);

// const { menu = [], starterMenu } = restaurant;
// console.log(menu, starterMenu);

// restaurant.orderDelivery({
//   time: '14;00',
//   personName: 'Tom',
//   address: 'A.Navoiy Street',
// });

// nested objects
// const { name, category, openingHours } = restaurant;
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c)

// const ingredients = [
//   prompt('1-ingredine'),
//   prompt('2-ingredient'),
//   prompt('3-ingredient'),
// ];

// restaurant.pastaIngredinet(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.pastaIngredinet(...ingredients);

// const str = 'Jonas';

// const letters = [...str];
// console.log(letters);

// -------------------------array destructuring
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.category;
// console.log(first, second);

// const [startFood, mainFood] = restaurant.order(2, 0);
// console.log(startFood, mainFood);

// nested array
// const nested = [1, 2, [3, 4]];
// const [i, , j] = nested;
// console.log(i, j);

// default value
// const [m, n, o = 10] = [8, 9];
// console.log(m, n, o);

// const arr = [3, 4, 5];
// const badNewArr = [1, 2, ...arr];
// console.log(...badNewArr);

// const foodMenu = ['first', ...restaurant.starterMenu];
// console.log(...foodMenu);

// spread operator right side of =
// let arr = [1, 2, 3, ...[4, 5, 6]];
// console.log(arr);

// rest operator left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [qiyma, jaz, ...otherFood] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];

// console.log(qiyma, jaz, otherFood);

// const { mon, ...weekdays } = restaurant.openingHours;
// console.log(mon);
// console.log(weekdays);

// const add = (...numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// console.log(sum);
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);
// add(1, 2, 3, 4, 5, 6, 7);

// const x = [10, 20, 30];
// add(...x);
// restaurant.orderShashlik('meat', 'onion', 'salt', 'oil');

// ------------------- or
// console.log(true || false);
// console.log(3 || 'Tom');
// console.log('' || 'Tom');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(null || 0);
// console.log(undefined || 0 || '' || 'hello' || 22 || null);

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// ('---- And ----');

// console.log(0 && 'Bob');
// console.log(2 && 'Tom');
// console.log('hello' && 22 && null && 'Bob');

// if (restaurant.orderShashlik) {
//   restaurant.orderShashlik('meat', 'onion', 'salt', 'oil');
// }

// restaurant.orderShashlik &&
//   restaurant.orderShashlik('meat', 'onion', 'salt', 'oil');

// restaurant.numGuests = 0;
// Nullish 0 va '' (??)
// const guest2 = restaurant.numGuests ?? 10;
// console.log(guest2);

// const rest1 = {
//   name: 'Best',
//   numGuest: 0,
// };

// const rest2 = {
//   name: 'Dubai',
//   owner: 'Thompson',
// };
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// console.log(rest1);
// console.log(rest2);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'March 14th, 2024',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1.
// const [players1, players2] = game.players;

// 2.
// const [gk, ...fieldPlayers] = players1;

// 3.
// const allPlayers = [...players1, ...players2];

// 4.
// const players1Final = [...players1, 'Thiago', 'Coutnio', 'Perisic'];

// 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// 6.
// const printGolas = (...playerGolas) => {
//   console.log(`${playerGolas.length} goals were scored`);
// };
// printGolas(...game.scored);

// 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 1 is more likely to win');

//! ------------------------------- Set ---------------------------

// const fruits = new Set([
//   'apple',
//   'orange',
//   'apple',
//   'banana',
//   'orange',
//   'apple',
// ]);
// console.log(new Set('Daaanieeel'));

// console.log(fruits);
// console.log(fruits.size);
// console.log(fruits.has('apple'));
// console.log(fruits.has('melon'));
// fruits.add('pineapple');
// fruits.delete('orange');
// fruits.clear();
// console.log(fruits);
// for (const fruit of fruits) console.log(fruit);

// const staff = ['waiter', 'chef', 'teacher', 'waiter', 'chef'];
// const uniqueStaff = new Set(staff);
// console.log(uniqueStaff);

// console.log(new Set('Daniel').size);

//~ ------------------------------- Map ---------------------------

// const rest = new Map();

// rest.set('name', 'Best');
// rest.set(1, 'Italy');
// rest.set(2, 'Germany');

// rest
//   .set('category', ['breakfast', 'lunch', 'dinner'])
//   .set('open', 10)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are close');

// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(1));
// console.log(rest.get(true));
// console.log(rest.get('true')); // undefined

// console.log(rest.has('open'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();

// const time = 11;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// const arr = [1, 2];

// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

//^ ------------------------------- Maps Iteration ---------------------------
// *Quiz App

/* const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Phyton'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct ✅'],
  [false, 'Try again! ❌'],
]);

console.log(question);

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
// const answer = Number(prompt('Your answer!'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// console.log(question.entries());
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]); */

// *FootBall App

/* const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const uniqueEvent = new Set(gameEvents.values());

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${Math.floor(
    90 / gameEvents.size
  )} minutes`
);
//! how to remove numbers after dot in javscript

// 4.

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} Time] ${min}: ${event}`);
} */

// ^  --------------------- working with strings part 1
/*
const airline = 'Top air Aviasales';

console.log(airline[0]);
console.log(airline[1]);
console.log(airline[2]);
console.log('A123'[0]);

console.log(airline.length);
console.log('Daniel'.length);

console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('air'));
console.log(airline.indexOf('Air')); // -1

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-3));
console.log(airline.slice(2, -2));

const checkMiddleSeat = (seat) => {
  // B va E orta qator
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You are on middle seat');
  } else {
    console.log('You are lucky');
  }
};

checkMiddleSeat('11A');
checkMiddleSeat('4B');
checkMiddleSeat('7C');
checkMiddleSeat('23E');

console.log(typeof new String('Daniel')); */

// ^  --------------------- working with strings part 2

/*
const airline = 'Top air Aviasales';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passanger = 'jOnAS'; // Jonas
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);

const email = 'hello@gmail.com';
const loginEmail = '     helLO@gmAIL.coM   \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceUz = '100,000s';
const prizeUsd = priceUz.replace('s', '$').replace(',', '.');
console.log(prizeUsd);

const annauncement =
  'All passengers are staying 23 hostels and 14 hostels room';

// console.log(annauncement.replace(/hostels/g, 'hotels'));
console.log(annauncement.replaceAll('hostels', 'hotels'));

// Booleans
const plane = 'Air A123new';
console.log(plane.includes('A'));
console.log(plane.includes('b'));
console.log(plane.includes('new'));
console.log(plane.startsWith('Ai'));

if (plane.startsWith('Air') && plane.includes('new')) {
  // console.log('You are flaying new plane');
}

const checkBaggage = (items) => {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome on board');
  }
};

checkBaggage('I have Laptop, Telephone and Knife');
checkBaggage('Snacks, apple and orange');
checkBaggage('A gun for protection'); */

// ^  --------------------- working with strings part 3
/*

// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Tom Jasper'.split(' '));

const [firstName, lastName] = 'Tom Jasper'.split(' ');
const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);

const capitalizationName = (name) => {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizationName('bob tom ann jonas daniel'); // Bob Tom Ann Jonas Daniel

// padding
const message = 'Go to gym 10!';
console.log(message.padStart(20, '+').padEnd(25, '+'));

const maskCredirCart = (number) => {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCredirCart(1234567812345678));
console.log(maskCredirCart('123456781234567833442323'));
console.log(maskCredirCart('1234567812'));

// repeat
const message2 = 'Weather is bad, All passangers are delayed!';
console.log(message2.repeat(3));

const planeInLine = (n) => {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};

planeInLine(10);
planeInLine(15);
planeInLine(5); */

// practise exersice

/* 
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`.padEnd(20, ' ');
    console.log(`${output} ${'✅'.repeat(i + 1)}`);
  }
}); */

// !homework
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
