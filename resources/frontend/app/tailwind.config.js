module.exports = {
    theme: {
        extend: {}
    },
    variants: {},
    plugins: [require("@tailwindcss/custom-forms")],
    purge: {
        enabled: process.env.NODE_ENV === "production",
        content: ["./public/**/*.html", "./src/**/*.vue"]
    }
};
