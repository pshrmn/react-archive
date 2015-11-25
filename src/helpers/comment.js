import votes from "./votes";

const comment = element => {
  // comments aren't actually nested, instead they are indented with an image to
  // show how they should be nested
  let indentationHolder = element.querySelector(".ind");
  let indentation = indentationHolder.querySelector("img");
  let level = indentation === null ? 0 : parseInt(indentation.width, 10) / 40;
  let commentHolder = element.querySelector(".comment > span");
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
      votes: votes(element.querySelector(".votelinks")),
      paragraphs: paragraphs,
      reply: reply
    },
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
    parent: parent
  };  
};

export default comment;