//1. РЕШЕНИЕ c forEach
let arr = ['hello', 'world', 23, '23', null, true];
let newArr = [];
function filterBy(array, type) {
    array.forEach(function (item) {
        if (typeof item !== type) {
            newArr.push(item);
        }
        }
    );
    return newArr;
}
console.log(filterBy(arr, 'string'));

//2. РЕШЕНИЕ ЧЕРЕЗ ЦИКЛ
/*let arr = ['hello', 'world', 23, '23', null, true];
let newArr = [];
function filterBy(array, type) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== type) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
console.log(filterBy(arr, 'number'));*/
