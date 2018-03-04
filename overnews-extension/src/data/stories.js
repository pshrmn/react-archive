import story from "./story";

/*
 * stories
 * -------
 *
 * return an array of stories in the page
 */
const stories = () => {
  return {
    stories: Array.from(document.querySelectorAll("tr.athing")).map(thing => story(thing))
  };
};

export default stories;
