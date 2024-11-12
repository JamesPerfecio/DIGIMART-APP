/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<components>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fthin: ["FiraSansCondensed-Thin", "sans-serif"],
        fextralight: ["FiraSansCondensed-ExtraLight", "sans-serif"],
        flight: ["FiraSansCondensed-Light", "sans-serif"],
        fregular: ["FiraSansCondensed-Regular", "sans-serif"],
        fmedium: ["FiraSansCondensed-Medium", "sans-serif"],
        fsemibold: ["FiraSansCondensed-SemiBold", "sans-serif"],
        fbold: ["FiraSansCondensed-Bold", "sans-serif"],
        fpextrabold: ["FiraSansCondensed-ExtraBold", "sans-serif"],
        fblack: ["FiraSansCondensed-Black", "sans-serif"],
      },
    },
  },
  plugins: ["nativewind/babel"],
}
