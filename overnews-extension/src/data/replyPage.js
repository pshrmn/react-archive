import user from "./user";
import reply from "./reply";

export default () => {
  return Object.assign({},
    user(),
    reply()
  );
}
