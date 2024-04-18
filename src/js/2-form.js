const formRef = document.querySelector('.feedback-form');

const FORM_KEY_LS = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const formDataFromLS = JSON.parse(localStorage.getItem(FORM_KEY_LS));

if (formDataFromLS) {
  formData.email = formRef.elements.email.value = formDataFromLS.email;
  formData.message = formRef.elements.message.value = formDataFromLS.message;
}

const handleInput = event => {
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  formData.email = email;
  formData.message = message;

  localStorage.setItem(FORM_KEY_LS, JSON.stringify(formData));
};

const handleSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem(FORM_KEY_LS);
};

formRef.addEventListener('input', handleInput);
formRef.addEventListener('submit', handleSubmit);
