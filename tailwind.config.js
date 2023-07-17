/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  container: {
		center: true,
		padding: "1.2rem",
		screens: {
			xs: "430px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1460px",
		},
	},
	theme: {
		screens: {
			xs: "430px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1460px",
		},
	},
  plugins: [],
}