removeElementsWithClasses(['noscroll']);
removeElementsWithIds(["subscribe-modal"]);


window.addEventListener('load', function() {
    if (window.location.href.startsWith("https://next.reality.news")) {
        removeElementsWithIds(["sidebars"]);
        var mainWrapper = document.getElementById("main-wrapper");
        mainWrapper.setAttribute("id", "mainWrapper");
    } else {
        removeElementsWithClasses(["u-hidden", "p3-paywall", "poool-locked", "paywall-processed"]);
    }
});