chrome.storage.local.get(null, function(storage) {
    if ( !storage.domains ) {
        chrome.storage.local.set({"domains": {}});
    }
    if ( !storage.saved ) {
        chrome.storage.local.set({"saved": {}});
    }
    if ( !storage.hidden ) {
        chrome.storage.local.set({"hidden": {}});
    }
});

// clear out hidden stories that were hidden >48 hours ago
(() => {
  chrome.storage.local.get("hidden", storage => {
    var hidden = storage.hidden;
    var now = new Date();
    var twoDays = 2*24*60*60*1000;
    for ( var key in hidden ) {
      var curr = hidden[key];
      if ( now - curr.when > twoDays ) {
        delete hidden[key];
      }
    }
    chrome.storage.local.set({"hidden": hidden});
  });
})();
