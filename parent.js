const span = document.querySelector('span');
const spanParent = document.querySelector('.parent-1')

function isParent(parent, child) {
    let curentParent = child.parentElement;
    let isParent = false;

    while (curentParent) {
        isParent = parent === curentParent;
        if (isParent) {
            curentParent = null;
        } else {
            curentParent = curentParent.parentElement;
        }
    }
}