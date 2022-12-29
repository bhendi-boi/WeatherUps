/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.tsx", "./src/components/*.tsx"],
	theme: {
		extend: {
			colors: {
				background: "#eee",
				"dark-background": "#0a1929",
			},
		},
	},
	plugins: [],
};
