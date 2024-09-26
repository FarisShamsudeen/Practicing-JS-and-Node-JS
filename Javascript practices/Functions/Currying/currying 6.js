function checkMinAge(minAge){
    return function (theAge){
        if (theAge>=minAge) {
            return true
        } else {
            return false            
        }
    }
}

const check18 = checkMinAge(18);
console.log(check18(20));  // Output: true
console.log(check18(16));  // Output: false