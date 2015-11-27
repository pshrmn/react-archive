/*
 * return a string representing the type of page
 *
 * types:
 * submission - a page filled with submissions
 * comments - a page filled with comments
 * no-op - a page where nothing should be done?
 */
export default function() {
  let location = window.location;
  switch ( location.pathname ) {
  case "/":
  case "/news":
  case "/jobs":
    return "submission";
  case "/item":
    return "comments";
  /*
  case "/reply":
    return "reply";
  */
  default:
    return "no-op"
  }
};
