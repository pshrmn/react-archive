/*
 * stories
 * -------
 *
 * return an array of stories in the page
 */
const stories = () => {
  let athings = document.querySelectorAll("tr.athing");
  let stories = Array.from(athings).map(thing => {
    return Object.assign({}, headlineData(thing), bylineData(thing.nextElementSibling));
  });
  return stories;
};

/*
 * data from the headline of a submission
 */
const headlineData = headline => {
  let tds = headline.querySelectorAll("td");
  if ( tds.length !== 3 ) {
    console.error("unexpected tds for headline", headline, tds);
    return {};
  }
  return Object.assign({}, votingData(tds[1]), submissionData(tds[2]));
};

const votingData = element => {
  return {
    votes: Array.from(element.querySelectorAll("a")).map(link => {
      return {
        url: link.href,
        type: link.id.split("_")[0]
      };
    })
  };
};

const submissionData = element => {
  let sub = element.querySelector("a");
  let domain = element.querySelector(".sitebit a");
  let domainText = domain === null ? "" : domain.textContent;
  return {
    title: sub.textContent,
    subUrl: sub.href,
    domain: domainText
  };
};

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
  return Object.assign({},
    {type: "sub"},
    pointsData(score),
    userData(links[0]),
    whenData(links[1]),
    commentsData(links[2])
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

export default stories;
