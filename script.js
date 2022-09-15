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

const unchecked = () => {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

agreement.addEventListener('click', unchecked);
unchecked();

const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

textArea.addEventListener('input', (e) => {
  const caracter = e.target;
  const count = 500 - caracter.value.length;
  counter.innerText = count;
});

const form = document.querySelector('#evaluation-form');
const formData = document.querySelector('#form-data');

const createElement = (e) => {
  const newDiv = document.createElement('div');
  newDiv.innerText = e;
  formData.appendChild(newDiv);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = new FormData(form).get('name');
  const lastname = new FormData(form).get('lastname');
  const email = new FormData(form).get('email');
  const house = new FormData(form).get('house');
  const family = new FormData(form).get('family');
  const subjects = new FormData(form).getAll('subject');
  const rate = new FormData(form).get('rate');
  const feedback = new FormData(form).get('feedback');
  createElement(`Nome: ${name} ${lastname}`);
  createElement(`Email: ${email}`);
  createElement(`Casa: ${house}`);
  createElement(`Família: ${family}`);
  createElement(`Matérias: ${subjects.join(', ')}`);
  createElement(`Avaliação: ${rate}`);
  createElement(`Observações: ${feedback}`);
  form.style.display = 'none';
  formData.style.display = 'block';
});
