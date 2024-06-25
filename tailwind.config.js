/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        "dark-primary": "rgb(211 188 253)",
        "dark-surface-tint": "rgb(211 188 253)",
        "dark-on-primary": "rgb(56 38 92)",
        "dark-primary-container": "rgb(79 61 116)",
        "dark-on-primary-container": "rgb(235 221 255)",
        "dark-secondary": "rgb(205 194 219)",
        "dark-on-secondary": "rgb(52 45 64)",
        "dark-secondary-container": "rgb(75 67 88)",
        "dark-on-secondary-container": "rgb(233 222 248)",
        "dark-tertiary": "rgb(240 183 197)",
        "dark-on-tertiary": "rgb(74 37 48)",
        "dark-tertiary-container": "rgb(100 59 70)",
        "dark-on-tertiary-container": "rgb(255 217 225)",
        "dark-error": "rgb(255 180 171)",
        "dark-on-error": "rgb(105 0 5)",
        "dark-error-container": "rgb(147 0 10)",
        "dark-on-error-container": "rgb(255 218 214)",
        "dark-background": "rgb(21 18 24)",
        "dark-on-background": "rgb(231 224 232)",
        "dark-surface": "rgb(21 18 24)",
        "dark-on-surface": "rgb(231 224 232)",
        "dark-surface-variant": "rgb(73 69 78)",
        "dark-on-surface-variant": "rgb(203 196 207)",
        "dark-outline": "rgb(148 143 153)",
        "dark-outline-variant": "rgb(73 69 78)",
        "dark-shadow": "rgb(0 0 0)",
        "dark-scrim": "rgb(0 0 0)",
        "dark-inverse-surface": "rgb(231 224 232)",
        "dark-inverse-on-surface": "rgb(50 47 53)",
        "dark-inverse-primary": "rgb(104 84 142)",
        "dark-primary-fixed": "rgb(235 221 255)",
        "dark-on-primary-fixed": "rgb(35 15 70)",
        "dark-primary-fixed-dim": "rgb(211 188 253)",
        "dark-on-primary-fixed-variant": "rgb(79 61 116)",
        "dark-secondary-fixed": "rgb(233 222 248)",
        "dark-on-secondary-fixed": "rgb(31 24 43)",
        "dark-secondary-fixed-dim": "rgb(205 194 219)",
        "dark-on-secondary-fixed-variant": "rgb(75 67 88)",
        "dark-tertiary-fixed": "rgb(255 217 225)",
        "dark-on-tertiary-fixed": "rgb(49 16 27)",
        "dark-tertiary-fixed-dim": "rgb(240 183 197)",
        "dark-on-tertiary-fixed-variant": "rgb(100 59 70)",
        "dark-surface-dim": "rgb(21 18 24)",
        "dark-surface-bright": "rgb(59 56 62)",
        "dark-surface-container-lowest": "rgb(15 13 19)",
        "dark-surface-container-low": "rgb(29 27 32)",
        "dark-surface-container": "rgb(33 31 36)",
        "dark-surface-container-high": "rgb(44 41 47)",
        "dark-surface-container-highest": "rgb(54 52 58)",
        "light-primary": "rgb(104 84 142)",
        "light-surface-tint": "rgb(104 84 142)",
        "light-on-primary": "rgb(255 255 255)",
        "light-primary-container": "rgb(235 221 255)",
        "light-on-primary-container": "rgb(35 15 70)",
        "light-secondary": "rgb(99 91 112)",
        "light-on-secondary": "rgb(255 255 255)",
        "light-secondary-container": "rgb(233 222 248)",
        "light-on-secondary-container": "rgb(31 24 43)",
        "light-tertiary": "rgb(126 82 93)",
        "light-on-tertiary": "rgb(255 255 255)",
        "light-tertiary-container": "rgb(255 217 225)",
        "light-on-tertiary-container": "rgb(49 16 27)",
        "light-error": "rgb(186 26 26)",
        "light-on-error": "rgb(255 255 255)",
        "light-error-container": "rgb(255 218 214)",
        "light-on-error-container": "rgb(65 0 2)",
        "light-background": "rgb(254 247 255)",
        "light-on-background": "rgb(29 27 32)",
        "light-surface": "rgb(254 247 255)",
        "light-on-surface": "rgb(29 27 32)",
        "light-surface-variant": "rgb(231 224 235)",
        "light-on-surface-variant": "rgb(73 69 78)",
        "light-outline": "rgb(122 117 127)",
        "light-outline-variant": "rgb(203 196 207)",
        "light-shadow": "rgb(0 0 0)",
        "light-scrim": "rgb(0 0 0)",
        "light-inverse-surface": "rgb(50 47 53)",
        "light-inverse-on-surface": "rgb(245 239 247)",
        "light-inverse-primary": "rgb(211 188 253)",
        "light-primary-fixed": "rgb(235 221 255)",
        "light-on-primary-fixed": "rgb(35 15 70)",
        "light-primary-fixed-dim": "rgb(211 188 253)",
        "light-on-primary-fixed-variant": "rgb(79 61 116)",
        "light-secondary-fixed": "rgb(233 222 248)",
        "light-on-secondary-fixed": "rgb(31 24 43)",
        "light-secondary-fixed-dim": "rgb(205 194 219)",
        "light-on-secondary-fixed-variant": "rgb(75 67 88)",
        "light-tertiary-fixed": "rgb(255 217 225)",
        "light-on-tertiary-fixed": "rgb(49 16 27)",
        "light-tertiary-fixed-dim": "rgb(240 183 197)",
        "light-on-tertiary-fixed-variant": "rgb(100 59 70)",
        "light-surface-dim": "rgb(222 216 224)",
        "light-surface-bright": "rgb(254 247 255)",
        "light-surface-container-lowest": "rgb(255 255 255)",
        "light-surface-container-low": "rgb(248 241 250)",
        "light-surface-container": "rgb(242 236 244)",
        "light-surface-container-high": "rgb(237 230 238)",
        "light-surface-container-highest": "rgb(231 224 232)",
      },
      fontSize: {
        "display-large": [
          "57px", {
            lineHeight: "64px",
            letterSpacing: "-0.25px",
            fontWeight: "400"
          }
        ],
        "display-medium": [
          "45px", {
            lineHeight: "52px",
            letterSpacing: "0px",
            fontWeight: "400"
          }
        ],
        "display-small": [
          "36px", {
            lineHeight: "44px",
            letterSpacing: "0px",
            fontWeight: "400"
          }
        ],
        "headline-large": [
          "32px", {
            lineHeight: "40px",
            letterSpacing: "0px",
            fontWeight: "400"
          }
        ],
        "headline-medium": [
          "28px", {
            lineHeight: "36px",
            letterSpacing: "0px",
            fontWeight: "400"
          }
        ],
        "headline-small": [
          "24px", {
            lineHeight: "32px",
            letterSpacing: "0px",
            fontWeight: "400"
          }
        ],
        "title-large": [
          "22px", {
            lineHeight: "28px",
            letterSpacing: "0px",
            fontWeight: "400"
          }
        ],
        "title-medium": [
          "16px", {
            lineHeight: "24px",
            letterSpacing: "0.15px",
            fontWeight: "400"
          }
        ],
        "title-small": [
          "14px", {
            lineHeight: "20px",
            letterSpacing: "0.1px",
            fontWeight: "400"
          }
        ],
        "body-large": [
          "16px", {
            lineHeight: "24px",
            letterSpacing: "0.5px",
            fontWeight: "400"
          }
        ],
        "body-medium": [
          "14px", {
            lineHeight: "20px",
            letterSpacing: "0.25px",
            fontWeight: "400"
          }
        ],
        "body-samll": [
          "12px", {
            lineHeight: "16px",
            letterSpacing: "0.4px",
            fontWeight: "400"
          }
        ],
        "lable-large-prominent": [
          "14px", {
            lineHeight: "20px",
            letterSpacing: "0.5px",
            fontWeight: "500"
          }
        ],
        "lable-large": [
          "14px", {
            lineHeight: "20px",
            letterSpacing: "0px",
            fontWeight: "400"
          }
        ],
        "lable-medium-prominent": [
          "12px", {
            lineHeight: "16px",
            letterSpacing: "0.5px",
            fontWeight: "700"
          }
        ],
        "lable-medium": [
          "12px", {
            lineHeight: "16px",
            letterSpacing: "0.5px",
            fontWeight: "500"
          }
        ],
        "lable-small": [
          "11px", {
            lineHeight: "16px",
            letterSpacing: "0.5px",
            fontWeight: "500"
          }
        ],
      },
    },
  },
  plugins: [],
}

