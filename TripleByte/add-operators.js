/*
 Given a string of numbers, you can interpolate basic operations (+, -, * and /) to create an equation
 that can be evaluated using simple math.

 Given a string of numbers and a value,
 write a method that prints all of the equations that
 can be generated using that string that evaluate to the given value.

 ex- f("323",3) will print out "3 * 2 - 3"
 */
function main(input, target) {
    var ret = [];
    var visited = new Array(input.length).fill(false);

    for (var i = 0; i < input.length; i++) {
        if (mainBuilder(input, ret, "", i, 0, target, visited)) {
            break;
        }
    }

    return ret;
}

function mainBuilder(input, ret, item, i, result, target, visited) {
    if (result === target && i === input.length) {
        ret.push(item);
        return true;
    }

    if (i >= input.length || visited[i]) {
        return false;
    }

    visited[i] = true;
    var ret =
        mainBuilder(input, ret, i === 0 ? input[i] : item + " + " + input[i], i + 1, result + parseInt(input[i]), target, visited) ||
        mainBuilder(input, ret, i === 0 ? input[i] : item + " - " + input[i], i + 1, result - parseInt(input[i]), target, visited) ||
        mainBuilder(input, ret, i === 0 ? input[i] : item + " * " + input[i], i + 1, result * parseInt(input[i]), target, visited) ||
        mainBuilder(input, ret, i === 0 ? input[i] : item + " / " + input[i], i + 1, result / parseInt(input[i]), target, visited);
    visited[i] = false;

    return ret;
}

$('#container').html(main("323", 3));