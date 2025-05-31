/** @type {import('tailwindcss').Config} */
module.exports = {
	// <--- MUST be 'module.exports ='
	content: [
		// THESE PATHS ARE CRUCIAL.
		// They tell Tailwind where to find your utility classes.
		// Adjust if your project structure is different.
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			// Add any custom theme extensions here.
			// You don't need anything specific for tailwindcss-motion here.
		},
	},
	plugins: [require('tailwindcss-motion')],
};
