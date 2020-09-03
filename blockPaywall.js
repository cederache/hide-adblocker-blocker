removeElementsWithIds(["poool-widget", "poool-free-intro"]);
removeScriptsWithUrls(["https://assets.poool.fr/poool.min.js"]);
window.onload = function() {
    [].slice.call(document.getElementsByClassName("u-hidden")).forEach(elem => {
        if (elem.getAttribute("data-ae-poool") !== null) {
            elem.setAttribute("style", "");
        }
    })
    removeElementsWithClasses(["u-hidden", "p3-paywall", "poool-locked", "paywall-processed"]);
};