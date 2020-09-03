function genericOnClick(info, tab) {
    chrome.tabs.executeScript(tab.id, {file: 'content.js'});
}

var contexts = ["all"];

for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Remove disable adblock popup";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": genericOnClick});
}