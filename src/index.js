import stories from "./helpers/stories";
import pageType from "./helpers/pageType";

let type = pageType();
console.log(type);
if ( type === "submission" ) {
  console.log(stories());
}
