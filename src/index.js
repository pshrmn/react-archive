import stories from "./data/stories";
import comments from "./data/comments";
import reply from "./data/reply";
import pageType from "./data/pageType";
import user from "./data/user";

let type = pageType();
console.log(type);
console.log(user());
switch ( type ) {
case "submission":
  console.log(stories());
  break;
case "comments":
  console.log(comments());
  break;
case "reply":
  console.log(reply());
  break; 
}
