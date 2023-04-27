export function things(value = 'hello') {
  // eslint-disable-next-line no-console
  console.log('things > value', value);
  return `${value} World`;
}
