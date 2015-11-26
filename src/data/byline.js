/*
 * data from the byline of a submission
 */
const bylineData = byline => {
  let subtext = byline.querySelector(".subtext");
  let score = subtext.querySelector(".score");
  if ( score === null ) {
    // a job post
    return {
      type: "job",
      when: subtext.textContent.trim()
    };
  }

  let links = subtext.querySelectorAll("a");
  // the comments is the last link
  let last = links[links.length-1];
  return Object.assign({},
    {type: "sub"},
    pointsData(score),
    userData(links[0]),
    whenData(links[1]),
    commentsData(last)
  );
};

const pointsData = element => {
  return {
    points: parseInt(element.textContent.split(" ")[0], 10)
  };
};

const userData = element => {
  return {
    user: {
      name: element.textContent,
      url: element.href
    }
  };
};

const whenData = element => {
  return {
    when: element.textContent.trim()
  };
};

/*
 * this is broken on comments pages where the comments is actually links[4]
 * but has not yet been fixed
 */
const commentsData = element => {
  let text = element.textContent;
  let commentCount = text === "discuss" ? 0 : parseInt(text.split(" ")[0], 10);
  return {
    id: element.href.split("=")[1],
    comments: {
      count: commentCount,
      url: element.href
    }
  };
};

export default bylineData;
