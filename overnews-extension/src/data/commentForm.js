const commentForm = form => {
  const parent = form.querySelector("input[name=parent]");
  // goto gets highlighted using syntax highlighter, so using togo intead
  const togo = form.querySelector("input[name=goto]");
  const hmac = form.querySelector("input[name=hmac]");
  return {
    method: "post",
    action: "comment",
    parent: parent.value,
    goto: togo.value,
    hmac: hmac.value
  };
};

export default commentForm;