const loginBtn = document.querySelector('#login-button');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

loginBtn.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const counter = document.getElementById('counter');
const textArea = document.getElementById('feedback');

textArea.addEventListener('input', () => {
  if (textArea.value === null) {
    let count = 0;
    count += 1;
    counter.innerText -= count;
  }
});

const unchecked = () => {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

agreement.addEventListener('click', unchecked);
unchecked();
