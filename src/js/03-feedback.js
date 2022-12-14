
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
// в которых сохраняй текущие значения полей формы.  Пусть ключом для хранилища будет строка "feedback-form-state".
import throttle from 'lodash.throttle';   

const form = document.querySelector(".feedback-form");
const formData = {};
const STORAGE_KEY = "feedback-form-state"; 

form.addEventListener("input", throttle(onFeedbackInput, 500)); 
form.addEventListener("submit", onFeedbackSubmit); 
onFeedbackPopulate();

function onFeedbackInput(e) {
    formData[e.target.name] = e.target.value; 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
};

// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные,
// заполняй ими поля формы.В противном случае поля должны быть пустыми.  
function onFeedbackPopulate() {    
const savedMess = JSON.parse(localStorage.getItem(STORAGE_KEY));     
    if (savedMess) {
        form.email.value = savedMess.email || [];
        form.message.value = savedMess.message || [];               
    }
} 
// При сабмите формы очищай хранилище и поля формы,
// а также выводи объект с полями email, message и текущими их значениями в консоль.  
function onFeedbackSubmit(e) {
    e.preventDefault(); 
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));  
    localStorage.removeItem(STORAGE_KEY); 
    e.currentTarget.reset();          
};

// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. 
// Для этого добавь в проект и используй библиотеку lodash.throttle.


