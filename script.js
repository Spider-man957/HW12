// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
// const nameOfUser = { name: "Tom", hobby: "guitare", premium: true };
// function editTeXt(object) {
//   let mood = "happy";
//   Object + mood;
//   object.hobby = "skydiving";
//   object.premium = false;
//   return object;
// }
// console.log(editTeXt(nameOfUser));

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
// let a = [1, 2, 3, "gsgrwg", "sfefsfse", false];
// function countProps(obj) {
//   return console.log(a.length);
// }
// countProps(a);

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого
// (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості
//  об'єкта в форматі "ім'я":"кількість задач".
// employees = { ann: 29, david: 35, helen: 1, lorence: 99 };
// findBestEmployee(employees) {
//   let bestEmployee = "";
//   let maxTasks = 0;
//   for (const employee in employees) {
//     if (employees[employee] > maxTasks) {
//       maxTasks = employees[employee];
//       bestEmployee = employee;
//     }
//   }
//   return bestEmployee;
// }

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
//let a = { tom: 1000, mary: 1000, david: 2005 };
// function countTotalSalary(employees) {
//   let totalPrice = 0;
//   for (const employee in employees) {
//     totalPrice += employees[employee];
//   }
//   return console.log(totalPrice);
// }
// countTotalSalary(a);

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
// let a = [
//   { name: "Mango", age: 20, personalLogan: "ARRRRR" },
//   { name: "Poly", age: 18 },
// ];
// function getAllPropValues(arr, prop) {
//   let b = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (prop in arr[i]) {
//       b.push(arr[i]);
//     } else {
//       continue;
//     }
//   }
//   return console.log(b);
// }
// getAllPropValues(a, "personalLogan");

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.
// const products = [
//   { name: "I-phone", price: 3000, quantity: 4 },
//   { name: "Androd", price: 2700, quantity: 3 },
//   { name: "Windows", price: 5000, quantity: 7 },
// ];
// function calculateTotalPrice(allProdcuts, productName) {
//   let a = 0;
//   for (let i = 0; i < allProdcuts.length; i++) {
//     if (allProdcuts[i].name === productName) {
//       a = allProdcuts[i];
//     }
//   }
//   return a.price * a.quantity;
// }
// console.log(calculateTotalPrice(products, "Windows"));
