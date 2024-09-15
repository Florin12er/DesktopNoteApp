/** @type {import('tailwindcss').Config} */

const { slate } = require('@radix-ui/colors')
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          1: slate.slate1,
          2: slate.slate2,
          3: slate.slate3,
          4: slate.slate4,
          5: slate.slate5,
          6: slate.slate6,
          7: slate.slate7,
          8: slate.slate8,
          9: slate.slate9,
          10: slate.slate10,
          11: slate.slate11,
          12: slate.slate12
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
