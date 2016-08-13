/*
 * data from the byline of a submission
 */
const bylineData = byline => {
  const subtext = byline.querySelector(".subtext");
  const score = subtext.querySelector(".score");
  if ( score === null ) {
    // a job post
    return {
      type: "job",
      when: subtext.textContent.trim()
    };
  }
  const links = subtext.querySelectorAll("a");
  let commentLink = null;
  for ( var i=0; i<links.length; i++) {
    const curr = links[i];
    if ( isCommentsLink(curr) ) {
      commentLink = curr;
      break;
    }
  }
  return Object.assign({},
    {type: "sub"},
    pointsData(score),
    userData(links[0]),
    whenData(links[1]),
    commentsData(commentLink)
  );
};

function isCommentsLink(link) {
  const commentReg = /^\d+\scomment/;
  return link.textContent === "discuss" || commentReg.test(link.textContent);
}

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
  if ( element === null ) {
    return {
      id: -1,
      comments: {
        count: -1,
        url: '#'
      }
    };
  }
  const text = element.textContent;
  const commentCount = text === "discuss" ? 0 : parseInt(text.split(" ")[0], 10);
  return {
    id: element.href.split("=")[1],
    comments: {
      count: commentCount,
      url: element.href
    }
  };
};

export default bylineData;
