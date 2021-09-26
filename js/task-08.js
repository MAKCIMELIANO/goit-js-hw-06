// Напиши скрипт управления формой логина.

const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);

  event.currentTarget.reset();
}
