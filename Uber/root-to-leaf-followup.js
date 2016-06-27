// Print root to leaf nodes
// Consider if path contains cycle
function printRootToLeaf(root) {
    var ret = [];
    printRootToLeafBuilder(root, [], [], ret);
    return ret;
}

function printRootToLeafBuilder(node, visited, level, ret) {
    if (node === null) {
        return;
    }

    // Cycle Detected
    if (visited.contains(node)) {
        ret.push(level);
        return;
    } else {
        level.push(node.val);
        visited.push(node);
    }

    if (node.left === null && node.right === null) {
        ret.push(level);
    }

    printRootToLeafBuilder(node.left, level, ret);
    printRootToLeafBuilder(node.right, level, ret);
}

// Time Complexity: O(n)