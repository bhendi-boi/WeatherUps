import { useState, useEffect } from "react";

type useThemeReturnTypes = {
	theme: string;
	toggleTheme: () => void;
};

const useTheme = (): useThemeReturnTypes => {
	const prevTheme = localStorage.getItem("theme");
	const [theme, setTheme] = useState(() => {
		if (prevTheme) {
			return prevTheme;
		}
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});

	useEffect(() => {
		const root = window.document.documentElement;
		if (theme === "dark") {
			root.classList.remove("light");
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
			root.classList.add("light");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};
	return {
		theme,
		toggleTheme,
	};
};

export default useTheme;
