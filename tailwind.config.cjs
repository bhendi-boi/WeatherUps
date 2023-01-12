/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.tsx", "./src/components/*.tsx"],
	theme: {
		extend: {
			colors: {
				background: "#e8ebf2",
				"dark-background": "#0a1929",
			},
		},
	},
	plugins: [],
};
