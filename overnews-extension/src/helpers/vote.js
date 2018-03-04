/*
 * vote
 * ----
 *
 * the way that voting on hacker news works is that the href of the vote link
 * that was clicked is set as the src of a new Image, thus "pinging" the server
 * with the voting information encoded in the src. The auth query parameter
 * is unique for each voting url, so this has can't be generated just by knowing
 * the story's id
 */
export default url => {
  const pinger = new Image();
  pinger.src = url;
};
