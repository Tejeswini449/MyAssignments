function userProfile(name)  //function declaration
{
    console.log(`Hello ${name}`)
}
userProfile("Teju")

const double = (number) => {  //Arrow function
    return number * 2
}
console.log(double(5))

setTimeout(function()  //Anonymous function with setTimeout function(inbuilt java function)
{
    console.log("This message is delayed by 2 seconds")
},2000)


function getUserdata(callback)
{
    setTimeout(() => {
        const userDetail = {
            userName: "Teju",
            userAge: 26       
        }
        callback(userDetail)
    },3000)
    
}

function outputData(userDetail)
{
 console.log(`User name is ${userDetail.userName} and Age is ${userDetail.userAge}`)
}
getUserdata(outputData)
