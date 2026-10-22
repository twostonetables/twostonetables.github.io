/*
1 meter = 3.281 feet
1 litre = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")
let lengthString = document.getElementById("length-string")
let volumeString = document.getElementById("volume-string")
let massString = document.getElementById("mass-string")
const foot = 3.281 
const meter = 1
const kg = 1
const pound = 2.204
const litre = 1
const gallon = 0.264

const meterFoot = meter * foot
const litreGallon = litre * gallon
const kgPound = kg * pound
console.log()

convertBtn.addEventListener("click", function(){
    
    
    lengthString.innerHTML = `<p class="length-string"> ${userInput.value} meters = ${ (userInput.value * meterFoot).toFixed(2) } feet | ${userInput.value} feet = ${(userInput.value / foot).toFixed(2)} meters </p>`
    
    volumeString.innerHTML = `<p class="volume-string"> ${userInput.value} liters = ${ (userInput.value * litreGallon).toFixed(2) } gallons | ${userInput.value} gallons = ${(userInput.value / gallon).toFixed(2)} liters </p>`
    
    massString.innerHTML = `<p class="mass-string"> ${userInput.value} kilograms = ${ (userInput.value * kgPound).toFixed(2) } pounds | ${userInput.value} pounds = ${(userInput.value / pound).toFixed(2)} kilograms </p>`

})

function renderVolString(){
    volumeString.innerHTML = `<p class="volume-string"> ${userInput.value} liters = 5.28 gallons | ${userInput.value} gallons = 3.785 liters </p>`
}

//let lengthConversion =  `${userInput.value} meters = ${userInput * meterFoot}| ${userInput.value} feet = ${userInput.value / foot}`


