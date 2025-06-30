let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

const saved = localStorage.getItem(localStorageKey);
if (saved) {
  formData = JSON.parse(saved);
  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
}

form.addEventListener('input', ev => {
  formData[ev.target.name] = ev.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', ev => {
  ev.preventDefault();
  const email = ev.target.email.value;
  const message = ev.target.message.value;
  if (email === '' || message === '') {
    return alert('Fill please all fields');
  }

  localStorage.removeItem(localStorageKey);
  console.log(formData);
  form.reset();
});
