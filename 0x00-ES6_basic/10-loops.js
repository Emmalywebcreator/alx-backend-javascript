export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = array[idx];
    value = (appendString + value);
  }
  return array;
}
