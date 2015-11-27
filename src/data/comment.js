import votes from "./votes";

/*
 * comment
 * -------
 *
 * return the data that represents a comment. There are two types of comments, regular
 * ones, and missing comments. Missing comments contain no data.
 */
const comment = element => {
  // comments aren't actually nested, instead they are indented with an image to
  // show how they should be nested
  let indentationHolder = element.querySelector(".ind");
  let indentation = indentationHolder.querySelector("img");
  let level = indentation === null ? 0 : parseInt(indentation.width, 10) / 40;
  let commentHolder = element.querySelector(".comment > span");
  // missing comment
  if ( commentHolder === null ) {
    return {
      level: level,
      type: "missing",
      children: []
    };
  }
  // instead of trying to break the comment down, just remove the reply
  // link and return the html
  let commClone = commentHolder.cloneNode(true);
  let cloneReply = commClone.querySelector(".reply");
  if ( cloneReply !== null ) {
    commClone.removeChild(cloneReply);
  }
  let message = {
    __html: commClone.innerHTML
  };
  let replyLink = element.querySelector(".reply a");
  let reply = replyLink !== null ? replyLink.href : "";
  return Object.assign({}, {
      level: level,
      type: "normal",
      message: message,
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