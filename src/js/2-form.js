const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);

function onFormInput() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const data = { email, message };
  saveToLS(STORAGE_KEY, data);
}
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const trimEmail = form.elements.email.value.trim();
  const trimMessage = form.elements.message.value.trim();
  if (trimEmail && trimMessage) {
    const data = { email: trimEmail, message: trimMessage };
    console.log(data);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    alert('Check input!');
  }
}
restoreData();
function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function loadFromLS(key) {
  const zip = localStorage.getItem(key);
  try {
    const data = JSON.parse(zip);
    return data;
  } catch {
    return null;
  }
}
function restoreData() {
  const objInput = loadFromLS(STORAGE_KEY) || {};
  form.elements.email.value = objInput.email || '';
  form.elements.message.value = objInput.message || '';
}
