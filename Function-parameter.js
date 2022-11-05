function bringMango(taka){
    var mangoPrice = 10;
    var mangoQuantity = taka / mangoPrice;
    return mangoQuantity;
}

var money = 200;
var totalMango = bringMango(money);
console.log( 'মামা ! এই যে নেন আপনার', totalMango , ' টা সিঙ্গারা');
