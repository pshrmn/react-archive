import story from "./story";

/*
 * stories
 * -------
 *
 * return an array of stories in the page
 */
const stories = () => {
  return Array.from(document.querySelectorAll("tr.athing")).map(thing => story(thing));
};

export default stories;
