import comment from "./comment";
import commentForm from "./commentForm";

const reply = () => {
  return {
    comment: comment(document.querySelector(".athing")),
    replyForm: commentForm(document.querySelector("form[method=post]"))
  };
};

export default reply
