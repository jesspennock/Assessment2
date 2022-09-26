///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((previousValue, currentValue) => {return previousValue + currentValue.price}, 0)

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (carTotal, couponValue, tax)=> {
   return (carTotal +  (carTotal * tax)) - couponValue 
}

console.log(calcFinalPrice(20000, 1000, .06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
Customer properties will include Name- so the customer can pick up their order, string data type, you would expect your customer to enter letters for this value
phone number, may be required for a frequent customer card- also so the customer can be contacted with any questions, data type would be number since it's a phone number
Order Pick up Time, so customer and restaurant timing are aligned, number input (2400 clock time format would account for am and pm)
Delivery or Pickup, important to know how the customer expects to get their food, boolean value
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
customerProperties= {
    name: "Jessica P",
    phone: 8011234567,
    pickupTime: 1200,
    delivery: true
}

console.log(customerProperties)