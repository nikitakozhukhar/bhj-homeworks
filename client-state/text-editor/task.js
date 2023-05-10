const area = document.getElementById('editor');
const clearBtn = document.querySelector('.clear_btn');

area.value = localStorage.getItem('area');

area.oninput = () => {
  localStorage.setItem('area', area.value)
};

clearBtn.addEventListener('click', () => {
  localStorage.removeItem('area');
  area.value=''
})
