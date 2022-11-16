/*
১. টেবিল এর জন্য কাঠ লাগবে = 3cft
২. চেয়ারের জন্য কাঠ লাগবে = 10 cft
৩. খাটের জন্য কাঠ লাগবে = 50 cft
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const totalWoodCalculation = woodCalculator(1, 1, 1);
console.log(totalWoodCalculation);