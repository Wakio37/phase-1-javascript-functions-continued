// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

console.log(saturdayFun("play soccer"))


function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork("I will work from home"))


function wrapAdjective(highlight){
    return function inner(message = "special"){
        return `You are ${highlight}${message}${highlight}!`
    }

}

console.log(wrapAdjective("*")("message"))
