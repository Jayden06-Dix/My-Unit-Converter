/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("number");
const convertBtn = document.getElementById("converter-btn");
const lengthInput = document.getElementById("length-input");
const volumeInput = document.getElementById("volume-input");
const massInput = document.getElementById("mass-input");

const meters_to_feet = 3.281;  
const liters_to_gallons = 0.264;
const kilogram_to_pounds = 2.204;

function renderConversions() {
    const baseValue = parseFloat(inputEl.value);
    
    if (isNaN(baseValue)) {
        lengthInput.textContent = "Enter a value";
        volumeInput.textContent = "Enter a value";
        massInput.textContent = "Enter a value";
        return;
    }
    
    const feet = (baseValue * meters_to_feet).toFixed(3);
    const meters = (baseValue / meters_to_feet).toFixed(3);
    lengthInput.textContent = `${baseValue} meters = ${feet} feet | ${baseValue} feet = ${meters} meters`;
    
    const liters = (baseValue * liters_to_gallons).toFixed(3);
    const gallons = (baseValue / liters_to_gallons).toFixed(3);
    volumeInput.textContent = `${baseValue} liters = ${gallons} gallons | ${baseValue} gallons = ${liters} liters`;
    
    // --- Mass Calculations (Fixed) ---
    const pounds = (baseValue * kilogram_to_pounds).toFixed(3); // Multiplication gives pounds
    const kilograms = (baseValue / kilogram_to_pounds).toFixed(3); // Division gives kilograms
    massInput.textContent = `${baseValue} kilograms = ${pounds} pounds | ${baseValue} pounds = ${kilograms} kilograms`;

}

convertBtn.addEventListener("click", renderConversions);