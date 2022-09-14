const loginBtn = document.querySelector('#login-button');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');

loginBtn.addEventListener('click', () => {
  if (emailInput === null || passwordInput === null) {
    alert('Email ou senha inválidos');
  } else {
    alert('Olá, Tryber!');
  }
});
