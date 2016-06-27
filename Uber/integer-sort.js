function sortInteger(arr1, arr2) {
    var ret = [];
    var len1 = arr1.length, len2 = arr2.length;

    var index1 = 0, index2 = 0;
    while (index1 < len1 && index2 < len2) {
        if (arr1[index1] <= arr2[index2]) {
            ret.push(arr1[index1]);
            index1++;
        } else {
            ret.push(arr2[index2]);
            index2++;
        }
    }

    if (index1 < len1) {
        ret.push(arr1[index1]);
        index1++;
    }

    if (index2 < len2) {
        ret.push(arr2[index2]);
        index2++;
    }

    return ret;
}