'use strict';

// const restaurant = {
//   name: 'Diplomat',
//   location: 'Islom Karimov 9-A. Street',
//   category: ['breakfast', 'lunch', 'dinner'],
//   starterMenu: ['qiyma shashlik', 'jaz shashlik', 'qozon kabob', 'dimlama'],
//   mainMenu: ['Diplomat Assarti', 'big assarti', 'medium assarti'],

//   order: function (startIndex, mainIndex) {
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     mon: {
//       open: 10,
//       close: 22,
//     },
//     wed: {
//       open: 11,
//       close: 23,
//     },
//     fri: {
//       open: 0, // 24 hours free
//       close: 24,
//     },
//   },

//   orderDelivery: function ({ time = '13:00', personName, address }) {
//     console.log(`${personName} recived his order in ${time} in ${address}`);
//   },

//   pastaIngredinet: function (ing1, ing2, ing3) {
//     console.log(`Pasta is prepered ${ing1}, ${ing2} and ${ing3} `);
//   },
// };
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
