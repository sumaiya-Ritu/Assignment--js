function seerToMon(seer) {
    if (seer <= 0) {
        return "Value Can't be 0 or negative"
    }
    return seer / 40
}

function totalSales(shirt, pants, shoes) {
    if (shirt <= 0 || pants <= 0 || shoes <= 0) {
        return "Value Can't be 0 or negative"
    }
    return 100 * shirt + 200 * pants + 500 * shoes
}

function deliveryCost(count) {
    if (count <= 0) {
        return "Value Can't be 0 or negative"
    }
    else if (count <= 100) {
        return 100
    }
    else if (count <= 200) {
        return 180
    }
    else {
        return 180 + 50 * (Math.ceil((count - 300) / 100));
    }
}

function perfectFriend(friends) {
    if (typeof friends !== 'object') {
        return "Please Input an Array"
    }
    for (const friend of friends) {
        if (friend.length == 5) {
            return friend;
        }
    }
}

let friends = ['hello', 'world', 'dhrubo', 'sarah'];

console.log(perfectFriend(friends))
// console.log(seerToMon(0));
// console.log(totalSales(1, 5, 1));
// console.log(deliveryCost(400));