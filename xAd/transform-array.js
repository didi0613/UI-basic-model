/*
 定义两个变换
 (1) (x, y) -> (x, x + y)
 (2) (x, y) -> (x+y, y) 变换可以使用任意多次，顺序也无所谓
 问 (a, b) 能不能经过上面的变换变成(c, d), 比如 (1, 3) -> (1, 4) -> (5, 4) 所以 (1, 3) 就可以变成(5, 4)
 * */

function transform(start, target) {
    if (start[0] > target[0] || start[1] > target[1]) {
        return false;
    }
    if (target[0] === start[0] && target[1] === start[1]) {
        return true;
    }

    return transform([start[0], start[0] + start[1]], target) || transform([start[0] + start[1], start[0]], target);
}

console.log(transform([1, 3], [5, 4]));