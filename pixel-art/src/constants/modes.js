export const DRAW = 'DRAW';
export const ERASE = 'ERASE';
export const PICK = 'PICK';

const modes = [
  {
    type: DRAW,
    text: 'Draw',
    icon: 'fa-paint-brush'
  },
  {
    type: ERASE,
    text: 'Erase',
    icon: 'fa-eraser'
  },
  {
    type: PICK,
    text: 'Color Picker',
    icon: 'fa-tint'
  }
];

export default modes;
