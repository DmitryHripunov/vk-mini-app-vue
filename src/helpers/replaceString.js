export default function replaceString(value) {
  return value.split('@')[0].padEnd(20, '*');
}