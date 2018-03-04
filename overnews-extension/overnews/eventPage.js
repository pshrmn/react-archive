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
