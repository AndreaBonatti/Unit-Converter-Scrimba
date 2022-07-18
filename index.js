/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const meterFeet = document.getElementById("meter-feet")
const litersGallons = document.getElementById("liters-gallons")
const kilogramsPounds = document.getElementById("kilograms-pounds")
convertBtn.addEventListener("click", function () {
    let number = document.getElementById("number-input").value
    let feetToMeters = number / 3.281
    let metersToFeet = number * 3.281
    let litersToGallons = number * 0.264
    let gallonsToLiters = number / 0.264
    let kilosToPounds = number * 2.204
    let poundsToKilos = number / 2.204

    //console.log(`${number} meters = ${metersToFeet.toFixed(3)} feet | ${number} feet = ${feetToMeters.toFixed(3)} meters`)
    meterFeet.textContent = `${number} meters = ${metersToFeet.toFixed(3)} feet | ${number} feet = ${feetToMeters.toFixed(3)} meters`
    //console.log(`${number} liters = ${litersToGallons.toFixed(3)} gallons | ${number} gallons = ${gallonsToLiters.toFixed(3)} liters`)
    litersGallons.textContent = `${number} liters = ${litersToGallons.toFixed(3)} gallons | ${number} gallons = ${gallonsToLiters.toFixed(3)} liters`
    //console.log(`${number} kilos = 44.092 ${kilosToPounds.toFixed(3)} | ${number} pounds = ${poundsToKilos.toFixed(3)} kilos`)
    kilogramsPounds.textContent = `${number} kilos = 44.092 ${kilosToPounds.toFixed(3)} | ${number} pounds = ${poundsToKilos.toFixed(3)} kilos`
})