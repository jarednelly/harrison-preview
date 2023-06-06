if (!window.USC) { window.USC = {}; }

// Listen for every click and keydown and pass them to the handler function
window.USC.listenUp = function (e) {

    // Make sure our target is a Show/Hide element
    if (e.target.closest('[data-role="btn"]')) {
        window.USC.showHide(e);
    }
}

document.addEventListener('click', USC.listenUp);
document.addEventListener('keydown', USC.listenUp);