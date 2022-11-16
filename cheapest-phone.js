const phones = [
    {name: "Samsung", price: 20000, Ram: "8GB", Camera: 42},
    {name: "Nokia", price: 8000, Ram: "8GB", Camera: 10},
    {name: "HTC", price: 16000, Ram: "4GB", Camera: 20},
    {name: "Symphony", price: 19000, Ram: "8GB", Camera: 20},
    {name: "i Phone 14 Pro", price: 160000, Ram: "32GB", Camera: 128},
    {name: "Oppo", price: 25000, Ram: "8GB", Camera: 20},
    {name: "Xoami", price: 21000, Ram: "16GB", Camera: 20}
]

let cheapest = phones[0];
for(const phone of phones){
    if(cheapest.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);