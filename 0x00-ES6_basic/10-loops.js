export default function appendToEachArrayValue(array, appendString) {
    const arr = []
    for (let idx of array) {
        var value = idx;
        arr.push(appendString + value);
    }

    return arr;
}
