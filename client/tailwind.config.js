import {nextui} from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
		themes: {
			"caresle-theme": {
				extend: "dark",
				colors: {
					background: "#232323",
					foreground: "#c2c2c2",
					primary: {
						50: "#D1FBDE",
						100: "#D1FBDE",
						200: "#A5F7C6",
						300: "#74E8AF",
						400: "#4ED19E",
						500: "#1EB387",
						600: "#15997F",
						700: "#0F8075",
						800: "#096767",
						900: "#054E55",
						DEFAULT: "#1EB387",
						foreground: "#ffffff",
					},
					success: {
						50: "#E3FBD9",
						100: "#E3FBD9",
						200: "#C2F7B5",
						300: "#96E98B",
						400: "#6BD369",
						500: "#3CB744",
						600: "#2B9D3D",
						700: "#1E8337",
						800: "#136A30",
						900: "#0B572B",
						DEFAULT: "#3CB744",
						foreground: "#ffffff",
					},
					warning: {
						50: "#FFF8CD",
						100: "#FFF8CD",
						200: "#FFEF9B",
						300: "#FFE36A",
						400: "#FFD845",
						500: "#FFC507",
						600: "#DBA405",
						700: "#B78403",
						800: "#936702",
						900: "#7A5201",
						DEFAULT: "#FFC507",
						foreground: "#ffffff",
					},
					danger: {
						50: "#FDDBD4",
						100: "#FDDBD4",
						200: "#FBB1AA",
						300: "#F57D7E",
						400: "#EC5C6B",
						500: "#E02A4E",
						600: "#C01E4E",
						700: "#A1154B",
						800: "#810D45",
						900: "#6B0841",
						DEFAULT: "#E02A4E",
						foreground: "#ffffff",
					},
					secondary: {
						50: "#CFE9FE",
						100: "#CFE9FE",
						200: "#9FD0FD",
						300: "#6FB2F9",
						400: "#4A95F4",
						500: "#126AED",
						600: "#0D51CB",
						700: "#093CAA",
						800: "#052A89",
						900: "#031D71",
						DEFAULT: "#126AED",
						foreground: "#ffffff",
					}
				}
			}
		}
	})],
}
