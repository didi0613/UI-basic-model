/*
 Given a list of strings, ie. ["cat", "tac", "tact", "at", "bat", "batch", "attach"]
 and a list of characters as before,
 determine the shortest word that contains all of the characters.
 Same conditions apply.
 * */
function checkContains(list, str) {
    list = list.sort();
    var str_arr = str.split('').sort();

    var len1 = list.length;
    var len2 = str_arr.length;

    if (len1 > len2) {
        return false;
    }

    if (len1 === 0) {
        return true;
    }

    var index1 = 0, index2 = 0;
    while (index1 < len1) {
        if (list[index1] === str_arr[index2]) {
            index1++;
            index2++;
        } else {
            index2++;

            if (index2 >= len2) {
                return false;
            }
        }
    }

    return true;
}

function shortestContains(list, strList) {
    var min = Number.MAX_VALUE;
    var len = strList.length;
    var ret = "";

    if (len === 0) {
        return 0;
    }

    for (var i = 0; i < len; i++) {
        if (checkContains(list, strList[i]) && strList[i].length <= min) {
            ret = strList[i];
            min = strList[i].length;
        }
    }

    return ret;
}

var list = ['t', 'a', 'c', 't'];
var strList = ["cat", "tac", "tact", "at", "bat", "batch", "attach"];
console.log("xxxx", shortestContains(list, strList));