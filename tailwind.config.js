/** @type {import('tailwindcss').Config}*/
export default {
    cotent:["./index.html",".src/**/*.{js,ts,jsx,tsx}"],
    theme:{
        extend:{
            colors:{
                primary:" #1182c5",
                secondary:"#2aa6df",
                dark:"#1e1e1e",
                light: "#f5f5f5"
                }
            container: {
                center: true,
                padding:{
                    DEFAULT: "1rem",
                    sm: "2rem",
                   
                }
            }
        },
    },
    plugins:[],
};