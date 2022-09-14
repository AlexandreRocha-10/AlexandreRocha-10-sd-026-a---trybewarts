const loginBtn = document.querySelector('#login-button');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');

loginBtn.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
