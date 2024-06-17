/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            width: {
                80: "20rem",
                100: "24rem",
            },
            height: {
                125: "32rem",
            },
            boxShadow: {
                "card-shadow": "8px 8px 0px 0px rgb(0, 0, 0)",
            },
        },
    },
    plugins: [],
};
