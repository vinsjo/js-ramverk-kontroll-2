import { v4 as uuidv4 } from 'uuid';

function initTask(inputText) {
	return {
		id: uuidv4(),
		text: inputText,
		completed: false,
	};
}

export { initTask };
