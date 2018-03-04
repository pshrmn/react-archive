import votes from "./votes";

/*
 * data from the headline of a submission
 */
const headlineData = headline => {
  const tds = headline.querySelectorAll("td");
  if ( tds.length !== 3 ) {
    console.error("unexpected tds for headline", headline, tds);
    return {};
  }
  return Object.assign({}, votes(tds[1]), submissionData(tds[2]));
};

const submissionData = element => {
  const sub = element.querySelector("a");
  const domain = element.querySelector(".sitebit a");
  // use the hostname of the link when there is no sitebit. For self-posts,
  // this will set the domain to news.ycombinator.com, which doesn't actually
  // show anything on the /from?site=news.ycombinator.com page
  const domainText = domain === null ? sub.hostname : domain.textContent;
  return {
    title: sub.textContent,
    url: sub.href,
    domain: domainText
  };
};

export default headlineData;
