removeElementsWithIds(["poool-widget", "poool-free-intro"]);
removeScriptsWithUrls(["https://assets.poool.fr/poool.min.js"]);

window.addEventListener('load', function() {
    [].slice.call(document.getElementsByClassName("u-hidden")).forEach(elem => {
        if (elem.getAttribute("data-ae-poool") !== null) {
            elem.setAttribute("style", "");
        } else if (elem.getAttribute("data-poool-mode")) {
            elem.setAttribute("style", "");
        }
    });
    [].slice.call(document.getElementsByClassName("article__content noscript")).forEach(elem => {
        if (elem.getAttribute("data-poool-mode")) {
            elem.setAttribute("style", "");
        }
    });
    removeElementsWithClasses(["u-hidden", "p3-paywall", "poool-locked", "paywall-processed"]);
});