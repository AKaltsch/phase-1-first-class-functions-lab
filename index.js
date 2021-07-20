// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
    return [arr[0], arr[1]];
}

const returnLastTwoDrivers = function (arr) {
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function (fare) { 
        return fare * multiplier };
}

const fareDoubler = createFareMultiplier(2)

const fareQuintupler = createFareMultiplier(5)

const fareTripler = createFareMultiplier(3)

console.log(fareQuintupler)

console.log(fareQuintupler(5))

// function fareDoubler(fare) {

//     return doubler()(fare)
// }

function selectDifferentDrivers(arr, func) {
    return func(arr)
}