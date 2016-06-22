// Event Delegation处理方式
var List = document.getElementById('list');

List.onclick = function (evt) {
    var evt = evt || window.event;
    var link = evt.target || evt.srcElement;

    if (link.tagName.toLowerCase() === 'a') {
        alert("this is \'" + link.innerHTML + "\' in UL#List");
    }
};