let clickCount = 0;
let clickTimer;

chrome.browserAction.onClicked.addListener(function(tab) {
  clickCount++;

  if (clickCount === 1) {
    clickTimer = setTimeout(function() {
      // Single click action: Open Google Cache tab
      const currentURL = tab.url;
      const googleCacheURL = `https://webcache.googleusercontent.com/search?q=cache:${encodeURIComponent(currentURL)}`;
      chrome.tabs.create({ url: googleCacheURL });

      clickCount = 0; // Reset click count
    }, 300); // Adjust the time interval (in milliseconds)
  } else if (clickCount === 2) {
    // Double click action: Open Google Cache and Wayback Machine tabs
    const currentURL = tab.url;
    const googleCacheURL = `https://webcache.googleusercontent.com/search?q=cache:${encodeURIComponent(currentURL)}`;
    const waybackURL = `https://web.archive.org/web/${encodeURIComponent(currentURL)}`;
    
    chrome.tabs.create({ url: waybackURL });
    chrome.tabs.create({ url: googleCacheURL });

    clearTimeout(clickTimer); // Clear the timer
    clickCount = 0; // Reset click count
  }
});
