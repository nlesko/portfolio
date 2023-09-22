/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ts}',
		'./src/components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ts}',
		'./src/layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ts}',
		'./src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ts}',
		'./src/styles/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ts}',
		'./src/templates/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ts}',
		'./src/utils/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ts}',
		'./src/views/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ts}',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ts}',
	],
	theme: {
		container: {
			center: true,
			screens: {
				'2xl': '1280px',
			}
		},
		extend: {
			colors: {
				"steel-blue": {
				  50: '#dff1ff',
				  100: '#c0dae9',
				  200: '#a1bfd2',
				  300: '#6890a9',
				  400: '#6890a9',
				  500: '#4f7d97',
				  600: '#426e86', // steele blue
				  700: '#335a6f',
				  800: '#26475a',
				  900: '#143242',
				}
			  }
		},
	},
	plugins: [],
}
