/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F5F0',
        'cream-deep': '#FAF8F3',
        beige: '#EDEAE2',
        ink: '#161616',
        'ink-soft': '#1A1A1A',
        charcoal: '#1E1E1C',
        'warm-grey': '#6B6B63',
        'warm-grey-light': '#9A9A90',
        lime: '#D4E84C',
        'lime-soft': '#E4EC8E',
        'lime-pale': '#EBEFB0',
        'card-border': '#EAEAE5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.08)',
        lift: '0 8px 30px rgba(0,0,0,0.06)',
      },
      maxWidth: {
        content: '1200px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
