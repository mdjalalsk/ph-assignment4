function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Invalid input!,Please provide a number."
    } else {
        let result =Math.pow(number,3);
        return result;
    }
}


function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {

        return "Invalid input!.Both inputs must be strings."
    }
    else {
        if (string1.includes(string2)) {
            return true;
        } else {
            return false;
        }
    }
}


function sortMaker(arr) {
    let number1 = arr[0];
    let number2 = arr[1];

    if (number1 < 0 || number2 < 0) {
        return "Invalid Input";
    }
    else {
        if (number1 === number2) {
            return "equal"
        }
        else{
            return arr.sort((a, b) => b - a);
        }
        
    }
}

function findAddress(obj) {
    let street = obj.street || '__';
    let house = obj.house || '__';
    let society = obj.society || '__';

    return street + "," + house + "," + society;
}


function canPay(changeArray, totalDue) {

    if (changeArray.length === 0) {
        return "This array has no elements, please provide some elements.";
    }
    else {

        let sum = 0;
        for (let element of changeArray) {
            sum += element;
        }

        if (sum > totalDue) {
            return true;
        }
        else
            return false;

    }
}