// відправлення форми form.login-form повинна відбуватися за подією
// submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з
// попередженням про те, що 'All form fields must be filled in'.
// Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення
// полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення —
// відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до
// елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і
// очисти значення полів форми методом reset.

const refs = {
  loginForm: document.querySelector('.js-login-form'),
};

const onLoginFormSubmit = e => {
  e.preventDefault();

  //   const formData = {
  //     email: refs.loginForm.elements.email.value.trim(),
  //     password: refs.loginForm.elements.password.value.trim(),
  //   };
  const formData = {
    [refs.loginForm.elements.email.name]:
      refs.loginForm.elements.email.value.trim(),
    [refs.loginForm.elements.password.name]:
      refs.loginForm.elements.password.value.trim(),
  };

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);

  refs.loginForm.reset();
};

refs.loginForm.addEventListener('submit', onLoginFormSubmit);
