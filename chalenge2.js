function chalenge2(obj) {
    array = obj.array;
    let negativeEnd =-1;
    let zeroStart = -1;
    let zeroEnd = -1;
    let positiveStart = -1;

    for (let i = 0; i < array.length; i++) {
        let number = array[i]
        if (number < 0) {
            if (negativeEnd == -1) {
               negativeEnd = i; 
            }
            else {
                negativeEnd++;
            }
        }
        else if (number > 0) {
            positiveStart = i;
            break;
        }
        else {
            if (zeroStart != -1) {
                zeroStart = i;
                zeroEnd = i;
            }
            else {
                zeroEnd++;
            }
        }
    }

    // console.log(negativeEnd);
    // console.log(zeroStart);
    // console.log(zeroEnd);
    // console.log(positiveStart);

    let result  = [];

    for (let z = zeroStart; z < zeroEnd; z++) {
        result.push(0);
    }

    let positiveCurr = positiveStart;
    let negativeCurr = negativeEnd;

    while (negativeCurr >= 0 || (positiveCurr != -1  && positiveCurr < array.length)) {
        let negative = negativeCurr != -1 ? array[negativeCurr] : undefined;
        let positive = positiveCurr != -1 ? array[positiveCurr] : undefined;

        let absNegative = negative !== undefined ? Math.abs(negative) : undefined;

        if (positive === undefined || positive > absNegative) {
            result.push(absNegative * absNegative)
            negativeCurr--;
            // console.log("OK1", negativeCurr, positiveCurr);
        }
        else if (negative === undefined || absNegative > positive) {
            result.push(positive * positive)
            positiveCurr++;
            // console.log("OK2", negativeCurr, positiveCurr);
        }
        else {
            result.push(positive * positive);
            if (negativeCurr >= 0) {
                negativeCurr--;  
            }
            else {
                positiveCurr++;
            }
            // console.log("OK3", negativeCurr, positiveCurr);
        }
    }

    return result;
}

const sample1 = {
    "array": [1, 2, 3, 5, 6, 8, 9]
};
console.log(chalenge2(sample1));

const sample2 = {
    "array": [-2, -1]
};
console.log(chalenge2(sample2));

const sample3 = {
    "array": [-10, -5, 0, 5, 10]
};
console.log(chalenge2(sample3));