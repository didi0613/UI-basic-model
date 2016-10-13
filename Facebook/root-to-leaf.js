var printPaths = function (node) {
    var ret = [];
    printPathsRecur(node, ret, 0, []);
    return ret;
};

var printPathsRecur = function (node, ret, path) {
    if (node == null)
        return;

    if (node.left == null && node.right == null)
        ret.push(path);
    else {
        path.push(node.data);

        printPathsRecur(node.left, ret, path);
        printPathsRecur(node.right, ret, path);
    }
};