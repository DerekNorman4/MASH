function mash() {
    return 'You will live in a ' + getHome() + ', and you will have ' + getChildrenCount() + ' Kids!' + ", and you'll drive a " + getCar() + ".";
}
const mashResult = mash();
console.log(mashResult);

function getHome() {
    let getHomeArr = ['Mansion', 'Apartment', 'Shack', 'House', 'Dumpster'];
    if (process.argv[2] == null) {
        
        const randomString = getHomeArr[Math.floor(Math.random() * getHomeArr.length)];
        return randomString;

} else {
   
    let input = process.argv[2];
    return input;
}
}


function getChildrenCount() {
    const decimal = Math.random();
    const times101 = decimal * 101;
    const final = Math.floor(times101);
    if (Math.random <= .5) {

        let kidNumberInput = process.argv[3]
        return kidNumberInput;

    } else {

    
        return final;

    }
}

function getCar() {
    if (process.argv[4] == null) {
    let carArr = ['Ferrari', 'Lambo', 'Ford', 'Toyota'];
    let randomGetCar = carArr[Math.floor(Math.random() * carArr.length)];
    return randomGetCar;
    } else {
        let getCarInput = process.argv[4];
        return getCarInput;
    }
}

 
    