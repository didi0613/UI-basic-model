function debounce(idle, action) {
    var last;

    return function () {
        clearTimeout(last);
        last = setTimeout(function () {
            action.apply(this);
        }, idle);
    }
}