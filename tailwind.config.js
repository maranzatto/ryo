/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#E3E8F7", // muito claro
                    75: "#B8C6E9", // claro
                    100: "#3B5BA1", // azul médio
                    200: "#576FB5",
                    300: "#4A8AA3",
                    400: "#2F7D91",
                    500: "#1F897A",
                    600: "#159373",
                    700: "#0E8C6A", // escuro
                    800: "#0F9E86", // seu valor original
                    900: "#13E0AD", // mais saturado/brilhante
                },
                secondary: "#F59E0B",
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
