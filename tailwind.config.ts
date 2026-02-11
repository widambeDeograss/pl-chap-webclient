import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#135bec",
                "background-light": "#f6f6f8",
                "background-dark": "#101622",
                "surface-dark": "#161e2c",
                "border-dark": "#232f48",
                "status-green": "#22c55e",
                "status-blue": "#135bec",
                "status-red": "#ef4444",
                "card-dark": "#151921",
            },
            fontFamily: {
                display: ["var(--font-public-sans)"],
                sans: ["var(--font-public-sans)"],
            },
            backgroundImage: {
                'heatmap-gradient': 'radial-gradient(circle, rgba(19, 91, 236, 0.4) 0%, rgba(19, 91, 236, 0) 70%)',
                'heatmap-hotspot': 'radial-gradient(circle, #f97316 0%, rgba(249, 115, 22, 0) 70%)',
            }
        },
    },
    plugins: [],
};
export default config;
