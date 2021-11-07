module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  theme: {
    // fontFamily: {
    // NOTE: could customize order using font-body class defined below but using mono default for the moment
    //   body: [],
    // },
    typography: {
      default: {
        css: {
          // HighlightJS requires us to override TailwindCSS classes
          //
          // Uses Notion markdown css for inline code
          ':is(li, p) code': {
            backgroundColor: 'rgba(135,131,120,0.15)',
            borderRadius: '3px',
            padding: '0.2em 0.4em',
            color: '#EB5757',
          },
          // Removes back-ticks for inline code
          'code::before': false,
          'code::after': false,
          // Removes TailwindCSS styling for code block & customizes it
          pre: false,
          'pre code': false,
          code: {
            color: false,
            borderRadius: '5px',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
