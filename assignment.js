// Problem 1 

function seerToMon(seer) {
    // error message
    if (seer < 0) {
        return 'Negative value not acceptable';
    }
    else {
        var mon = seer / 40;
        return mon;

    }
}
var newSeer = 40;
var mon = seerToMon(newSeer);
console.log(mon);

// problem 1 ends


// Problem 2 starts
function totalSales(shirt, pant, shoe) {
    if ((shirt < 0) || (pant < 0) || (shoe < 0)) {
        return 'Negative value not permitted';
    }
    else {
        let shirtPrice = 100;
        let pantPrice = 200;
        let shoePrice = 500;

        let shirtPriceMultiply = shirtPrice * shirt;
        let pantPriceMultiply = pantPrice * pant;
        let shoePriceMultiply = shoePrice * shoe;

        let totalPrice = shirtPriceMultiply + pantPriceMultiply + shoePriceMultiply;

        return totalPrice;
    }
}
let finalSales = totalSales(1, 0, 1);
console.log(finalSales);

// problem 2 ends


// Problem 3 starts
function deliveryCost(deliveryQuantity) {
    const deliveryCost1to100 = 100;
    const deliveryCost101To200 = 80;
    const deliveryCost201ToAbove = 50;

    // error message
    if (deliveryQuantity <= 0) {
        return 'error:you cannot procced';
    }
    else if (deliveryQuantity % 1 != 0) {
        return 'error:Delivery Quantity should be an integer number';
    }
    else if (deliveryQuantity <= 100) {
        const totalDeliveryCost = deliveryQuantity * deliveryCost1to100;
        return totalDeliveryCost;
    }
    else if (deliveryQuantity <= 200) {
        const totalDeliveryCost1To100 = 100 * deliveryCost1to100;
        const totalDeliveryCost101To200 = (deliveryQuantity - 100) * deliveryCost101To200;
        const totalDeliveryCost = totalDeliveryCost1To100 + totalDeliveryCost101To200;
        return totalDeliveryCost;
    }
    else {
        const totalDeliveryCost1To100 = 100 * deliveryCost1to100;
        const totalDeliveryCost101To200 = 100 * deliveryCost101To200;
        const totalDeliveryCost201ToAbove = (deliveryQuantity - 200) * deliveryCost201ToAbove;
        return totalDeliveryCost = totalDeliveryCost1To100 + totalDeliveryCost101To200 + totalDeliveryCost201ToAbove;
    }
}
const totalDeliveryCostCharge = deliveryCost(40);
console.log(totalDeliveryCostCharge);

// problem 3 ends


// problem 4 starts

let friends = ['ritu', 'sarah', 'promi', 'prokrity', 'shamrat', 'zubayer'];
function perfectFriend(friend) {
    // error messsage
    if (typeof friend !== 'object') {
        return "Please Input an Array";
    }
    for (let i = 0; i < friends.length; i++) {
        if (friend[i].length == 5) {
            return friend[i];
        }
    }
}
let fiveCharaterdFriend = perfectFriend(friends);
console.log(fiveCharaterdFriend);

// problem 4 ends