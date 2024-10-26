/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'moving':"moving 3000ms ease-in-out infinite alternate"
      },
      keyframes: {
        moving:{
          '0%':{transform:"scale(1) translateY(-80px)"},
          '100%':{transform:"scale(1.15) translateY(0px)"}
        },
      }
    },
  },
  plugins: [],
}


