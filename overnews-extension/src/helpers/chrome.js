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
    const saved = storage.saved;
    saved[id] = {
      url: url,
      title: title
    };
    chrome.storage.local.set({"saved": saved});
  });
};

export const unsaveStory = id => {
  chrome.storage.local.get("saved", storage => {
    const saved = storage.saved;
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
export const banDomain = domain => {
  chrome.storage.local.get("domains", storage => {
    const domains = storage.domains;
    domains[domain] = true;
    chrome.storage.local.set({"domains": domains});
  });
};

export const unbanDomain = domain => {
  chrome.storage.local.get("domains", storage => {
    const domains = storage.domains;
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
    const hidden = storage.hidden;
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
    const hidden = storage.hidden;
    delete hidden[id];
    chrome.storage.local.set({"hidden": hidden});
  });
};

export const getHidden = callback => {
  chrome.storage.local.get("hidden", storage => {
    // clear out old hidden stories when getting object
    // of hidden stories
    const now = new Date();
    const twoDays = 2*24*60*60*1000;
    const hidden = storage.hidden;
    for ( const key in hidden ) {
      if (now - hidden[key] > twoDays ) {
        delete hidden[key];
      }
    }
    chrome.storage.local.set({"hidden": hidden});
    callback(hidden);
  });
};
