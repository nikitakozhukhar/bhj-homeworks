const addBtn = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const taskRemove = document.querySelector('.task__remove');
const taskList = document.querySelector('.tasks__list');

taskInput.addEventListener('keydown', e => {

const text = document.getElementById('task__input').value;

if (e.key == 'Enter' && text) {

	taskList.innerHTML = `
	<div class="task">
		<div class="task__title">
			${text}
		</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
	`
}
})

document.onclick = e => {
	if (e.target.classList.contains('task__remove')) {
		taskList.remove();
	}
}


	

// taskRemove.addEventListener('click', () => {
// 	const taskList = document.querySelector('.tasks__list');
// 	taskList.innerHTML = ``
// })













// addBtn.addEventListener('click', e => {
// const taskInput = document.getElementById('task__input');
// const text = taskInput.value;
// const taskList = document.querySelector('.tasks__list');
// console.log(taskList)

// taskList.innerHTML = [`
// <div class="task">
//     <div class="task__title">
//         ${text}
//     </div>
//     <a href="#" class="task__remove">&times;</a>
// </div>
// `]
// })