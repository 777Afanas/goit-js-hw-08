// В HTML есть разметка формы.Напиши скрипт который будет сохранять значения полей 
// в локальное хранилище когда пользователь что - то печатает.


// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
// в которых сохраняй текущие значения полей формы.  Пусть ключом для хранилища будет строка "feedback-form-state".
import throttle from 'lodash.throttle';   

const form = document.querySelector(".feedback-form");
const formData = {};
const STORAGE_KEY = "feedback-form-state";


form.addEventListener("input", throttle(onFeedbackInput, 500)); 
 onFeedbackPopulate();

function onFeedbackInput(e) {
    formData[e.target.name] = e.target.value; 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
};

// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные,
// заполняй ими поля формы.В противном случае поля должны быть пустыми. 

// function onFeedbackPopulate() {

//     // formData[e.target.name] = e.target.value;
//     // const savedMess = localStorage.getItem(STORAGE_KEY, JSON.parse(formData));
// const savedMess = localStorage.getItem(STORAGE_KEY);
//     // console.log(savedMess);

//     if (savedMess) {
//         console.log(savedMess);
//         form.value = JSON.parse(STORAGE_KEY);
//     }
// }

// При сабмите формы очищай хранилище и поля формы,
// а также выводи объект с полями email, message и текущими их значениями в консоль.

form.addEventListener("submit", onFeedbackSubmit); 

function onFeedbackSubmit(e) {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY); 
    e.currentTarget.reset();
};

// 
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   onFeedbackSubmit
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }



// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
// Для этого добавь в проект и используй библиотеку lodash.throttle.








//  form.addEventListener("input", throttle(onFeedbackInput, 500)); 

// // onFeedbackPopulate();

// function onFeedbackInput(event) {
//     const formElements = event.currentTarget.elements;
    
//     // const formElements = event.target.elements;
//     // console.log(formElements);

//     const email = formElements.email.value;
//     const message = formElements.message.value;

//     const data = {
//         email: email,
//         message: message, 
//     };  

//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); 
// }