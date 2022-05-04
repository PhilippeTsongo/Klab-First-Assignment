
/* 
   Question 2. As array of product to be bought given 
   names of product and price in dollars 
   below try answer all questions 

   The output is displayed in the index.html file
*/

// NB: I added 3 products in the array in order to illustrate the fourth question
const item = [

    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 20},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},

    // extra products to illustrate the fourth question
    {name: 'IPhone', price: 5},
    {name: 'Bicycle', price: 7},
    {name: 'Techno', price: 4}
];


// All products
for(let i = 0; i < item.length; i++)
{
    document.getElementById("array").innerHTML = JSON.stringify(item,null,2);
}


// 1. Cheapest product
const  cheapProd = item.reduce((prev, curr) => (prev.price < curr.price) ? prev : curr);
document.getElementById("cheapProduct").innerHTML = JSON.stringify(cheapProd);


// 2. More expensive product
const expensiveProd = item.reduce((prev, curr) => (prev.price > curr.price) ? prev : curr);
document.getElementById("expensivePrice").innerHTML = JSON.stringify(expensiveProd);


// sum of all prices
const getSumByKey = (arr, key) => {
    return arr.reduce((acc, curr) => acc + Number(curr[key]), 0)
} 

const total = getSumByKey(item, 'price')
document.getElementById("sum").innerHTML = JSON.stringify(total);


// 2. Removing all the product with the price under 10  
const index = item.findIndex(items => {
    return items.price < 10;
});

let totalNumber = 0;
totalNumber = index;
item.splice(index,totalNumber);
document.getElementById("remove").innerHTML = JSON.stringify(item);