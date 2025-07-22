module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  css: ['./app/globals.css'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: {
    standard: [
      'html',
      'body',
      /^neopop-/, // Keep all neopop classes
      /^text-neopop-/, // Keep all text-neopop classes
      /^bg-neopop-/, // Keep all bg-neopop classes
      /^border-neopop-/, // Keep all border-neopop classes
      'font-heading', // Keep font-heading class
    ],
  },
};
