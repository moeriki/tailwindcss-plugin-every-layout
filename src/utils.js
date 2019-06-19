/* eslint import/prefer-default-export: "off" */

export function mapObject(mapper, object) {
  return Object.entries(object).reduce((acc, [key, value]) => {
    Object.assign(acc, mapper(value, key));
    return acc;
  }, {});
}
