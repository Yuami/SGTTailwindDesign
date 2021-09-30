module.exports = {
  purge:{
    enabled: true,
    content: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    safelist: [
        'bg-red-500'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    checkbox: {
      icon: '<svg fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>'
    },
    extend: {
      colors: {
        primary: '#00bf6f',
      },
      backgroundImage: (theme) => ({
        check: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>')`,
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
}
