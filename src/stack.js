import { mapObject } from './utils';

export default function stack({ addUtilities, e, theme }) {
  addUtilities(
    mapObject(
      (size, modifier) => ({
        [`.stack-${e(modifier)} > * + *`]: { 'margin-top': `${size}` },
        [`.stack-deep-${e(modifier)} * + *`]: { 'margin-top': `${size}` },
      }),
      theme('spacing'),
    ),
  );
}
