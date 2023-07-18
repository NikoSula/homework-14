// პირველი დავალება

const numberArrays=[2,4,6,8,10,12]

const removeLast=numberArrays.pop();
numberArrays.unshift(removeLast);

console.log(numberArrays);



// მეორე დავალება 

const guitars = [
    {
        productTitle: "ibanez",
        productPrice: 500,
    },

    {
        productTitle: "warlock",
        productPrice: 700,
    },

    {
        productTitle: "gibson",
        productPrice: 1200,
    },
]



// მესამე დავალება

const fiveNumbers = [2,6,14,22,16]
const numbOfNumbers = fiveNumbers.length;
const sum = 60;
const average = sum / numbOfNumbers;

console.log(average);



// მეოთხე დავალება

const mobile = {
    phoneName: "Xiaomi",
    phoneDescription: "large",
    phonePrice: 1000,
    shopAddress: "xiaomi.com.ge",
    phoneMemoryInGb:1000,
};



// მეხუთე დავალება


console.log(`Phone name is ${mobile.phoneName},phone price is ${mobile.phonePrice} and you can buy it at ${mobile.shopAddress}.`)
