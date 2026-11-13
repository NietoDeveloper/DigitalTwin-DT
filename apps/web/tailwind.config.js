/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#D4AF37', gold: '#D4AF37', cyan: '#00D4FF',
        'bg-base': '#0A0A0F', 'bg-surface': '#12121A', 'bg-elevated': '#18181F', 'bg-line': '#1E1E2E',
        gainsboro: '#DCDCDC',
        'status-ok': '#22C55E', 'status-warn': '#FB923C', 'status-info': '#38BDF8',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], mono: ['"JetBrains Mono"', 'monospace'] },
    },
  },
  plugins: [],
};
