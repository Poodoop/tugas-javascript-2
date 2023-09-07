//Bagian Function
function randomNumber(max) {
    return Math.floor((Math.random() * max) + 1)
}

function split(arrSplit, arr1, arr2){
    for (x in arrSplit) {
        if ((arrSplit[x] % 2) !== 0) {
            arr1.push(arrSplit[x])
        } else if ((arrSplit[x] % 2) === 0) {
            arr2.push(arrSplit[x])
        }
    }
}

function min(arr) {
    if (arr.length === 0) {
        return undefined
    }

    let arrMin = arr[0]

    arr.forEach(function (x) {
        if (x < arrMin) {
            arrMin = x
        }
    })

    return arrMin;
}

function max(arr){
    if (arr.length === 0) {
        return undefined
    }

    let arrMax = arr[0]

    arr.forEach(function (x) {
        if (x > arrMax) {
            arrMax = x
        }
    })

    return arrMax;
}

function total(arr){
    if (arr.length === 0) {
        return undefined
    }

    let arrTotal = 0

    arr.forEach(function (x) {
        arrTotal += x
    })

    return arrTotal
}

function average(arr) {
    if (arr.length === 0) {
        return undefined
    }

    let sum = 0;

    arr.forEach(function (x) {
        sum += x;
    });

    return sum / arr.length;
}

//Bagian Output
let arr = []
let arrGanjil = []
let arrGenap = []

for (let i = 0 ; i < 100 ; i++ ){
    arr[i] = randomNumber(50)
}

console.log("Array = ["+arr.toString()+"] \n")

split(arr, arrGanjil, arrGenap)

console.log("Array Ganjil = ["+arrGanjil.toString()+"] \n")

console.log("Array Genap = ["+arrGenap.toString()+"] \n")

let minGanjil = min(arrGanjil)
let maxGanjil = max(arrGanjil)
let totalGanjil = total(arrGanjil)
let averageGanjil = average(arrGanjil)

console.log("Min Array Ganjil = ["+minGanjil+"]")
console.log("Max Array Ganjil = ["+maxGanjil+"]")
console.log("Total Array Ganjil = ["+totalGanjil+"]")
console.log("Average Array Ganjil = ["+averageGanjil+"] \n")

let minGenap = min(arrGenap)
let maxGenap = max(arrGenap)
let totalGenap = total(arrGenap)
let averageGenap = average(arrGenap)

console.log("Min Array Genap = ["+minGenap+"]")
console.log("Max Array Genap = ["+maxGenap+"]")
console.log("Total Array Genap = ["+totalGenap+"]")
console.log("Average Array Genap = ["+averageGenap+"] \n")

if(minGanjil === minGenap){
    console.log("Min memiliki nilai yang sama antara array ganjil dan genap")
}else if(minGanjil < minGenap){
    console.log("Min lebih besar array genap")
}else{
    console.log("Min lebih besar array ganjil")
}

if(maxGanjil === maxGenap){
    console.log("Max memiliki nilai yang sama antara array ganjil dan genap")
}else if(maxGanjil < maxGenap){
    console.log("Max lebih besar array genap")
}else{
    console.log("Max lebih besar array ganjil")
}

if(totalGanjil === totalGenap){
    console.log("Total memiliki nilai yang sama antara array ganjil dan genap")
}else if(totalGanjil < totalGenap){
    console.log("Total lebih besar array genap")
}else{
    console.log("Total lebih besar array ganjil")
}

if(averageGanjil === averageGenap){
    console.log("Average memiliki nilai yang sama antara array ganjil dan genap")
}else if(averageGanjil < averageGenap){
    console.log("Average lebih besar array genap")
}else{
    console.log("Average lebih besar array ganjil")
}
