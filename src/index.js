import stories from "./helpers/stories";
import comments from "./helpers/comments";
import pageType from "./helpers/pageType";

let type = pageType();
console.log(type);
if ( type === "submission" ) {
  console.log(stories());
} else if ( type === "comments" ) {
  console.log(comments());
}
