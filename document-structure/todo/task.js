const addBtn = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const taskRemove = document.querySelector('.task__remove');

taskInput.addEventListener('keydown', e => {
	
const taskList = document.querySelector('.tasks__list');
const text = taskInput.value;
if (e.key == 'Enter') {
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