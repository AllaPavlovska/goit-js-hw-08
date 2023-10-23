import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

// Відстежуємо подію input на полях форми
feedbackForm.addEventListener('input', () => {
  const feedbackFormData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  // Зберігаємо об'єкт з даними у локальне сховище
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormData));
}, false);

// Під час завантаження сторінки перевіряємо сховище
window.addEventListener('load', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');

  if (savedFormData) {
    // Якщо є збережені дані, розпаковуємо їх та заповнюємо поля форми
    const feedbackFormData = JSON.parse(savedFormData);
    emailInput.value = feedbackFormData.email;
    messageTextarea.value = feedbackFormData.message;
  }
});

// Під час сабміту форми очищуємо сховище та виводимо дані у консоль
feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');

  const feedbackFormData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  console.log('Form data submitted:', feedbackFormData);
});
