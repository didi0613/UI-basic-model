// Event Delegation处理方式
var List = document.getElementById('list');

List.onclick = function (evt) {
    var evt = evt || window.event;

    // 获得鼠标点击的目标 evt.target
    // evt.srcElement 是IE 特有的
    var link = evt.target || evt.srcElement;

    // 进一步过滤
    if (link.tagName.toLowerCase() === 'a') {
        alert("this is \'" + link.innerHTML + "\' in UL#List");
        window.open(link.href, '_blank');
    }
};