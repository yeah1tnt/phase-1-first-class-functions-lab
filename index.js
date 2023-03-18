// Code your solution in this file!
/*function returnFirstTwoDrivers(array){
    let array2 = array.slice(0,2);
    return array2;
}*/
const returnFirstTwoDrivers = array => array.slice(0,2);

/*function returnLastTwoDrivers(array){
    let array2 = array.slice(-2);
    return array2;
}*/
const returnLastTwoDrivers = array => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

/*function createFareMultiplier(num){
    return function(mul){
        return num*mul};
}*/
const createFareMultiplier = num => mul => num*mul;

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, drivers){
    return drivers(array);
}
