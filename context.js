function genericOnClick(info, tab) {
    chrome.tabs.executeScript(tab.id, {file: 'removeAdBlockerBlocker.js'});
}

var contexts = ["all"];

for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Remove disable adblock popup";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": genericOnClick});
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tab.url.startsWith("http")) {
            chrome.tabs.executeScript(tabId, {file: 'blockPaywall.js'});
        }
    }
});