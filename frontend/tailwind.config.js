/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
  extend: {
      colors: {
        // Backgrounds
        dark: '#1f222b',       // main background
        darkSecondary: '#22252e', // secondary sections
        card: '#292c35',       // cards, panels
        darkGray: '#2a2d36',   // subtle dividers

        // Text
        textPrimary: '#ffffff',  // main text
        textSecondary: '#c9c9cc', // muted text

        // Accent
        accent: '#ffcc00',     // yellow (buttons, highlights, rings)
        accentDark: '#e6b800', // darker yellow shade for hover

      }
    },
  },
  plugins: [],
}

