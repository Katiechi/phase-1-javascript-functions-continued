// code your solution here
function saturdayFun(activity){
    if(typeof activity === "string"){
        return `This Saturday, I want to ${activity}!`
    }
    else{
        return `This Saturday, I want to roller-skate!`
    }
    
}
console.log(saturdayFun(" make music"))

function mondayWork(parameter){
    if(typeof parameter === 'string'){
        return `This Monday, I will ${parameter}.`
    }
    else{
        return "This Monday, I will go to the office."
    }
}
console.log(mondayWork('work from home.'))


function wrapAdjective(result){
    const message = function (emphatic){
        if(result === '*'){
            return `You are ${result}${emphatic}${result}!`
        }
        else if(result === '||'){
            return `You are ${result}${emphatic}${result}!`
        }

    }
    return message
}

console.log(wrapAdjective("*")("a hard worker"))