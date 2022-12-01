/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html'
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
