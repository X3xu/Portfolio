/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F7F6',
        'bg-card': '#FFFFFF',
        'bg-subtle': '#EFEFED',
        ink: '#111111',
        'ink-2': '#444444',
        muted: '#555555',
        border: '#E3E3E1',
        accent: '#0062CC',
        'accent-hover': '#0051AA',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        container: '1040px',
      },
    },
  },
}
