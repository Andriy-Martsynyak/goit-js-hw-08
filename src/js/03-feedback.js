import throttle from 'lodash.throttle';

const form = document.querySelector('form');

const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

function setItemToLs(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItemFromLS(key) {
  let data = localStorage.getItem(key);
  try {
    data = JSON.parse(data);
  } catch {
    console.log('Error Parsing');
  }
  return data;
}

function loadDataFromLs() {
  const email = getItemFromLS('inputEmail');
  const message = getItemFromLS('inputMessage');

  inputEmail.value = email;
  inputMessage.value = message;
}

loadDataFromLs();

inputEmail.addEventListener('input', e => {
  const value = e.target.value;
  setItemToLs('inputEmail', value);
});

inputMessage.addEventListener('input', e => {
  const value = e.target.value;
  setItemToLs('inputMessage', value);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem('inputEmail')));
  console.log(JSON.parse(localStorage.getItem('inputMessage')));

  e.target.reset();
  localStorage.clear();
});
