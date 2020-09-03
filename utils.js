function removeElementsWithClasses(classesToRemove) {
    classesToRemove.forEach(classToRemove => {
        const elems = [].slice.call(document.getElementsByClassName(classToRemove));
        elems.forEach(elem => {
            elem.classList.remove(classToRemove);
        })
    });
}

function removeElementsWithIds(idsToRemove) {
    idsToRemove.forEach(idToRemove => {
        const elem = document.getElementById(idToRemove);
        if (elem !== null) {
            elem.remove();
        }
    })
}

function removeScriptsWithUrls(scriptUrlsToRemove) {
    const scripts = [].slice.call(document.getElementsByTagName("script"));
    scripts.forEach(script => {
        if (scriptUrlsToRemove.includes(script.getAttribute("src"))) {
            script.remove();
        }
    })
}