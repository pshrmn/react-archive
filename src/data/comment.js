import votes from "./votes";

/*
 * comment
 * -------
 *
 * return the data that represents a comment. There are two types of comments, regular
 * ones, and flagged comments. Flagged comments contain no data.
 */
const comment = element => {
  // comments aren't actually nested, instead they are indented with an image to
  // show how they should be nested
  let indentationHolder = element.querySelector(".ind");
  let indentation = indentationHolder.querySelector("img");
  let level = indentation === null ? 0 : parseInt(indentation.width, 10) / 40;
  let commentHolder = element.querySelector(".comment > span");
  // flagged comment
  if ( commentHolder === null ) {
    return {
      level: level,
      type: "flagged"
    };
  }
  // get the text of the comment. This does not preserve any markdown elements
  // eg italics
  let paragraphs = Array.from(commentHolder.childNodes)
    .filter(child => {
      return child.classList === undefined || !child.classList.contains("reply");
    })
    .reduce((arr, child) => {
      let index = arr.length - 1;
      let current = arr[index];
      if ( child.tagName === "P" ) {
        arr.push(child.textContent);
        return arr;
      } else {
        current += child.textContent;
        arr[index] = current;
        return arr;
      }
    }, [""])
    .map(t => t.trim());
  let replyLink = element.querySelector(".reply a");
  let reply = replyLink !== null ? replyLink.href : "";
  return Object.assign({}, {
      level: level,
      type: "normal",
      paragraphs: paragraphs,
      reply: reply,
      children: []
    },
    votes(element.querySelector(".votelinks")),
    headline(element.querySelector("td.default div"))
  );
};

const headline = element => {
  let links = element.querySelectorAll("a");
  let parentHolder = element.querySelector(".par a");
  let parent = parentHolder !== null ? parentHolder.href : "";
  return {
    user: {
      name: links[0].textContent,
      url: links[0].href
    },
    direct: links[1].href,
    when: links[1].textContent,
    id: links[1].href.split("=")[1],
    parent: parent
  };  
};

export default comment;