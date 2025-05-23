extend: {
    animation: {
      marquee: 'marquee 30s linear infinite',
      'marquee-reverse': 'marquee-reverse 30s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(100%)' },
      },
      'marquee-reverse': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
  }
  