import user from "./user";
import comments from "./comments";

export default () => {
  return Object.assign({},
    user(),
    comments()
  );
}
