<script setup>
import TodoList from './components/TodoList.vue';
</script>

<template>
	<TodoList />
</template>

<style>
:root {
	--main-font: 'Signika Negative', sans-serif;
	--mono-font: 'IBM Plex Mono', monospace;

	--ui-bg: rgb(240, 240, 240);
	--ui-border: rgb(130, 130, 130);
	--ui-border-radius: 3px;
	--ui-bg-active: white;
	--ui-transition: background 0.1s ease, color 0.1s ease;

	--container-bg: white;
	--container-border-radius: 10px;
	--container-padding: 1rem;

	--color-complete: rgb(0, 130, 9);
	--color-delete: rgb(240, 50, 25);
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	width: 100%;
	height: 100%;
	min-height: 100vh;
	font-family: var(--main-font);
	font-size: 1rem;
	background-color: rgb(230, 230, 230);
	padding: 2rem 1rem;
}

#app {
	width: 100%;
	max-width: 75ch;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1.5rem;
	gap: 1rem;
	background: white;
	border-radius: 10px;
}
</style>
