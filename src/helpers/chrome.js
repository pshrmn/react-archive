export const getStorage = callback => {
  chrome.storage.local.get(null, storage => {
    callback(storage);
  });
};

/*
 * stories
 */
export const saveStory = (id, url, title) => {
  chrome.storage.local.get("saved", storage => {
    let saved = storage.saved;
    saved[id] = {
      url: url,
      title: title
    };
    chrome.storage.local.set({"saved": saved});
  });
};

export const unsaveStory = id => {
  chrome.storage.local.get("saved", storage => {
    let saved = storage.saved;
    delete saved[id];
    chrome.storage.local.set({"saved": saved});
  });
};

export const getSaved = callback => {
  chrome.storage.local.get("saved", storage => {
    callback(storage.saved);
  });
};

/*
 * domains
 */
export const hideDomain = domain => {
  chrome.storage.local.get("domains", storage => {
    let domains = storage.domains;
    domains[domain] = true;
    chrome.storage.local.set({"domains": domains});
  });
};

export const unhideDomain = domain => {
  chrome.storage.local.get("domains", storage => {
    let domains = storage.domains;
    delete domains[domain];
    chrome.storage.local.set({"domains": domains});
  });
};

export const getDomains = callback => {
  chrome.storage.local.get("domains", storage => {
    callback(storage.domains);
  });
};

/*
 * hidden
 */
export const hideStory = (id, url, title) => {
  chrome.storage.local.get("hidden", storage => {
    let hidden = storage.hidden;
    hidden[id] = {
      url: url,
      title: title,
      when: (new Date).getTime()
    };
    chrome.storage.local.set({"hidden": hidden});
  });
};

export const unhideStory = id => {
  chrome.storage.local.get("hidden", storage => {
    let hidden = storage.hidden;
    delete hidden[id];
    chrome.storage.local.set({"hidden": hidden});
  });
};

export const getHidden = callback => {
  chrome.storage.local.get("hidden", storage => {
    callback(storage.hidden);
  });
};
