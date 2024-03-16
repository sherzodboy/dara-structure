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
