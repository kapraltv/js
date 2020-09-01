// console.log(Math.PI.toFixed(2));
// console.log(Math.random().toFixed(2));

// let a = "block";

// switch (a) {
//   case "block":
//     console.log("block");
//     break;
//   case "none":
//     console.log("none");
//     break;
//   case "inline":
//     console.log("inline");
//     break;
//   default:
//     console.log("other");
// }

// let b = "hidden";

// b = "hidden" ? "visible" : "hidden";
// console.log(b);

// let c = 0;

// c = c === 0 ? 1 : c < 0 ? "less then zero" : c * 10;
// console.log(c);

// ##ЗАДАНИЕ 1
// let str = "I am in the easycode";
// let b = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i - 1] == " ") {
//     b += str[i].toUpperCase();
//   } else {
//     b += str[i];
//   }
// }

// console.log(b);

// ##ЗАДАНИЕ 2
// let str = "tseb eht ma i";
// let d = " ";

// for (let i = str.length - 1; i >= 0; i--) {
//   d += str[i];
// }

// console.log(d);

// ##ЗАДАНИЕ 3
// var res = 1;

// for (var i = 9; i > 0; i--) {
//   res *= i + 1;
// }

// console.log(res);

// ##ЗАДАНИЕ 4
// let str = "JavaScript is a pretty good language";
// let b = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i - 1] == " ") {
//     b += str[i].toUpperCase();
//   } else if (str[i] == " ") {
//     b += "";
//   } else {
//     b += str[i];
//   }
// }

// console.log(b);

