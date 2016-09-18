// <ul id="parent-list">
//     <li id="post-1">Item 1</li>
// <li id="post-2">Item 2</li>
// <li id="post-3">Item 3</li>
// <li id="post-4">Item 4</li>
// <li id="post-5">Item 5</li>
// <li id="post-6">Item 6</li>
// </ul>
document.getElementById("parent-list").addEventListener('click', function (e) {
    if (e.target && e.target.id === "post-*") {
        console.log("xxxxxx");
        // if the click is called, the default action of the event will not be triggered
        e.preventDefault();
    }
});