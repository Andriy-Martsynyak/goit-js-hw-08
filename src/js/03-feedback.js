import throttle from 'lodash.throttle';

const form = document.querySelector('form');

const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

let feedbackForm = {
  email: '',
  message: '',
};

loadDataFromLS();

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

function loadDataFromLS() {
  const value = getItemFromLS('feedback-form-state');

  if (!value) {
    return;
  } else {
    inputEmail.value = value.email;
    inputMessage.value = value.message;
    feedbackForm.email = inputEmail.value;
    feedbackForm.message = inputMessage.value;
  }
}

function onEmailChange(e) {
  feedbackForm.email = e.target.value;
  setItemToLs('feedback-form-state', feedbackForm);
}

function onMessageChange(e) {
  feedbackForm.message = e.target.value;
  setItemToLs('feedback-form-state', feedbackForm);
}

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.clear();
  console.log(feedbackForm);

  form.reset();
}

inputEmail.addEventListener('input', throttle(onEmailChange, 500));
inputMessage.addEventListener('input', throttle(onMessageChange, 500));
form.addEventListener('submit', onFormSubmit);
