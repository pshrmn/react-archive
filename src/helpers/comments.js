import story from "./story";
import comment from "./comment";

/*
 * comments
 * --------
 *
 * There are two kinds of comments pages.
 * 1.) all comments - this is headed by a submission and lists all of the
 *     comments for a submission in a comment tree
 * 2.) single comments - this is headed by a comment and list all of the child
 *     comments in a comment tree
 */
const comments = () => {
  let headline = document.querySelector(".athing");
  let commentTree = document.querySelector(".comment-tree");
  return Object.assign({},
    header(headline),
    commentData(commentTree)
  );
};

const header = element => {
  if ( element.querySelector(".title") !== null ) {
    return {
      type: "all",
      story: story(element)  
    }
  } else {
    return {
      type: "single",
      comment: comment(element)
    }
  }
};

const commentData = tree => {
  if ( tree === null ) {
    return {
      comments: []
    };
  }
  return {
    comments: Array.from(tree.querySelectorAll(".athing")).map(element => comment(element))
  };
};

export default comments;
