function printRootToLeaf(root) {
    var ret = [];
    printRootToLeafBuilder(root, [], ret);
    return ret;
}

function printRootToLeafBuilder(node, level, ret) {
    if (node === null) {
        return;
    }

    level.push(node.val);
    if (node.left === null && node.right === null) {
        ret.push(level);
    }

    printRootToLeafBuilder(node.left, level, ret);
    printRootToLeafBuilder(node.right, level, ret);
}

// Time Complexity: O(n)