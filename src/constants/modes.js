export const DRAW = 'DRAW';
export const ERASE = 'ERASE';
export const PICK = 'PICK';

const modes = [
  {
    type: DRAW,
    text: 'Draw'
  },
  {
    type: ERASE,
    text: 'Erase'
  },
  {
    type: PICK,
    text: 'Color Picker'
  }
];

export default modes;
