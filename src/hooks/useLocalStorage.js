import { ref } from 'vue';

/**
 * @param {String} key
 * @param {any} value
 */
function setStorageItem(key, value) {
	try {
		if (!key) throw new Error(`Invalid local storage key: ${key}`);
		localStorage.setItem(
			key,
			typeof value === 'string' ? value : JSON.stringify(value)
		);
		return value;
	} catch (e) {
		console.error(e);
		return null;
	}
}
/**
 * @param {String} key
 */
function getStorageItem(key) {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (e) {
		console.error(e);
		return null;
	}
}

function useLocalStorage(key, initialValue = []) {
	const data = ref(getStorageItem(key) || initialValue);

	function updateData(value) {
		data.value = setStorageItem(key, value) || [];
	}

	return [data, updateData];
}

export default useLocalStorage;
