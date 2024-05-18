// A callback is basically calling a function inside another function or 
//in other words, passing a function as an argument to another function

//example below

const buy = () => {
    console.log("buying a car")
}

const pay = () => {
    console.log("paying for the car")
}

buy ()
pay ()

//the functions are working correctly