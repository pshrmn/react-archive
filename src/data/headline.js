import votes from "./votes";

/*
 * data from the headline of a submission
 */
const headlineData = headline => {
  let tds = headline.querySelectorAll("td");
  if ( tds.length !== 3 ) {
    console.error("unexpected tds for headline", headline, tds);
    return {};
  }
  return Object.assign({}, votes(tds[1]), submissionData(tds[2]));
};

const submissionData = element => {
  let sub = element.querySelector("a");
  let domain = element.querySelector(".sitebit a");
  let domainText = domain === null ? "" : domain.textContent;
  return {
    title: sub.textContent,
    url: sub.href,
    domain: domainText
  };
};

export default headlineData;
