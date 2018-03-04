import user from "./user";
import stories from "./stories";

export default () => {
  return Object.assign({},
    user()
  );
}
