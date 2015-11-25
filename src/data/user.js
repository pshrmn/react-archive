const user = () => {
  let pagetops = document.querySelectorAll(".pagetop");
  if ( !pagetops[1] ) {
    return {};
  }
  let holder = pagetops[1];
  let links = holder.querySelectorAll("a");
  if ( links.length === 2 ) {
    let userLink = links[0];
    let pointsText = userLink.nextSibling.textContent.trim();
    let pointsRegex = /\((.+)\)/;
    let matches = pointsRegex.exec(pointsText);
    // I don't actually know how points are displayed for 1000+, so just keep
    // it as a string
    let points = matches[1] !== undefined ? matches[1] : "0";
    return {
      name: userLink.textContent,
      url: userLink.href,
      points: points
    }
  } else {
    return {};
  }
};

export default user;
