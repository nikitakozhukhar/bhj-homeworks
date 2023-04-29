const taskAdd = document.getElementById('tasks__add');
const taskList = document.querySelector('.tasks__list');

taskAdd.addEventListener('click', e => {
e.preventDefault();

const taskInput = document.getElementById('task__input');
const text = taskInput.value;

if (text.trim()) {

	taskList.insertAdjacentHTML('afterend', `
	<div class="task">
		<div class="task__title">
			${text}
		</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
	`);
}
taskInput.value = '';
})

document.onclick = e => {
	if (e.target.classList.contains('task__remove')) {
		e.target.closest('.task').remove()
		// taskList.remove();
	}
}