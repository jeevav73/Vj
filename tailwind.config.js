/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          to: { opacity: "1" },
        },
        fadeUp: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        modelIn: {
          to: { transform: "translateX(-55%) translateY(0)", opacity: "1" },
        },
        scaleIn: {
          to: { transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        "fadeIn": "fadeIn 0.8s ease 0.1s forwards",
        "modelIn": "modelIn 1s cubic-bezier(0.16,1,0.3,1) 0.5s forwards",
        "fadeUp1": "fadeUp 0.8s ease 0.8s forwards",
        "fadeUp2": "fadeUp 0.8s ease 1s forwards",
        "leftIn": "fadeIn 0.9s ease 1.2s forwards",
        "socialIn": "fadeIn 0.9s ease 1.4s forwards",
        "locIn": "fadeIn 0.9s ease 1.4s forwards",
        "scaleIn": "scaleIn 0.1s ease forwards",
      },
    },
  },
  plugins: [],
}
