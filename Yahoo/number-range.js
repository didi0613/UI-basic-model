/*
 [3, 2, 1, 5, 6, 19, 9, 20] 返回范围  ["1->3", "5->6", "9", "19->20"]：输入 int[] nums, 输出 List<String>()
 */

function range(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });

    var start = arr[0], end = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            end = arr[i];
        } else {
            if (end > start) {
                console.log(start + "->" + end + " ");
                start = arr[i];
            } else {
                console.log(start);
                start = arr[i];
            }
        }
    }

    // Print out the last one
    if (end > start) {
        console.log(start + "->" + end + " ");
    }
}

var arr = [3, 2, 1, 5, 6, 19, 9, 20];
range(arr);