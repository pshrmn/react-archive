import headline from "./headline";
import byline from "./byline";

const story = element => {
  return Object.assign({}, headline(element), byline(element.nextElementSibling));
};

export default story;
