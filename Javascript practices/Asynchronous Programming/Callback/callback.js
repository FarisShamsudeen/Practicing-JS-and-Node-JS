// _________________________________________________________________

function myDisplayer(value){
    console.log('The sum is equal '+value);
}

function myCalculator(x, y, myCallback){
    const sum = x + y
    myCallback(sum)
}

myCalculator(5, 6, myDisplayer)

// _________________________________________________________________

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// setTimeout(greet, 2000, 'Faris')

// _________________________________________________________________

// const numbers = [1,2,3,4,5]

// function square(number){
//     console.log(number * number);
// }

// numbers.forEach(square)

// _________________________________________________________________

// function fetchData(callback){
//     setTimeout(()=>{
//         const data = { name: 'Faris', age: 19 }
//         callback(data)
//     }, 1000)
// }

// function processData(fetchedData){
//     console.log(`Name: ${fetchedData.name}, Age: ${fetchedData.age}`);
// }

// fetchData(processData)

// _________________________________________________________________

// function divide(x, y, successCB, failureCB){
//     if(y === 0){
//         failureCB(`Numbers cannot be divided by zeros`)
//     } else {
//         successCB(x / y)    
//     }
// }

// function successMSG(result){
//     console.log(`Result: ${result}`);
// }

// function errorMSG(error){
//     console.error(error)
// }

// divide(10, 0, successMSG, errorMSG)

// _________________________________________________________________

// const ages = [23,45,12,15,47,18,28]

// function isAdult(age){
//     return age>=18
// }

// const adult = ages.filter(isAdult)
// console.log(adult);

// _________________________________________________________________

// const number = [1,2,3,4,5]

// function double(number){
//     return number*2
// }

// const doubled = number.map(double)
// console.log(doubled);

// _________________________________________________________________

// function countdown(n){
//     if(n===0){
//         console.log(`Boooooooommmm!!!`);
//     } else {
//         console.log(n);
//         setTimeout(countdown, 1000, n-1)
//     }
// }

// countdown(5)

// _________________________________________________________________

// const numbers = [234,567,234,23453456,23,34]

// function findMax(arr, displayCB) {
//     const largest = arr.reduce((acc, curr) => {
//         if (acc < curr){
//             acc = curr
//         } 
//         return acc
//     })
//     displayCB(largest)
// }

// function displayMax(value){
//     console.log(`The largest number in this array is ${value}`);
// }

// findMax(numbers, displayMax)

// _________________________________________________________________

// const numbers = [1,2,3,4,5]

// function calculateAverage(arr, averageCB){
//     const sum = arr.reduce((acc, curr) => acc + curr);
//     const avg = sum / arr.length ;
//     averageCB(avg)
// }

// function handleAverage(value) {
//     console.log(`The average of the numbers is ${value}`);
// }

// calculateAverage(numbers, handleAverage)

// _________________________________________________________________

// const numbers = [1,2,3,4,5,345,567,345,54678,423,754]

// function filterEvenNumbers(arr, processCB) {
//      const evenNumbers = arr.filter(i => i % 2 == 0)
//      processCB(evenNumbers)
// }

// function processEvens(value) {
//     console.log(`The Even numbers are : ${value}`);
// }

// filterEvenNumbers(numbers, processEvens);

// _________________________________________________________________

// const userId = {
//     name: 'Faris',
//     age: 19
// }

// function fetchUserData(data, displayCB){
//     setTimeout(() => {
//         displayCB(data)
//     }, 2000)
// }

// function displayProfile(data) {
//     console.log(`Name of the user is ${data.name} and the age of the user is ${data.age}`);
// }

// fetchUserData(userId, displayProfile)

// _________________________________________________________________

// function simulateDownload(fileSize, progressCB, completionCB) {
//     let downloaded = 0;
//     const chunkSize = fileSize / 10

//     const intervalFunc = setInterval(() => {
//         downloaded += chunkSize

//         progressCB(downloaded)

//         if(downloaded >= fileSize){
//             clearInterval(intervalFunc)
//             completionCB()
//         }

//     }, 500)

// }

// function progressCallback(progress) {
//     console.log(`Downloading... ${Math.round(progress/100)}%`);
// }

// function completionCallback() {
//     console.clear();
//     console.log(`You've downloaded the file successfully !!!`);
// }

// simulateDownload(10000, progressCallback, completionCallback)

// _________________________________________________________________

// const array = [12, 23234, 345645367, 734562, 3213, 23]

// function processArrayAsync(arr, asyncCB, displayCB) {
//     asyncCB(arr, displayCB)
// }

// function asyncOperation(array, display) {
//     setTimeout(() => {
//         const result = array.map(element => element * 100);
//         display(result)
//     }, 1000)
// }

// function displayResults(numbers) {
//     console.log(numbers);
// }

// processArrayAsync(array, asyncOperation, displayResults)

// _________________________________________________________________

// function validateAge(x, successCB, errorCB) {
//     let status = (x>18) ? successCB() : errorCB()

// }

// function onSuccess(){
//     console.log(`Your age is valid`);
// }

// function onError(){
//     console.log(`Your age is invalid`);
// }

// validateAge(10, onSuccess, onError)

// _________________________________________________________________


// _________________________________________________________________

