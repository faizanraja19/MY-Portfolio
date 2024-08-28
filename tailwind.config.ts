import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
fontFamily: {
  logo:["Oleo Script" , "system-ui"],
  primary:["poppins" , "sans-serif"]
}
}
  },
  plugins: [],
} 


export default config