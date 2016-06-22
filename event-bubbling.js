var mylink = document.getElementById('mylink');
attachEventListener(mylink, 'click', engage, false);
var paragraph = document.getElementsByTagName('p')[0];
attachEventListener(paragraph, 'click', engage, false);

function engage(event) {
    if (typeof event === undefined) {
        event = window.event;
    }
    //do something
    stopEvent(event);
    return true;
}

function stopEvent(event) {
    if (typeof event.stopPropagation !== undefined) {
        // 监听启动以后一个事件继续影响下去，你可以停止它
        event.stopPropagation();
    } else {
        // IE
        event.cancelBubble(true);
    }
}