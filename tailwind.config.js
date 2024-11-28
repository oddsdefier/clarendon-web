/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./components/ui/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				// pt_serif: ['PT Serif', 'sans-serif'],
				// dm_serif: ['DM Serif Display', 'serif'],
				astralaga: ['Astralaga', 'sans-serif'],
				universal_serif: ['Universal Serif', 'sans-serif'],
				manrope: ['Manrope', 'sans-serif'],
				geist: ['Geist Sans', 'sans-serif'],
				oswald: ['Oswald', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				clarc: {
					blue: '#15335f',
					gold: '#c9b163',
					white: '#fcfaee'
				},
				sdg: {
					'1': '#E5243B',
					'2': '#DDA83A',
					'3': '#4C9F38',
					'4': '#C5192D',
					'5': '#FF3A21',
					'6': '#26BDE2',
					'7': '#FCC30B',
					'8': '#A21942',
					'9': '#FD6925',
					'10': '#DD1367',
					'11': '#FD9D24',
					'12': '#BF8B2E',
					'13': '#3F7E44',
					'14': '#0A97D9',
					'15': '#56C02B',
					'16': '#00689D',
					'17': '#19486A',
				}

			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				spin: {
					to: { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'spin-slow-1': 'spin 60s linear infinite',
				'spin-slow-2': 'spin 120s linear infinite',
				'spin-slow-3': 'spin 180s linear infinite',
				'spin-slow-4': 'spin 240s linear infinite',
				'spin-slow-5': 'spin 300s linear infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
	plugins: [require('@tailwindcss/typography')]
}

