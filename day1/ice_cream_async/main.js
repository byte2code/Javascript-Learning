'use strict';
// here stocks is an Object, having Fruits, Liquid as a Property with their
// respective Property Value
// Object also contains methods 
let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    Liquid: ['water', 'ice'],
    Holder: ['cone', 'cup', 'stick'],
    Toppings: ['chocolate', 'peanuts']
};

let orders = (fruitName, callProduction) => {
    setTimeout(() =>{
        console.log(`${stocks.Fruits[fruitName]} was selected.`);
        // placed production in setTimeout so that production start
        // only after the orders completed
        // else production will start before orders
        callProduction(fruitName);
    }, 2000);
}
// =======================================
//              work chart
// work                         time
// place order                  2000ms
// cut the fruit                2000ms
// add water and ice            1000ms
// start the machine            1000ms
// select container             2000ms
// select toppings              3000ms
// serve ice cream              20000ms


// ----------------------------------------
//          example of callback hell

// let production = (fruitName) => {
//     setTimeout(() =>{
//         console.log(`production has started`);
//         setTimeout(() =>{
//             console.log(`the ${stocks.Fruits[fruitName]} has been chooped`);
//             setTimeout(() =>{
//                 console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`);
//                 setTimeout(() =>{
//                     console.log(`the machine was started`);
//                     setTimeout(() =>{
//                         console.log(`the icecream was added on ${stocks.Holder[0]}`);
//                         setTimeout(() =>{
//                             console.log(`${stocks.Toppings[0]} was added on icecream`);
//                             setTimeout(() =>{
//                                 console.log(`serving icecream`)
//                             }, 1000)
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 2000);
//     }, 1);
// }
// orders(1, production);

//  ----------------------------------------
// Promise => Resolve or Reject
// Resolve => .then => .then (chains for the work)
// Resolve follow resolve and then return return so on
// Reject => .catch (error handler)
// finally => it will work anyway


let is_shop_open = true;

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
        
//         if(is_shop_open){
            
//             setTimeout(() =>{
//                 resolve(work());
//             }, time);

//         } else{
//             reject(console.log("Shop is close. Come back later."))
//         }
//     });
// }

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
// .then(()=>{
//     return order(2000, ()=>console.log(`the fruit has been chopped`))
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`))
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`the machine has started`))
// })
// .then(()=>{
//     return order(2000, ()=>console.log(`the icecream was added on ${stocks.Holder[0]}`))
// })
// .then(()=>{
//     return order(3000, ()=>console.log(`${stocks.Toppings[1]} was added on icecream`))
// })
// .then(()=>{
//     return order(2000, ()=>console.log(`serving the icecream`))
// })

// .catch(()=>{
//     console.log('the customer has returned')
// })
// we can specify arrow function without curly braces if statement 
// ends in single line
// finally will work either resolve or reject run or not
// .finally(() => console.log('our shop is closed, day ended'))



// async await

function time(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms);
        } else {
            reject(console.log("shop is closed"));
        }
    })
}

async function kitchen(){
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(2000)
        console.log(`the fruit has been chopped`)

        await time(1000)
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)

        await time(1000)
        console.log(`the machine has started`)

        await time(2000)
        console.log(`the icecream was added on ${stocks.Holder[0]}`)

        await time(3000)
        console.log(`${stocks.Toppings[1]} was added on icecream`)

        await time(2000)
        console.log(`serving the icecream`)

    } catch (error) {
        console.log("Customer has left", error);

    } finally{
        console.log("our shop is closed, day ended");
    }
}

kitchen();