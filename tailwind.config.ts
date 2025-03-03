import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				portfolio: {
					'blue': '#0077ED',
					'light-blue': '#E6F2FF',
					'dark': '#1A1F2C',
					'light': '#F5F5F7',
					'gray': '#8E9196',
					'light-gray': '#F2F2F2',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'fade-up': {
					from: { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: { 
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'slide-in-right': {
					from: { 
						opacity: '0',
						transform: 'translateX(20px)'
					},
					to: { 
						opacity: '1',
						transform: 'translateX(0)'
					},
				},
				'soft-bounce': {
					'0%, 100%': { 
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-15px) rotate(5deg)'
					}
				},
				'float-delayed': {
					'0%, 100%': { 
						transform: 'translateY(0) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-10px) rotate(-5deg)'
					}
				},
				'slow-pulse': {
					'0%, 100%': { 
						opacity: '0.1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.2',
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-up': 'fade-up 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'soft-bounce': 'soft-bounce 3s infinite ease-in-out',
				'delayed-fade-up': 'fade-up 0.5s ease-out 0.2s forwards',
				'long-delayed-fade-up': 'fade-up 0.5s ease-out 0.4s forwards',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float-delayed 7s ease-in-out infinite',
				'slow-pulse': 'slow-pulse 4s ease-in-out infinite',
			},
			fontFamily: {
				sans: [
					'SF Pro Display',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif'
				],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
