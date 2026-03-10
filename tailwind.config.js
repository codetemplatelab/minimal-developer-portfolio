/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f7f8fa',
        surface: '#ffffff',
        line: '#e2e8f0',
        ink: '#0f172a',
        muted: '#475569',
        accent: '#111827',
        soft: '#f1f5f9',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        body: ['"Manrope"', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0 12px 36px -16px rgba(15, 23, 42, 0.2)',
      },
    },
  },
  plugins: [],
}
