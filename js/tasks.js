// const refs = {
//   calculator: document.querySelector(".calculator"),
//   firstInput: document.querySelector("#firstInput"),
//   secondInput: document.querySelector("#secondInput"),
//   btns: document.querySelectorAll(".btns"),
//   result: document.querySelector(".result"),
// };
// const results = refs.calculator.addEventListener("click", onBtnClick);

// function onBtnClick(e) {
//   let results = 0;
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   } else if (e.target.dataset.operation === "Addition") {
//     results = Number(refs.firstInput.value) + Number(refs.secondInput.value);
//   } else if (e.target.dataset.operation === "Subtraction") {
//     results = Number(refs.firstInput.value) - Number(refs.secondInput.value);
//   } else if (e.target.dataset.operation === "Multiplication") {
//     results = Number(refs.firstInput.value) * Number(refs.secondInput.value);
//   } else if (e.target.dataset.operation === "Division") {
//     results = (
//       Number(refs.firstInput.value) / Number(refs.secondInput.value)
//     ).toFixed(3);
//   }
//   refs.result.innerHTML = results;
// }
// <div class="calculator">
//       <input type="number" id="firstInput" />
//       <input type="number" id="secondInput" />
//       <button class="btns" type="button" data-operation="Addition">
//         Додавання
//       </button>
//       <button class="btns" type="button" data-operation="Subtraction">
//         Віднімання
//       </button>
//       <button class="btns" type="button" data-operation="Multiplication">
//         Множення
//       </button>
//       <button class="btns" type="button" data-operation="Division">
//         Ділення
//       </button>
//     </div>
//     <div class="result"></div>

//==============================================================
// Задача 2: Підрахунок слів у тексті
// Опис: Створи веб-сторінку, яка підраховує кількість слів у введеному тексті.

// Умова:

// Створи HTML сторінку з текстовим полем (textarea) і кнопкою "Підрахувати".
// Використовуючи JavaScript, підрахуй кількість слів у тексті при
//натисканні кнопки.
// Виведи результат на екран.
//

// const refs = {
//   result: document.querySelector(".result"),
//   userText: document.querySelector("#user-text"),
//   resultBtn: document.querySelector("#result-btn"),
//   resultBox: document.querySelector(".result-view"),
// };

// refs.result.addEventListener("click", onResultBtnClick);

// function onResultBtnClick(e) {
//   if (e.target.nodeName !== "BUTTON" || refs.userText.value === "") {
//     return;
//   }

//   const wordsInArray = refs.userText.value.trim().split(/\s+/).length;
//   refs.resultBox.innerHTML = wordsInArray;

//   refs.userText.value = "";
// }

//  <div class="result">
//       <textarea id="user-text" rows="5" cols="25"></textarea>
//       <button type="button" id="result-btn">Підрахувати</button>
//     </div>
//     <div class="result-view"></div>
// #user-text {
//   resize: none;
// }

//==========================================================================
// Задача 3: Перемикання теми сайту (Світла/Темна)
// Опис: Створи функціонал для перемикання теми сайту між світлою та темною.

// Умова:

// Створи HTML сторінку з кнопкою для перемикання теми.
// Використовуючи JavaScript, додай функціональність для перемикання класу теми при натисканні на кнопку.
// Додай стилі для світлої та темної теми.

// const refs = {
//   bodyEl: document.querySelector("body"),
//   boxEl: document.querySelector(".box"),
//   btnEl: document.querySelector("#toggle-btn"),
// };

// refs.boxEl.addEventListener("click", () => {
//   refs.bodyEl.classList.toggle("dark");
//   refs.bodyEl.classList.toggle("light");
// });

//  <div class="box">
//    <button type="button" id="toggle-btn">
//      Click me
//    </button>
//  </div>;

// .light {
//   background-color: rgb(241, 238, 171);
//   transition: background-color 350ms linear;
// }

// .dark {
//   background-color: rgb(35, 29, 29);
//   transition: background-color 350ms linear;
// }
// .body {
//   position: relative;
//   height: 100vh;
// }
// .box {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }

// #toggle-btn {
//   display: block;
//   border: transparent;
//   background-color: aqua;
//   color: rgb(27, 24, 23);
//   font-size: large;
//   border-radius: 5px;
//   padding: 10px;
//   box-shadow: 2px 2px 1px 1px;
//   cursor: pointer;
// }

// #toggle-btn:hover {
//   transform: scale(1.1);
//   transition: transform 250ms ease-in;
// }

// #toggle-btn:active {
//   transform: scale(0.95);
//   transition: transform 250ms ease-in;
// }

//============================================================================

// Задача 4: Сортування масиву об'єктів
// Опис: Напиши функцію для сортування масиву об'єктів за заданою властивістю.

// Умова:

// Створи масив об'єктів, де кожен об'єкт має властивості name та age.
// Напиши функцію для сортування цього масиву за віком (за зростанням і спаданням).

// const people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Eva", age: 28 },
// ];

// function sortingArrayOfObj(arr) {
//   const ageArrayNoStonks = arr
//     .toSorted((firstUser, SecondUser) => SecondUser.age - firstUser.age)
//     .map(({ name, age }) => `${name}-${age}`)
//     .join(" ");

//   const ageArrayStonks = arr
//     .toSorted((firstUser, SecondUser) => firstUser.age - SecondUser.age)
//     .map(({ name, age }) => `${name}-${age}`)
//     .join(" ");
//   return `сортування за спаданням ${ageArrayNoStonks}\nсортування за зростанням ${ageArrayStonks}`;
// }
// console.log(sortingArrayOfObj(people));

//=============================================================================

// const refs = {
//   inputTask: document.querySelector("#task-input"),
//   tasksList: document.querySelector(".tasks-list"),
//   addTaskBtn: document.querySelector("#add-task"),
// };

// refs.addTaskBtn.addEventListener("click", onAddTaskBtnClick);
// refs.tasksList.addEventListener("click", (e) => {
//   e.target.dataset.remove === "remove" ? e.target.closest("li").remove() : "";
// });

// function onAddTaskBtnClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== "BUTTON" || refs.inputTask.value === "") {
//     return;
//   }

//   const markup = `<li class="tasks-list-item">${refs.inputTask.value}
//   <button type="button" class="remove-task" data-remove="remove">Видалити</button>
//   </li>`;
//   refs.tasksList.insertAdjacentHTML("afterbegin", markup);
//   refs.inputTask.value = "";
// }

// body {
//   font-family: Arial, sans-serif;
//   padding: 20px;
// }

// #task-input {
//   width: 200px;
//   padding: 10px;
//   margin-right: 10px;
// }

// #add-task {
//   padding: 10px 20px;
// }

// .tasks-list {
//   margin-top: 20px;
//   list-style: none;
//   padding: 0;
// }

// .tasks-list-item {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   border: 1px solid #ccc;
//   margin-bottom: 5px;
// }

// .remove-task {
//   padding: 5px 10px;
// }

//  <input type="text" id="task-input" />
//     <button type="button" id="add-task">Додати задачу</button>
//     <ul class="tasks-list"></ul>
//==========================================================================
// const refs = {
//   form: document.querySelector(".form"),
//   UserName: document.querySelector("#user-name"),
//   userEmail: document.querySelector("#user-email"),
//   userPassword: document.querySelector("#user-password"),
//   userConfPasswrd: document.querySelector("#confirm-pswrd"),
//   sbmButtn: document.querySelector("#submit-btn"),
//   nameErr: document.querySelector("#name-error"),
//   emailErr: document.querySelector("#email-error"),
//   pswrdErr: document.querySelector("#password-error"),
//   confirmPswrdErr: document.querySelector("#confirmPassword-error"),
// };

// const formData = {
//   name: "",
//   email: "",
//   password: "",
// };

// refs.form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let isValid = true;

//   if (refs.UserName.value.trim().length < 3) {
//     refs.nameErr.textContent = "Please choose correct Name";
//     isValid = false;
//     refs.UserName.classList.add("isValid-false");
//   } else {
//     refs.nameErr.textContent = "";
//     refs.UserName.classList.replace("isValid-false", "isValid-true");
//   }

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(refs.userEmail.value)) {
//     refs.emailErr.textContent = "Please choose correct Email";
//     isValid = false;
//     refs.userEmail.classList.add("isValid-false");
//   } else {
//     refs.emailErr.textContent = "";
//     refs.userEmail.classList.replace("isValid-false", "isValid-true");
//   }

//   if (refs.userPassword.value.trim().length < 6) {
//     refs.pswrdErr.textContent = "Please choose correct length password";
//     isValid = false;
//     refs.userPassword.classList.add("isValid-false");
//   } else {
//     refs.pswrdErr.textContent = "";
//     refs.userPassword.classList.replace("isValid-false", "isValid-true");
//   }

//   if (
//     refs.userConfPasswrd.value.trim() !== refs.userPassword.value.trim() ||
//     refs.userConfPasswrd.value.trim().length < 6
//   ) {
//     refs.confirmPswrdErr.textContent =
//       "Please correct ur passwords is not = password";
//     isValid = false;
//     refs.userConfPasswrd.classList.add("isValid-false");
//   } else {
//     refs.confirmPswrdErr.textContent = "";
//     refs.userConfPasswrd.classList.replace("isValid-false", "isValid-true");
//   }
// });

// refs.form.addEventListener("input", function (e) {
//   const nameInput = refs.UserName.value.trim();
//   const emailInput = refs.userEmail.value.trim();
//   const passwordInput = refs.userPassword.value.trim();

//   formData.name = nameInput;
//   formData.email = emailInput;
//   formData.password = passwordInput;
//   const toStringJSN = JSON.stringify(formData);

//   const localStorageKey = "user-data";

//   localStorage.setItem(localStorageKey, toStringJSN);
// });

// .form label,
// input {
//   display: block;
// }

// .error-message {
//   color: red;
//   font-size: 0.875em;
//   margin-top: 5px;
// }

// .isValid-false {
//   border: red 1px solid;
// }

// .isValid-true {
//   border: lightgreen 1px solid;
// }

// <form class="form" action>
//       <label
//         >Name: <input id="user-name" type="text" autofocus />
//         <div class="error-message" id="name-error"></div
//       ></label>
//       <label>Email: <input id="user-email" type="email" /></label>
//       <div class="error-message" id="email-error"></div>
//       <label>Password <input id="user-password" type="password" /></label>
//       <div class="error-message" id="password-error"></div>
//       <label
//         >Confirm Password <input id="confirm-pswrd" type="password" />
//         <div class="error-message" id="confirmPassword-error"></div
//       ></label>

//       <button id="submit-btn" type="submit">Register</button>
//     </form>

//===========================================================================
//===========================================================================
// Задача 6: Додавання та видалення елементів з масиву об'єктів
// Опис: Створи інтерфейс для додавання та видалення користувачів з масиву об'єктів.

// Умова:

// Створи HTML-сторінку з формою для додавання користувача, яка містить поля для введення імені та віку.
// Використовуючи JavaScript, додай функціональність для додавання нового користувача до масиву при натисканні на кнопку.
// Додай можливість видалення користувача з масиву та відображення оновленого списку користувачів на сторінці.
// Приклад початкового масиву об'єктів:
// let users = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 22 },
// ];

// const refs = {
//   box: document.querySelector(".box"),
//   userName: document.querySelector("#user-name"),
//   userAge: document.querySelector("#user-age"),
//   btnEl: document.querySelector(".btn-add"),
//   usersList: document.querySelector(".list-users"),
// };

// refs.box.addEventListener("click", onBtnClick);
// refs.usersList.addEventListener("click", (e) => {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const removeEl = e.target.closest("LI");
//   removeEl.remove();
// });

// const markup = users
//   .map(({ name, age }) => {
//     return `<li>${name}: ${age}
//     <button type="button">Delete</button>
//     </li>`;
//   })
//   .join("");

// refs.usersList.innerHTML = markup;

// function onBtnClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const name = refs.userName.value;
//   const age = refs.userAge.value;

//   let userObj = {};
//   userObj.name = name;
//   userObj.age = age;

//   const newUser = `<li>${name}: ${age}
//     <button type="button">Delete</button>
//     </li>`;
//   refs.usersList.insertAdjacentHTML("afterbegin", newUser);
//   users.push(userObj);

//   refs.userName.value = "";
//   refs.userAge.value = "";
// }

//  <div class="box">
//       <label>Name<input name="user-name" type="text" id="user-name" /></label>
//       <label
//         >Age<input name="user-age" type="number" min="1" max="99" id="user-age"
//       /></label>
//       <button type="button" class="btn-add">Add User</button>
//     </div>

//     <ul class="list-users"></ul>

//============================================================================
//============================================================================

// Задача 7: Валідація та збереження даних у локальному сховищі
// Опис: Додай валідацію та збереження даних у локальному сховищі для форми додавання користувача.

// Умова:

// Валідуй дані форми (ім'я не повинно бути порожнім, вік має бути числом більше 0).
// Зберігай дані користувачів у локальному сховищі після додавання нового користувача.
// При завантаженні сторінки завантажуй дані користувачів з локального сховища та відображай їх на сторінці.
// const lSArrData = localStorage.setItem('usersArrData', JSON.stringify([]));

// const refs = {
//   form: document.querySelector('.box'),
//   userName: document.querySelector('#user-name'),
//   userAge: document.querySelector('#user-age'),
//   addUserBtn: document.querySelector('.btn-add'),
//   listUsers: document.querySelector('.list-users'),
//   sortUsersByAge: document.querySelector('.btn-sort'),
// };

// let usersParse = JSON.parse(localStorage.getItem('usersArrData')) ?? [];

// function renderUsers(arr) {
//   const markup = arr
//     .map(user => {
//       return `<li>${user.name} - ${user.age}</li>`;
//     })
//     .join('');

//   refs.listUsers.innerHTML = markup;
// }

// renderUsers(usersParse);

// refs.addUserBtn.addEventListener('click', onAddUserBtnClick);

// function onAddUserBtnClick(e) {
//   e.preventDefault();
//   const newUser = {};
//   const name = refs.userName.value.trim();
//   const age = Number(refs.userAge.value.trim());
//   if (name === '' || age <= 0 || isNaN(age)) {
//     alert`please zapolnite all inputs`;
//     return;
//   }

//   newUser.name = name;
//   newUser.age = age;
//   usersParse.push(newUser);

//   localStorage.setItem('usersArrData', JSON.stringify(usersParse));

//   refs.userName.value = '';
//   refs.userAge.value = '';

//   renderUsers(usersParse);
// }

// <div class="box">
//       <label for="user-name">Name:</label>
//       <input name="user-name" type="text" id="user-name" autofocus />

//       <label for="user-age">Age:</label>
//       <input name="user-age" type="number" min="1" max="99" id="user-age" />

//       <button type="button" class="btn-add">Add User</button>
//     </div>

//     <button type="button" class="btn-sort">Sort Users by Age</button>
//     <ul class="list-users"></ul>

//============================================================================
//============================================================================
// Задача про обробку даних користувача:
// Уявіть, що у вас є веб - форма, де користувачі можуть вводити свої дані, такі як ім'я, адреса електронної пошти та вік.
// Ваша задача - збирати ці дані, використовуючи асинхронну функцію, яка повертає проміс, який містить об'єкт з даними користувача.
// Потім зберіть ці об'єкти користувачів у масив та відобразіть їх на сторінці.

// const refs = {
//   form: document.querySelector('.user-form'),
//   userName: document.querySelector('#user-name'),
//   userEmail: document.querySelector('#user-email'),
//   userAge: document.querySelector('#user-age'),
//   submitBtn: document.querySelector('.#submit-btn'),
//   listOfUsers: document.querySelector('.user-list'),
// };

// refs.form.addEventListener('submit', onSubmitForm);

// const onSubmitForm = e => {
//   e.preventDefault();
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {}, 3000);
//   });
// };
// <div class="container">
//   <form id="user-form" class="user-form">
//     <label>
//       Name:
//       <input type="text" id="user-name" name="name" required autofocus />
//     </label>
//     <label>
//       Email:
//       <input type="email" id="user-email" name="email" required />
//     </label>
//     <label>
//       Age:
//       <input
//         type="number"
//         id="user-age"
//         name="age"
//         required
//         min="1"
//         max="120"
//       />
//     </label>
//     <button type="submit" id="submit-btn">
//       Submit
//     </button>
//   </form>
//   <ul id="user-list" class="user-list"></ul>
// </div>;
//==========================================================================
//==========================================================================
// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції
// function greet() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('hello world');
//     }, 2000);
//   }).then(console.log);
//   return promise;
// }

