const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
    return array.slice(array.length - 2, array.length)
}

let selectingDrivers = new Array();

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult) {
    return function(val) {
        return(mult * val);
    }
}

const fareDoubler = function(val) {
    return(createFareMultiplier(2)(val));
}

const fareTripler = function(val) {
    return(createFareMultiplier(3)(val));
}

function selectDifferentDrivers(array, funct) {
    return funct(array);
}