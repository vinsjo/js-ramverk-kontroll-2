<script setup>
import { ref } from 'vue';
import { initTask } from '../utils/initTask';
import useLocalStorage from '../hooks/useLocalStorage';
import { CheckIcon, DeleteIcon } from './icons';

const input = ref('');
const [tasks, setTasks] = useLocalStorage('todo-list-stored-tasks', []);

function onSubmit(e) {
	e.preventDefault();
	if (!input.value.length) return;
	setTasks([...tasks.value, initTask(input.value)]);
	input.value = '';
}
function onDelete(task) {
	if (!Array.isArray(tasks.value)) return;
	setTasks(tasks.value.filter(t => t !== task));
}
function toggleComplete(task) {
	task.completed = !task.completed;
}
</script>

<template>
	<form @submit="onSubmit">
		<input type="text" v-model="input" required />
		<button type="submit">Add Task</button>
	</form>
	<ul>
		<li
			v-for="task in tasks"
			:key="task.id"
			:class="{ task: true, completed: task.completed }"
		>
			{{ task.text }}
			<div class="button-container">
				<button
					type="button"
					@click="toggleComplete(task)"
					class="task-btn complete"
				>
					<CheckIcon class="icon" />
				</button>
				<button
					type="button"
					@click="onDelete(task)"
					class="task-btn delete"
				>
					<DeleteIcon class="icon" />
				</button>
			</div>
		</li>
	</ul>
</template>

<style scoped>
ul {
	list-style: none;
	width: 100%;
}

.task {
	width: 100%;
	font-family: var(--mono-font);
	font-size: 1.25rem;
	line-height: 160%;
	margin: 1rem auto;
	padding: 0.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-transform: capitalize;
	position: relative;
	border-bottom: 1px solid var(--ui-border);
}

.task.completed {
	opacity: 0.6;
	text-decoration: 0.15em line-through;
	text-decoration-skip-ink: none;
}

form {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr auto;
	grid-template-rows: 1fr;
	justify-items: center;
	align-items: center;
}

form button,
form input {
	display: block;
	height: 3rem;
	width: 100%;
	padding: 0.5rem 1rem;
	font-size: 1.2rem;
	outline: none;
}

form input {
	font-family: var(--mono-font);
	border: 1px solid var(--ui-border);
	background: var(--ui-bg);
	transition: var(--ui-transition);
	border-radius: var(--ui-border-radius) 0 0 var(--ui-border-radius);
	border-right: none;
	outline: none;
}

form input:focus {
	background: var(--ui-bg-active);
}

form button {
	border-radius: 0 var(--ui-border-radius) var(--ui-border-radius) 0;
}

button {
	border-style: solid;
	border-radius: var(--ui-border-radius);
	outline: none;
	transition: var(--ui-transition);
	font-size: 1.2rem;
	font-weight: 600;
	padding: 0.5em 1em;
	border: 1px solid var(--ui-border);
	background: var(--ui-bg);
	transition: var(--ui-transition);
}

.button-container {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	position: relative;
	z-index: 5;
}
.task-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid black;
	background: transparent;
	width: 2.5em;
	height: 2.5em;
	padding: 5px;
	border-radius: 50%;
}

.icon {
	fill: black;
	height: 100%;
	width: auto;
}

.task.completed .task-btn.complete {
	border-color: var(--color-complete);
}

.task:not(.completed) .task-btn.complete .icon {
	opacity: 0;
}

.task.completed .task-btn.complete .icon {
	fill: var(--color-complete);
}

.task-btn,
.icon {
	transition-property: opacity, border-color, fill;
	transition-duration: 0.15s;
	transition-timing-function: ease;
}

@media (hover: hover) {
	.task-btn.delete:hover {
		border-color: var(--color-delete);
	}
	.task-btn.delete:hover .icon {
		fill: var(--color-delete);
	}
	.task-btn.complete:hover {
		border-color: var(--color-complete);
	}
	.task-btn.complete:hover .icon {
		opacity: 1;
	}

	button:not(:disabled):hover {
		cursor: pointer;
	}
	button:not(.task-btn):hover {
		color: var(--ui-border);
		background: var(--ui-bg-active);
	}
}
</style>
