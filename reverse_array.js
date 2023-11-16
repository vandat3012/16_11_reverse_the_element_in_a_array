let array = [1,2,2,2,3,4,5,6,7];
let first = 0;
let last = array.length - 1;
while (first < last) {
    let b = array[first];
    array[first] = array[last];
    array[last] = b;
    first++;
    last--;
}
document.write(array);