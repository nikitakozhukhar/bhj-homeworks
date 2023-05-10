const signinBtn = document.querySelector('#signin__btn');

const url = 'https://students.netoservices.ru/nestjs-backend/auth';

const xhr = new XMLHttpRequest();

signinBtn.addEventListener('click', e => {
  e.preventDefault();
  const form = document.querySelector('#signin__form');
  const formData = new FormData();

  formData.append('login', form.login.value);
  formData.append('password', form.password.value);

  xhr.responseType = 'json'

  xhr.onload = () => {
    if (xhr.status >= 400) {
      return
    }

    if (xhr.response.success === false) {
      return 'Неверный логин/пароль'
    }

    const user = xhr.response.user_id;

  }

  xhr.open('POST', url, true);
  xhr.send(formData);
})

