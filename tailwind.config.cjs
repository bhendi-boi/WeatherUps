/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.tsx", "./src/components/*.tsx"],
	theme: {
		extend: {
			colors: {
				background: "#e2e8f0",
				"dark-background": "#0f172a",
				"carousel-background": "#f8fafc",
				"dark-carousel-background": "#1e293b",
				text: "#030712",
				"dark-text": "#f9fafb",
			},
			fontFamily: {
				body: ["Roboto", "sans-serif"],
				title: ["Roboto", "serif"],
			},
		},
	},
	plugins: [],
};
