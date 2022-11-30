module.exports = {
    plugins: [
        require('postcss-import')({
            path: ["css"]
        }),
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
//      ...(process.env.JEKYLL_ENV == "production"
//        ? [require('cssnano')({ preset: 'default' })]
//        : [])
    ]
}