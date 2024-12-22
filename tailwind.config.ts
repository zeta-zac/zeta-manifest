import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        flat: "5px 5px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        // sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        // mono: ['var(--font-geist-mono)', ...fontFamily.mono],
        didot: ["var(--font-didot)", "serif"],
        geist_mono: ["var(--font-geist-mono)", "monospace"],
        geist_sans: ["var(--font-geist-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
