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
        "custom-xsm": "10px",
        "custom-sm": "21px",
        "custom-2sm": "32px",
        "custom-md": "34px",
        "custom-xmd": "35px",
        "custom-2md": "44px",
        "custom-lg": "49px",
        "custom-xl": "76px",
        "custom-2xl": "80px",
        "custom-6xl": "64.09px",
      },
      lineHeight: {
        "custom-sm": "21px",
        "custom-md": "24.2px",
        "custom-3sm": "40.22px",
        "custom-xsm": "44px",
        "custom-5xl": "58.09px",
        "custom-6xl": "77.56px"
      },
    },
  },
  plugins: [],
} satisfies Config;
