import story from "./story";
import comment from "./comment";
import commentForm from "./commentForm";

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
    commentData(commentTree),
    replyForm(document.querySelector("form[method=post]"))
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

const replyForm = form => {
  return {
    replyForm: form !== null ? commentForm(form) : null
  };
}

const commentData = tree => {
  if ( tree === null ) {
    return {
      comments: []
    };
  }
  return {
    comments: buildTree(Array.from(tree.querySelectorAll(".athing")).map(element => comment(element)))
  };
};

/*
 * return an array of comments. Comments are nested based on their level, with the
 * returned array consisting of root (level=0) comments, and any nested comments
 * exisiting in the children array of their parent
 */
const buildTree = comments => {
  let commentTree = [];
  let levels = {};
  comments.forEach(c => {
    let { level } = c;
    // set the comment at current level to current comment
    levels[level] = c;
    // special case for root (level=0) comments
    if ( level === 0 ) {
      commentTree.push(c);
    } else {
      let parent = levels[level-1];
      if ( parent === undefined ) {
        console.error("missing parent", (level-1), comments, levels);
      }
      parent.children.push(c);
    }
  });
  return commentTree
};

export default comments;
