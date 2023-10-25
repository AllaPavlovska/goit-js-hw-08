
// import throttle from 'lodash.throttle';
// const form = document.querySelector('.feedback-form');
// const KEY = 'feedback-form-state';
// let feedbackData = {};
// function saveToLocalStorage(e) {
//   feedbackData[e.target.name] = e.target.value.trim();
//   localStorage.setItem(KEY, JSON.stringify(feedbackData));
// }
// function loadFromLocalStorage() {
//   try {
// const savedData = localStorage.getItem(KEY);
//     if (!savedData) return;
//     feedbackData = JSON.parse(savedData);
//     Object.entries(feedbackData).forEach(([key, val]) => {
//       form.elements[key].value = val;
//     });
//   } catch (error) {
// console.log(error.message);
//   }
//   }
// function handleSubmit(event) {
//   event.preventDefault();
//   const feedbackData = {
//     email: emailInput.value,
//     message: messageTextarea.value,
//   };
//   console.log(feedbackData);
//   localStorage.removeItem(KEY);
//   emailInput.value = '';
//   messageTextarea.value = '';
// }
// const updateLocalStorage = throttle(saveToLocalStorage, 500);
// form.addEventListener('input', updateLocalStorage);
// form.addEventListener('submit', handleSubmit);
// window.addEventListener('load', loadFromLocalStorage);




import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const { email, message } = feedbackForm;
fillForm();
feedbackForm.addEventListener('input', throttle(saveFormData, 500));
feedbackForm.addEventListener('submit', handleSubmit);
function saveFormData() {
        const formData = { email: email.value, message: message.value };
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
function handleSubmit(e) {
    e.preventDefault();
    const formData = { email: email.value, message: message.value };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
}
function fillForm() {
    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formData) {
        email.value = formData.email;
        message.value = formData.message;
    }
}