// ##ЗАДАНИЕ 5
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let value of array) {
//   if (array[value] % 2 !== 0.0) console.log(array[value]);
// }

// ##ЗАДАНИЕ 6
// let list = {
//   name: "denis",
//   work: "easycode",
//   age: 29
// };

// for (let value in list) {
//   if ((list[value] = list[value].toString())) {
//     let b = list[value].toUpperCase();
//     console.log(b);
//   } else {
//     let b = list[value];
//     console.log(list[value]);
//   }
// }

// ФУНКЦИИ ЗАДАНИЕ 1

// function multiply() {
//   if (!arguments.length) return 0;
//   let res = 1;

//   for (let i = 0; i < arguments.length; i++) {
//     res *= arguments[i];
//   }

//   return res;
// }

// console.log(multiply(1,5,2,20))

// ФУНКЦИИ ЗАДАНИЕ 2
// function reverseString(str) {
// let strNew = String(str);
// let res = '';

// for (let i = strNew.length - 1; i >= 0; i--) {
//   res += strNew[i];
// }

//   return console.log(res);
// }

// reverseString("test");
// reverseString('');
// reverseString(null);
// reverseString(undefined);
// reverseString();

// ФУНКЦИИ ЗАДАНИЕ 3

// function getCodeStringFromText(str) {
//   let strNew = String(str);
//   let res = "";

//   for (let i = 0; i <= strNew.length - 1; i++) {
//     res += strNew[i].charCodeAt() + " ";
//   }
//   return res.trim();
// }

// console.log(getCodeStringFromText("hello"));
// console.log(getCodeStringFromText(352345));
// console.log(getCodeStringFromText(''));
// console.log(getCodeStringFromText(null));
// console.log(getCodeStringFromText(undefined));

// ФУНКЦИИ ЗАДАНИЕ 4

// function guessTheNumber(num) {
//   const number = Number(num);

//   if (typeof number !== "number" || isNaN(number))
//     return new Error("Please provide a valid number");
//   if (number < 0 || number > 10)
//     return new Error("Please provide number in range 0 - 10");

//   const random = Math.ceil(Math.random() * 10);

//   if (random === number) return "You win!";

//   return `You are lose, your number is ${number}, the random number is ${random}`;
// }

// console.log(guessTheNumber(5));

// МАССИВ ЗАДАНИЕ 1
// function getArray(num) {
//   let array = [];

//   for (let i = 1; i <= num; i++) {
//     array.push(i);
//   }

//   return array;
// }

// console.log(getArray(3));

// МАССИВ ЗАДАНИЕ 2

// function doubleArray(array) {
//   return array.concat(array);
// }

// console.log(doubleArray(getArray(3)));

// МАССИВ ЗАДАНИЕ 3
// function changeCollection() {
//   const res = [];

//   for (let i = 0; i < arguments.length; i++) {
//     if (Array.isArray(arguments[i])) {
//       const element = arguments[i].slice();

//       element.shift();
//       res.push(element);
//     }
//   }

//   return res;
// }

// console.log(changeCollection([1, 2, 3], [5, 6, 7], [10, 12, 11]));

// МАССИВ ЗАДАНИЕ 4
// let users = [
//   {
//     _id: "5e36b779dc76fe3db02adc32",
//     balance: "$1,955.65",
//     picture: "http://placehold.it/32x32",
//     age: 33,
//     name: "Berg Zimmerman",
//     gender: "male"
//   },
//   {
//     _id: "5e36b779d117774176f90e0b",
//     balance: "$3,776.14",
//     picture: "http://placehold.it/32x32",
//     age: 37,
//     name: "Deann Winters",
//     gender: "female"
//   },
//   {
//     _id: "5e36b779daf6e455ec54cf45",
//     balance: "$3,424.84",
//     picture: "http://placehold.it/32x32",
//     age: 36,
//     name: "Kari Waters",
//     gender: "female"
//   }
// ];

// function filterUsers(arr, key, value) {
//   if (!Array.isArray(arr))
//     return new Error("The first argument should be an array");
//   if (typeof key !== "string" || key === "")
//     return new Error("The key should be a valid string");
//   if (value === undefined || value === null)
//     return new Error("The value should be a valid value.");

//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][value] === value) {
//       res.push(arr[i]);
//     }
//   }

//   return res;
// }

// console.log(filterUsers(users, "age", 36));

// ФУНКЦИЯ ВЫСШЕГО ПРОРЯДКА
// Упражнение по написанию кода 9
// Задание 1

// const array = ["my", "name", "is", "Trinity"];

// function firstFunc(arr, fn) {
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     res += fn(arr[i]);
//   }

//   return "Newvalue: " + res;
// }

// function handler1(el) {
//   return el[0].toUpperCase() + el.slice(1);
// }

// console.log(firstFunc(array, handler1));

// // Задание 2

// function handler2(el) {
//   return el * 10 + ", ";
// }

// console.log(firstFunc([10, 20, 30], handler2));

// // Задание 3
// function handler3(el) {
//   return el.name + " is " + el.age + ", ";
// }

// console.log(
//   firstFunc(
//     [
//       { age: 45, name: "Jhon" },
//       { age: 20, name: "Aaron" },
//     ],
//     handler3
//   )
// );

// Задание 4
// function handler4(el) {
//   for (let i = el.length; i > 0; i--) return el.split().reverse().join() + ", ";
// }

// console.log(firstFunc(["abs", "123"], handler4));

// ФУНКЦИЯ ВЫСШЕГО ПРОРЯДКА
// Упражнение по написанию кода 10

// function every(array, fn) {
//   if (!Array.isArray(array)) return new Error("Ошибка");
//   if (!fn || typeof fn !== "function") return new Error("Ошибка");

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 5) {
//       return false;
//     }
//     return true;
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (!fn(array[i], i, array)) {
//       return false;
//     }

//     return true;
//   }
// }

// console.log(
//   every([1, 2], function (el) {
//     return typeof el === "number";
//   })
// );

// THIS // Задание 1
// const rectangle = {
//   width: 2,
//   height: 3,
//   getSquare: function () {
//     return this.height * this.width;
//   },
// };

// console.log(rectangle.getSquare());

// THIS // Задание 2
// const price = {
//   price: 10,
//   discount: "15%",
//   getPrice: function () {
//     console.log(this.price);
//   },
//   getPriceWithDiscount: function () {
//     let perevod = Number.parseInt(this.discount) / 100;
//     console.log(this.price * (1 - perevod));
//   },
// };

// price.getPrice(); // 10

// price.getPriceWithDiscount(); // 8.5

// THIS // Задание 3
// object = {
//   height: 10,
//   increase: function () {
//     console.log(this.height + 1);
//   },
// };

// object.increase();

// THIS // Задание 4
// const numerator = {
//   value: 1,
//   double() {
//     this.value *= 2;
//     return this;
//   },

//   plusOne() {
//     this.value += 1;
//     return this;
//   },

//   minusOne() {
//     this.value -= 1;
//     return this;
//   },
// };

// numerator.double().plusOne().plusOne().minusOne();

// console.log(numerator.value);
// THIS // Задание 5
// sum = function () {
//   console.log(this.price * this.quantity);
// };

// const object1 = {
//   price: 10,
//   quantity: 3,
//   sum,
// };

// object1.sum();

// // THIS // Задание 6
// const object2 = {
//   quantity: 5,
//   price: 15,
//   sum,
// };

// // object2.sum = object1.sum;

// object2.sum();

// // THIS // Задание 7
// let sizes = { width: 5, height: 10 },
//   getSquare = function () {
//     return this.width * this.height;
//   };

// console.log(getSquare.call(sizes));

// THIS // Задание 8
// let element = {
//   height: 25,
//   getHeight: function () {
//     return this.height;
//   },
// };

// let getElementHeight = element.getHeight.bind(element);

// console.log(getElementHeight());

// Стрелочные функции
// Задание 1

// const sum = (...params) => {
//   if (!params.length) return 0;
//   return params.reduce((prev, next) => prev + next);
// };

// console.log(sum([1, 2, 3, 4])); // 10
// console.log(sum()); // 0

// Задание 2
// const convertToObject = (num) => ({
//     value: num,
//     isOdd: Boolean(num % 2)
//   });

// Методы массивов
// Задание 1
// let arr = [1, 2, 3, 5, 8, 9, 10];

// arr.map((elarr) => {
//   console.log("digit: " + elarr + ", odd: " + (elarr % 2 == false));
// });

// Задание 2
// const arr = [12, 4, 50, 1, 0, 18, 40];

// const arrNew = arr.some((arr) => arr === 0);
// console.log(arrNew);

// Задание 3
// const arr = ["yes", "hello", "no", "easycode", "what"];

// const arrNew = arr.every((arr) => arr.length < 3);
// console.log(arrNew);

// Задание 4
// const arr = [
//   { char: "a", index: 12 },
//   { char: "w", index: 8 },
//   { char: "Y", index: 10 },
//   { char: "p", index: 3 },
//   { char: "p", index: 2 },

//   { char: "N", index: 6 },
//   { char: " ", index: 5 },
//   { char: "y", index: 4 },
//   { char: "r", index: 13 },
//   { char: "H", index: 0 },

//   { char: "e", index: 11 },
//   { char: "a", index: 1 },
//   { char: " ", index: 9 },
//   { char: "!", index: 14 },
//   { char: "e", index: 7 },
// ];
// let res = "";
// arr.sort((prev, next) => prev.index - next.index);
// arr.map((arr) => {
//   res += arr.char;
// });
// console.log(res);

// Задание 5
// const arr = [[14, 45], [1], ["a", "c", "d"]];

// arr.sort((prev, next) => prev.length - next.length);
// console.log(arr);

// Задание 6
// const arr = [
//   { cpu: "intel", info: { cores: 2, сache: 3 } },

//   { cpu: "intel", info: { cores: 4, сache: 4 } },

//   { cpu: "amd", info: { cores: 1, сache: 1 } },

//   { cpu: "intel", info: { cores: 3, сache: 2 } },

//   { cpu: "amd", info: { cores: 4, сache: 2 } },
// ];

// arr.sort((prev, next) => prev.info.cores - next.info.cores);
// console.log(arr);

// Задание 7
// let products = [
//   { title: "prod1", price: 5.2 },
//   { title: "prod2", price: 0.18 },

//   { title: "prod3", price: 15 },
//   { title: "prod4", price: 25 },

//   { title: "prod5", price: 18.9 },
//   { title: "prod6", price: 8 },

//   { title: "prod7", price: 19 },
//   { title: "prod8", price: 63 },
// ];

// function prod(valueProduct, price1, price2) {
//   return valueProduct
//     .filter(({ price }) => price >= price1 && price <= price2)
//     .sort((prev, next) => prev.price - next.price);
// }
// console.log(prod(products, 15, 30));

// Замыкание
// Задание 1

// function minus(value1 = 0) {
//   return function (value2 = 0) {
//     console.log(value1 - value2);
//   };
// }
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0

// Задание 2
// function multiplyMaker(value1) {
//   let x = value1;
//   return function (value2) {
//     return console.log((x *= value2));
//   };
// }

// const multiply = multiplyMaker(2);

// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

// Задание 3

// function str() {
//   let x = "";
//   return {
//     checkStr(value) {
//       if (value == NaN) value == "";
//       if (value == Number) x = String.value;
//       else {
//         return (x = value);
//       }
//     },
//     getStr() {
//       console.log(x);
//     },
//     getLenghtStr() {
//       console.log(x.length);
//     },
//   };
// }

// const res = str();
// res.checkStr("abcde");
// res.getStr();
// res.getLenghtStr();

// Задание 4
// function calculator() {
//   let x;

//   return {
//     checkNumber(value1) {
//       return (x = value1);
//     },
//     addNumber(value2) {
//       return (x += value2);
//     },
//     multiplyNumber(value3) {
//       return (x *= value3);
//     },
//     roundNumber() {
//       console.log(Math.round(x));
//     },
//   };
// }

// const res = calculator();
// console.log(res.checkNumber(10));
// console.log(res.addNumber(5));
// console.log(res.multiplyNumber(2));
// res.roundNumber();

// Деструктуризация
// Задание 1

// const getFirstAndOther = (first, ...other) => ({ first, other });

// console.log(getFirstAndOther(2, 3, 5, 6));

// Задание 2

// const organisation = {
//   name: "Google",
//   info: {
//     employees: ["Vlad", "Olga"],
//     partners: ["Microsoft", "Facebook", "Xing"],
//   },
// };

// function getInfo({
//   name = "Unknow",
//   info: { partners: [first = "none", second = "none"] = [] } = {},
// } = {}) {
//   console.log(`Name: ${name}`);
//   console.log(`Partners: ${first}, ${second}`);
// }

// getInfo(organisation);
// getInfo();

// DOM
// const btn = document.querySelector("button");
// const link = document.querySelector("a");
// btn.onclick = function Odinclick() {
//   console.log('arr');
// };

// const container = document.querySelector(".container");

// btn.addEventListener("click", (e) => {
//   const div = document.createElement("div");
//   const button = document.createElement("button");
//   div.textContent = Math.random();
//   button.textContent = "WIN";
//   div.appendChild(button);
//   container.appendChild(div);
// });

// container.addEventListener("click", (e) => {
//   if ((e.target.tagName = "BUTTON")) {
//     console.log("It is button");
//   }
// });

// link.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("click");
// });

function reverseWord(word) {
  let result = "";

  for (let i = 0; i < word.length - 1; i++) {
    let sumElement = [];

    if ((word[i] == " ") & (sumElement.length >= 5)) {
      sumElement.push(sumElement).reverse();
    } else {
      sumElement.push(word[i]);
    }
    result += sumElement;
  }
  console.log(result);
}

reverseWord("Dmitry Kapralov asd");
