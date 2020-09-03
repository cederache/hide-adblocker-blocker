const classesToRemove = ['noscroll'];

classesToRemove.forEach(classToRemove => {
    const elems = [].slice.call(document.getElementsByClassName(classToRemove));
    console.log(elems);
    elems.forEach(elem => {
        elem.classList.remove(classToRemove);
    })
});

const elementsToHide = ["subscribe-modal"];

elementsToHide.forEach(elementToHide => {
    const elem = document.getElementById(elementToHide);
    if (elem !== null) {
        elem.remove();
    }
})