export function copy2dArray(array) {
  const copy = []
  for (let r=0; r<array.length; r++) {
    copy.push(array[r].slice());
  }
  return copy;
}

export function coordinates(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return { x, y };
}

export function minMax(one, two) {
  return one < two ? [one, two] : [two, one];
}

export function createPixels(width, height) {
  const pixels = []
  for (let h=0; h<height; h++) {
    const row = [];
    for (let w=0; w<width; w++) {
      row.push(undefined);
    }
    pixels.push(row);
  }
  return pixels;
}
