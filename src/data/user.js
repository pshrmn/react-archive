const user = () => {
  const pagetops = document.querySelectorAll(".pagetop");
  if ( !pagetops[1] ) {
    return {};
  }
  const holder = pagetops[1];
  const links = holder.querySelectorAll("a");
  if ( links.length === 2 ) {
    const userLink = links[0];
    const pointsText = userLink.nextSibling.textContent.trim();
    const pointsRegex = /\((.+)\)/;
    const matches = pointsRegex.exec(pointsText);
    // I don't actually know how points are displayed for 1000+, so just keep
    // it as a string
    const points = matches[1] !== undefined ? matches[1] : "0";
    return {
      user: {
        name: userLink.textContent,
        url: userLink.href,
        points: points
      }
    };
  } else {
    return {
      user: {}
    };
  }
};

export default user;
