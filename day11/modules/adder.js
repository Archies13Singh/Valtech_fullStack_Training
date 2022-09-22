
function multiplier(num1, num2){
    return num1*num2;
}

function adder(num1, num2){
    return num1 + multiplier(num1,num2)
}

function division(num1, num2){
    return  multiplier(num1,num2) / 2
}

// named
// export {adder as add} 


// export default adder   ,,, can import it by any name without curly braces

export default adder
export {multiplier as mult , division as div}