
function chalenge1(coins) {
    // const sorted_coins = coins.sort(compare);
    let amount = 1;
    while (can(coins, amount)) {
        console.log(amount);
        amount++;
    }
    return amount;
}

function can(coins, value) {

    for (let k = 0; k < coins.length; k++) {
        let amount = 0;
        for (let i = k; i < coins.length; i++) {
            for (let j = 0; j < 2; j++) {
                if (j == 1) {
                    amount += coins[i];
                    if (amount === value) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

// function compare(a, b) {
//     return a - b;
// }

coins = [5, 7, 1, 1, 2, 3, 22]
console.log(chalenge1(coins))