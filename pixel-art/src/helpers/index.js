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

/*
 * create a new 2d array and "paint" each pixel based on the moves.
 * later moves will override earlier moves
 */
export function paintArray(width, height, moves) {
  const pixels = createPixels(width, height);
  const isOutOfBounds = boundCheck(width, height);

  for (let m=0; m<moves.length; m++) {
    const { color, x, y, width, height, type } = moves[m];
    const setMoveColor = type === 'DRAW' ? color : undefined;
    for (let r=0; r<=height; r++) {
      for (let c=0; c<=width; c++) {
        if (!isOutOfBounds(c+x, r+y)) {
          pixels[r+y][c+x] = setMoveColor;
        }
      }
    }
  }
  return pixels;
}

function boundCheck(width, height) {
  return function(x, y) {
    return x >= width || y >= height;
  };
}

export function colorAsRgba(color) {
  const { r, g, b, a } = color.rgb;
  return `rgba(${r},${g},${b},${a})`;
}
