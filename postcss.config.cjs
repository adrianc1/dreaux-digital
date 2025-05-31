// postcss.config.cjs
module.exports = {
	plugins: {
		// Use the new package for Tailwind's PostCSS plugin
		'@tailwindcss/postcss': {}, // <--- This is the correct way now
		autoprefixer: {},
	},
};
