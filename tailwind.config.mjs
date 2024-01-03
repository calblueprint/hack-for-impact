/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                background: "#F9F7F2",
                link: "#5084B3",
                gray: "#626262",
                "pastel-blue": "#808FDC",
                "pastel-red": "#DC8080",
                "light-gray": "#B2B2B2"
            }
        }
    },
    plugins: []
};
