function sayMName() {
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("A");
}
//sayMName()

// function addTwoNumbers(number1, number2) {
//      console.log(number1+number2);
// }
//addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2) {
        
    // let result = number1 + number2
    // return result
    return number1 + number2
    
    }
    const result = addTwoNumbers(3, 5)
    console.log("Result", result);


    function loginUSerMessage(username ="sam"){
        if(username === undefined){
            console.log("Please enter username");
            return

        }
        return `${username} just logged in`
    }
    //console.log(loginUSerMessage("Raja"))
    console.log(loginUSerMessage("Raja"))



    function calculateCartPrice(...num1){
        return num1
    }
    console.log(calculateCartPrice(200, 400 ,500));

    const user = {
        username: "raja",
        price: 199
    }


    function handleObject(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);


    }

    handleObject(user)



    const myNewArray = [200,300,500,600]

    function returnSecondValue(getArray){
        return getArray[0]
    }
    console.log(returnSecondValue(myNewArray));