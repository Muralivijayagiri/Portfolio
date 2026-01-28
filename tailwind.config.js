/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    900: '#0c4a6e',
                }
            },
            keyframes: {
                'breathing-shadow': {
                    '0%, 100%': { boxShadow: '0 0 15px -3px rgba(14, 165, 233, 0.4)' },
                    '50%': { boxShadow: '0 0 30px 5px rgba(14, 165, 233, 0.6)' },
                }
            },
            animation: {
                'breathing-shadow': 'breathing-shadow 4s ease-in-out infinite',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        }
    },
    plugins: [],
}
