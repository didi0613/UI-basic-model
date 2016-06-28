// We break the problem in 3 parts:
//     1. Print the left boundary in top-down manner.
// 2. Print all leaf nodes from left to right, which can again be sub-divided into two sub-parts:
// …..2.1 Print all leaf nodes of left sub-tree from left to right.
// …..2.2 Print all leaf nodes of right subtree from left to right.
// 3. Print the right boundary in bottom-up manner.
//
// We need to take care of one thing that nodes are not printed again.
// e.g. The left most node is also the leaf node of the tree.
function printBoundary(root) {
    var ret = [];
    if (root) {
        ret.push(root.val);
        printBoundaryLeft(root.left, ret);
        printLeaves(root.left, ret);
        printLeaves(root.right, ret);
        printBoundaryRight(root.right, ret);
    }

    return ret;
}

function printBoundaryLeft(node, ret) {
    if (node) {
        if (node.left) {
            ret.push(node.left.val);
        } else if (node.right) {
            ret.push(node.right.val);
        }
        // do nothing if it is a leaf node
    }
}

function printBoundaryRight(node, ret) {
    if (node) {
        if (node.right) {
            ret.push(node.right.val);
        } else if (node.left) {
            ret.push(node.left.val);
        }
        // do nothing if it is a leaf node
    }
}

function printLeaves(node, ret) {
    if (node) {
        printLeaves(node.left);
        if (node.left === null && node.right === null) {
            ret.push(node.val);
        }
        printLeaves(node.right);
    }
}