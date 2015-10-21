/*
 * returns the recipes stored in localStorage or null
 */
export function LoadRecipes() {
  return JSON.parse(localStorage.getItem("recipes"));
}

/*
 * store the recipes in localStorage
 */
export function StoreRecipes(recipes) {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

/*
 * Returns the initial store values. "recipes" is loaded from localStorage. If it doesn't
 * currently exist, an empty array value is set as default. The default "index" value is -1
 */
export function SetupStorage() {
  let recipes = LoadRecipes();
  if ( recipes === null) {
    recipes = [];
    StoreRecipes(recipes);
  }
  return {
    recipe: {},
    recipes: recipes,
    index: -1,
    editing: false
  };
}

/*
 * Return a new object representing a recipe. Sets the ytID if the argument is provided
 */
export function NewRecipe(ytID = "") {
  return {
    name: "",
    ytID: ytID,
    ingredients: [],
    instructions: []
  };
}

export function VideoID(url) {
      /*
   * This can take either a youtube.com url and look for the v parameter
   * or a youtu.be url and use the last part of the url
   */
  var id = ""
  var a = document.createElement("a");
  a.href = url;
  switch ( a.hostname ) {
  case "www.youtube.com":
    if ( a.search === "" ) {
      break;
    }
    var parts = a.search.slice(1).split("&");
    parts.some(function(p) {
      var keyVal = p.split("=");
      if ( keyVal[0] === "v" ) {
        id = keyVal[1];
        return true;
      }
      return false;
    });
    break;
  case "youtu.be":
    var parts = url.split("/");
    id = parts[parts.length-1];
    break;
  }

  return id;
}