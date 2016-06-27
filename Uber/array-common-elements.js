function findCommon(arr1, arr2) {
    var index1 = 0, index2 = 0;
    var len1 = arr1.length;
    var len2 = arr2.length;
    var ret = [];
    while (index1 < len1 && index2 < len2) {
        if (arr1[index1] < arr2[index2]) {
            index1++;
        } else if (arr1[index1] > arr2[index2]) {
            index2++;
        } else {
            ret.push(arr1[index1]);
            index1++;
            index2++;
        }
    }
    return ret;
}

var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [3, 5, 7];
console.log("Intersection: ", findCommon(arr1, arr2));

// Time Complexity: O(m+n)