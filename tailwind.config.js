/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        large: "80%",
        1366: "1095px",
        tablet: "880px",
      },
      backgroundImage: {
        "full-bg": "url('/src/assets/images/BG-Image.png')",
        "tech-bg": "url('/src/assets/images/Techno.png')",
        "soon-bg": "url('/src/assets/images/Coming Soon.png')",
        "tab-bg": "url('/src/assets/images/tab.png')",
        "mobile-bg": "url('/src/assets/images/bg-mobile.png')",
        Mobile: "url('/src/assets/images/MobileBackground.png')",
        Power: "url('/src/assets/images/PowerBackground.png')",
        Laptop: "url('/src/assets/images/LaptopBackground.png')",
        Gaming: "url('/src/assets/images/GamingBackground.png')",
        Headphone: "url('/src/assets/images/HeadphoneBackground.png')",
        Smartwatch: "url('/src/assets/images/SmartwatchBackground.png')",
        Fitness: "url('/src/assets/images/FitnessBackground.png')",
        Major: "url('/src/assets/images/MajorBackground.png')",
        About: "url('/src/assets/images/AboutBackground.png')",
        Contact: "url('/src/assets/images/ContectBackground.png')",
        "open-bg": "url('/src/assets/images/Background.png')",
        "close-bg": "url('/src/assets/images/Card.png')",
      },
      backgroundClip: {
        text: "text", // Add this line
      },
      dropShadow: {
        "3xl": "0 4px 84px rgba(0, 0, 0, 0.25)",
        "4xl": "0px 0px 100px rgba(0, 0, 0, 0.15)",
        "5xl": "0px 4.979px 29.872px rgba(0, 0, 0, 0.25)",
        header: "0px 7px 14px 0px #00000014",
      },
      boxShadow: {
        "6xl": "-11px -4px 11px 20px #f9f9f9",
      },
      screens: {
        s: "320px",

        sm: "580px",

        md: "680px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",

        "3xl": "1980px",

        "4xl": "2570px",
      },
    },
  },
  plugins: [],
};
