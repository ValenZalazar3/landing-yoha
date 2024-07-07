/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {boxShadow: {
			'up-green': '0 -2px 10px 0px rgba(0, 230, 118, 0.7)',
			'up-green-hover': '0 -12px 20px -6px rgba(0, 230, 118, 0.9)',
		  },},
	},
	plugins: [require('flowbite/plugin')],
}