// const res = greet();

//===========================================================================
//  - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const promtRes = prompt('number plz');

// function resultPromt(num) {
//   const promise = new Promise((resolve, reject) => {
//     console.log(num);
//     // console.log(typeof num);
//     if (isNaN(num) || num === null) {
//       reject('error');
//     } else if (num % 2 === 0) {
//       setTimeout(() => {
//         resolve('even');
//       }, 1000);
//     } else {
//       setTimeout(() => {
//         resolve('odd');
//       }, 2000);
//     }
//   })
//     .then(console.log)
//     .catch(console.log);

//   return promise;
// }

// resultPromt(promtRes);
//====================================================
// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

// const refs = {
//   taskForm: document.querySelector('.task-form'),
//   listOfTasks: document.querySelector('.list-tasks'),
// };

// const STORAGE_KEY = 'data';
// let tasks = loadFromLocalStorage(STORAGE_KEY);
// renderTaskList(tasks);

// refs.taskForm.addEventListener('submit', onSubmitForm);
// refs.listOfTasks.addEventListener('click', onClickBtnRemove);

// function onSubmitForm(e) {
//   e.preventDefault();
//   const userInput = refs.taskForm.userTask.value.trim();
//   tasks.push(userInput);
//   renderTaskList(tasks);
//   saveToLS(tasks);
// }

