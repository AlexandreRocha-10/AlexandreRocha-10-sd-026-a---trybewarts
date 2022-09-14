const loginBtn = document.querySelector('#login-button');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');

loginBtn.addEventListener('click', () => {
  if (emailInput === 'tryber@teste.com' && passwordInput === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
});
