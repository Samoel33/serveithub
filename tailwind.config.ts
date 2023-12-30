import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      maxWidth: {
        "md-s": "75ch",
        "lg-s": "100ch",
      },
      keyframes: {
        "up-down": {
          from: { transform: "translateY(-2px)" },
          to: { transform: "translateY(0)" },
        },
        "open-nav": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "close-nav": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "up-down": "up-down 1.5s ease-in-out infinite",
        "open-nav": "open-nav 0.8s ease-in-out 1",
        "close-nav": "close-nav 0.8s ease-out 1",
      },
    },
  },
  plugins: [],
};
export default config
