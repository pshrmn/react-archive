const votingData = element => {
  return {
    votes: Array.from(element.querySelectorAll("a")).reduce((obj, link) => {
      obj[link.id.split("_")[0]] = link.href;
      return obj;
    }, {})
  };
};

export default votingData;
