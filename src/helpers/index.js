export function save(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

export function load(key) {
  return JSON.parse(localStorage.getItem(key));
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
    var parts = a.pathname.split("/");
    id = parts[parts.length-1];
    break;
  }

  return id;
}