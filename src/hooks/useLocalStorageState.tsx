import { useState, useEffect } from "react";

// a hook which works same as state but also stores the value in local storage
// props: key : key which you want to pass in setting local storage
//              use signIndata for storing data state which is in signIn page
//        initialValue : initial value which you want to set (same as useState)
const useLocalStorageState = (key: string, initialValue: any) => {
	const [value, setValue] = useState(() => {
		return getSavedValue(key, initialValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
};

const getSavedValue = (key: string, initialValue: any) => {
	const savedValue = JSON.parse(localStorage.getItem(key) || "");
	if (savedValue) return savedValue;
	if (initialValue instanceof Function) return initialValue();
	return initialValue;
};

export default useLocalStorageState;
