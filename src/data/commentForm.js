const commentForm = form => {
  let parent = form.querySelector("input[name=parent]");
  // goto gets highlighted using syntax highlighter, so using togo intead
  let togo = form.querySelector("input[name=goto]");
  let hmac = form.querySelector("input[name=hmac]");
  return {
    method: "post",
    action: "comment",
    parent: parent.value,
    goto: togo.value,
    hmac: hmac.value
  };
};

export default commentForm;