import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        "sky": "#71CED0",
        "light-black": "#454345",
        "dark-gray":"#232224"
      },
      fontSize: {
        "custom-6xl": "64.09px",
      },
      lineHeight: {
        "custom-sm": "21px",
        "custom-md": "24.2px",
        "custom-5xl": "58.09px",
        "custom-6xl": "77.56px"
      },
    },
  },
  plugins: [],
} satisfies Config;
