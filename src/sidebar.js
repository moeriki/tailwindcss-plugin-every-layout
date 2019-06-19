import { mapObject } from './utils';

const CONFIG = {
  xs: '10rem',
  sm: '12rem',
  md: '14rem',
  lg: '16rem',
  xl: '20rem',
};

export default function sidebar({ e, addUtilities }) {
  addUtilities(
    mapObject(
      (width, modifier) => ({
        [`.sidebar-${e(modifier)}`]: {
          display: 'flex',
          'flex-wrap': 'wrap',
          margin: '-0.5rem',
        },
        [`.sidebar-${e(modifier)} > *`]: {
          margin: '0.5rem',
        },
        [`.sidebar-${e(modifier)} > aside`]: {
          'flex-basis': `${width}`,
          'flex-grow': '1',
        },
        [`.sidebar-${e(modifier)} > :not(aside)`]: {
          'flex-basis': '0',
          'flex-grow': '999',
          'min-width': 'calc(50% - 1rem)',
        },
      }),
      CONFIG,
    ),
  );
}
