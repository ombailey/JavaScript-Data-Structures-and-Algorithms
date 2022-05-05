function checkCashRegister(price, cash, cid) {
    let change = cash-price.toFixed(2);
    const currency = [.01, .05, .10, .25, 1, 5, 10, 20, 100];
    let result = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

// Total of the Draw
let sum_draw = 0;
for (let unit of cid){
sum_draw += unit[1];
}    
// Check to see if change and draw are equal
if (change === sum_draw){
    return {status: "CLOSED", change:cid};
}

    for (let unit = currency.length-1;unit>=0;unit--){
        while (change > 0){
            if (change >= currency[unit] && cid[unit][1].toFixed(2) > 0){
                change -= currency[unit];
                change = (change.toFixed(2));
                result[unit][1] += currency[unit];
                cid[unit][1] -= currency[unit];
            } else {
                break;
            }
        }
    } 

    
    result = result.filter(item => item[1] > 0).reverse();
    if (change > 0){
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
        return { status: "OPEN", change: result};
    }
} 
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));