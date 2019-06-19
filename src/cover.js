export default function cover({ addUtilities }) {
  addUtilities({
    '.cover': {
      display: 'flex',
      'flex-direction': 'column',
      'min-height': '100vh',
      padding: '1rem',
    },
    '.cover > *': {
      'margin-top': '1rem',
      'margin-bottom': '1rem',
    },
    '.cover > :first-child:not(h1)': {
      'margin-top': '0',
    },
    '.cover > :last-child:not(h1)': {
      'margin-bottom': '0',
    },
    '.cover > h1': {
      'margin-top': 'auto',
      'margin-bottom': 'auto',
    },
  });
}
