/*
 Given a list of characters, ie. ['t', 'a', 'c', 't'] and a single string, (ie. "attach"),
 determine if all of the characters are in the string.
 If there are multiple copies of a single letter in the list of characters,
 there need to be at least that many instances of the character in the string
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

var list = ['t', 'a', 'c', 't'];
var str = "attach";
console.log("XXXx", checkContains(list, str));