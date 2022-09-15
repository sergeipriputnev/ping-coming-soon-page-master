const email = document.querySelector('input');
const submit = document.querySelector('button');
const form = document.querySelector('form');
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const warnMessage = document.querySelector('.warn-message');
const input = document.querySelector('input');



function checkFunc(e){
  e.preventDefault();
  if (email.value.match(validEmail)){
    email.value = '';
    warnMessage.classList.add('hidden');
    input.classList.remove('red');
  }
  else if (email.value == ''){
    warnMessage.textContent = 'Email cannot be empty';
    warnMessage.classList.remove('hidden');
    input.classList.add('red');
  }
  else {warnMessage.textContent = 'Please provide a valid email address';
  warnMessage.classList.remove('hidden');
  input.classList.add('red');}
}


form.addEventListener('submit', checkFunc);


