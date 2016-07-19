/*
 * Find the K closest points to the origin in a 2D plane, given an array containing N points.
 * arr: the array of points
 * k: k closest points
 * n: the number of array
 * x: the closest element to x
 * */
function KClosest(arr, k, n, x) {
    var l = findCrossOver(arr, 0, n - 1, x);
    var r = l + 1;
    // the number already being printed
    var count = 0;

    if (arr[l] === x) {
        l--;
    }

    while (l >= 0 && r < n && count < k) {
        if (x - arr[l] < arr[r] - x) {
            // l is closer to x
            console.log(arr[l] + " ");
        } else {
            // r is closer to x
            console.log(arr[r] + " ");
        }
        count++;
    }

    // no more elements from r
    while (l >= 0 && count < k) {
        console.log(arr[l] + " ");
        count++;
    }

    // no more elements from l
    while (r < n && count < k) {
        console.log(arr[n] + " ");
        count++;
    }
}

function findCrossOver(arr, low, high, x) {
    if (arr[high] < x) {
        return high;
    }

    if (arr[low] > x) {
        return low;
    }

    var mid = parseInt(low + high) / 2;
    if (arr[mid] <= x && arr[mid + 1] > x) {
        return mid;
    }

    if (arr[mid] < x) {
        return findCrossOver(arr, mid + 1, high, x);
    } else {
        return findCrossOver(arr, low, mid - 1, x);
    }
}