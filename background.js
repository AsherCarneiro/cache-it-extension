chrome.browserAction.onClicked.addListener(function(tab) {
    const currentURL = tab.url;
    const googleCacheURL = `https://webcache.googleusercontent.com/search?q=cache:${encodeURIComponent(currentURL)}`;
    // chrome.tabs.create({ url: googleCacheURL });
    window.open(googleCacheURL, '_blank');
  });