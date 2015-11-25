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

export default votingData;
