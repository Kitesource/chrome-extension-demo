/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      darkblue: {
        50: 'var(--color-darkblue-50)',
        100: 'var(--color-darkblue-100)',
        200: 'var(--color-darkblue-200)',
        300: 'var(--color-darkblue-300)',
        400: 'var(--color-darkblue-400)',
        500: 'var(--color-darkblue-500)',
        600: 'var(--color-darkblue-600)',
        700: 'var(--color-darkblue-700)',
        800: 'var(--color-darkblue-800)',
        900: 'var(--color-darkblue-900)',
      },

      brand: {
        50: 'var(--color-brand-50)',
        100: 'var(--color-brand-100)',
        200: 'var(--color-brand-200)',
        300: 'var(--color-brand-300)',
        400: 'var(--color-brand-400)',
        500: 'var(--color-brand-500)',
        600: 'var(--color-brand-600)',
        700: 'var(--color-brand-700)',
        800: 'var(--color-brand-800)',
        900: 'var(--color-brand-900)',
      },

      skyblue: {
        50: 'var(--color-skyblue-50)',
        100: 'var(--color-skyblue-100)',
        200: 'var(--color-skyblue-200)',
        300: 'var(--color-skyblue-300)',
        400: 'var(--color-skyblue-400)',
        500: 'var(--color-skyblue-500)',
        600: 'var(--color-skyblue-600)',
        700: 'var(--color-skyblue-700)',
        800: 'var(--color-skyblue-800)',
        900: 'var(--color-skyblue-900)',
      },

      cyan: {
        50: 'var(--color-cyan-50)',
        100: 'var(--color-cyan-100)',
        200: 'var(--color-cyan-200)',
        300: 'var(--color-cyan-300)',
        400: 'var(--color-cyan-400)',
        500: 'var(--color-cyan-500)',
        600: 'var(--color-cyan-600)',
        700: 'var(--color-cyan-700)',
        800: 'var(--color-cyan-800)',
        900: 'var(--color-cyan-900)',
      },

      green: {
        50: 'var(--color-green-50)',
        100: 'var(--color-green-100)',
        200: 'var(--color-green-200)',
        300: 'var(--color-green-300)',
        400: 'var(--color-green-400)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)',
        700: 'var(--color-green-700)',
        800: 'var(--color-green-800)',
        900: 'var(--color-green-900)',
      },

      lime: {
        50: 'var(--color-lime-50)',
        100: 'var(--color-lime-100)',
        200: 'var(--color-lime-200)',
        300: 'var(--color-lime-300)',
        400: 'var(--color-lime-400)',
        500: 'var(--color-lime-500)',
        600: 'var(--color-lime-600)',
        700: 'var(--color-lime-700)',
        800: 'var(--color-lime-800)',
        900: 'var(--color-lime-900)',
      },

      orange: {
        50: 'var(--color-orange-50)',
        100: 'var(--color-orange-100)',
        200: 'var(--color-orange-200)',
        300: 'var(--color-orange-300)',
        400: 'var(--color-orange-400)',
        500: 'var(--color-orange-500)',
        600: 'var(--color-orange-600)',
        700: 'var(--color-orange-700)',
        800: 'var(--color-orange-800)',
        900: 'var(--color-orange-900)',
      },

      red: {
        50: 'var(--color-red-50)',
        100: 'var(--color-red-100)',
        200: 'var(--color-red-200)',
        300: 'var(--color-red-300)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
        600: 'var(--color-red-600)',
        700: 'var(--color-red-700)',
        800: 'var(--color-red-800)',
        900: 'var(--color-red-900)',
      },

      fuchsia: {
        50: 'var(--color-fuchsia-50)',
        100: 'var(--color-fuchsia-100)',
        200: 'var(--color-fuchsia-200)',
        300: 'var(--color-fuchsia-300)',
        400: 'var(--color-fuchsia-400)',
        500: 'var(--color-fuchsia-500)',
        600: 'var(--color-fuchsia-600)',
        700: 'var(--color-fuchsia-700)',
        800: 'var(--color-fuchsia-800)',
        900: 'var(--color-fuchsia-900)',
      },

      purple: {
        50: 'var(--color-purple-50)',
        100: 'var(--color-purple-100)',
        200: 'var(--color-purple-200)',
        300: 'var(--color-purple-300)',
        400: 'var(--color-purple-400)',
        500: 'var(--color-purple-500)',
        600: 'var(--color-purple-600)',
        700: 'var(--color-purple-700)',
        800: 'var(--color-purple-800)',
        900: 'var(--color-purple-900)',
      },

      neutral: {
        30: 'var(--color-neutral-30)',
        50: 'var(--color-neutral-50)',
        100: 'var(--color-neutral-100)',
        200: 'var(--color-neutral-200)',
        300: 'var(--color-neutral-300)',
        400: 'var(--color-neutral-400)',
        500: 'var(--color-neutral-500)',
        600: 'var(--color-neutral-600)',
        700: 'var(--color-neutral-700)',
        800: 'var(--color-neutral-800)',
        900: 'var(--color-neutral-900)',
      },

      gray: {
        50: 'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },
    },

    boxShadow: {
      inner: 'var(--shadow-inner)',
      sm: 'var(--shadow-sm)',
      DEFAULT: 'var(--shadow-base)',
      md: 'var(--shadow-md)',
      lg: 'var(--shadow-lg)',
      xl: 'var(--shadow-xl)',
      '2xl': 'var(--shadow-2xl)',
      none: 'var(--shadow-none)',
    },

    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Arial',
        '"Helvetica Neue"',
        '"Pingfang SC"',
        '"Microsoft Yahei"',
        '"Souce Han Sans SC"',
        '"WenQuanYi Micro Hei"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      display: [
        'Lato',
        'Poppins',
        'Titillium Web',
        '"Helvetica Neue"',
        '"Pingfang SC"',
        '"Microsoft Yahei"',
        '"Souce Han Sans SC"',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

    borderRadius: {
      none: 'var(--borderRadius-none)',
      sm: 'var(--borderRadius-sm)',
      md: 'var(--borderRadius-md)',
      lg: 'var(--borderRadius-lg)',
      full: 'var(--borderRadius-full)',
      DEFAULT: 'var(--borderRadius-sm)',
    },

    extend: {
      screens: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      minHeight: {},
      maxHeight: {},
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    visibility: ['responsive', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    gridTemplateColumns: ['responsive', 'hover', 'focus'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  important: true,
  future: {
    defaultLineHeights: true,
    standardFontWeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  corePlugins: {
    backgroundOpacity: true,
    preflight: false,
    backdropBlur: true,
  },
}
