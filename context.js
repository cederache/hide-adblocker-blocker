chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tab.url.startsWith("http")) {
            chrome.tabs.executeScript(tab.id, {file: 'removeAdBlockerBlocker.js'});
            chrome.tabs.executeScript(tabId, {file: 'blockPaywall.js'});
        }
    }
});