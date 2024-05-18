// A callback is basically calling a function inside another function or 
//in other words, passing a function as an argument to another function

//example below

const buy = (pay_callback) => {
    console.log("buying a car")
    pay_callback()
}

const pay = () => {
    console.log("paying for the car")
}

buy (pay)


//the functions are working correctly
//now to the callback function

//it is evident that the pay function has been passed as an argument to the buy function 
//the code therefore executes 'buying a car' and then 'paying for the car' due to the callback