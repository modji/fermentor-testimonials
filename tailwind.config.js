/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				lightGray: "hsl(0, 0%, 81%)",
				lightGrayishBlue: "hsl(210, 46%, 95%)",
				moderateViolet: "hsl(263, 55%, 52%)",
				veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
				veryDarkBlackishBlue: "hsl(219, 29%, 14%)",
				clsLightGray: "hsl(207,23%,91%)",
			},
			fontFamily: {
				barlow: ["Barlow Semi Condensed", "sans-serif"],
			},
			fontSize: {
				normal: "13px",
			},
		},
	},
	plugins: [],
};
