export default function appendToEachArrayValue(array, appendString) {
  let array2 = [];
  for (var idx of array) {
    array2.push(appendString + idx);
  }
  return array2;
}