// function renderTaskList(tasks) {
//   const markup = tasks
//     .map(
//       (task, index) =>
//         `<li class="list-item">${task}<button type="button" data-id="${index}">X</button></li>`
//     )
//     .join('');

//   refs.listOfTasks.innerHTML = markup;
// }

// function onClickBtnRemove(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const index = Number(e.target.dataset.id);
//   tasks = tasks.filter((task, idx) => {
//     return index !== idx;
//   });
//   renderTaskList(tasks);
//   saveToLS(tasks);
// }

// function saveToLS(data) {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// }

// function loadFromLocalStorage(key) {
//   return JSON.parse(localStorage.getItem(key)) || [];
// }

// <form action="" class="task-form">
//       <input id="user-task" name="userTask" type="text" />
//       <button id="add-btn" type="submit">add</button>
//     </form>

//     <ul class="list-tasks"></ul>

//===========================================================================

// const user = {
//   name: 'John Doe',
//   age: 30,
//   email: 'john.doe@example.com',
//   address: {
//     city: 'New York',
//     country: 'USA',
//   },
// };

// function getUsersData({ name, age, email, address: { city, country } }) {
//   return `name - ${name}\nage - ${age}\nemail - ${email}\n${country}, ${city}`;
// }

// const data = getUsersData(user);
// console.log(data);

//====================================================================
