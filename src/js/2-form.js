const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onFormInput);

function onFormInput() {
  // console.log(form.elements);
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const data = { email, message };
  saveToLS(STORAGE_KEY, data);
}
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  if (form.elements.email.value && form.elements.message.value) {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const data = { email, message };
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
