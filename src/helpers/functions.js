export function arrayChunk(arr, n) {
  const array = arr.slice();
  const chunks = [];
  while (array.length) chunks.push(array.splice(0, n));
  return chunks;
}
export function addClass(obj) {
  for (const key in obj) {
    console.log(obj[key]);
    console.log(key);
  }
}
