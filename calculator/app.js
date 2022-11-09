
function getVal(event){
    let screen = document.getElementById('screen')

    let val = event.target
    screen.value += val.innerHTML
}


function Answer(){
    let screen = document.getElementById('screen')
    console.log(screen.value);
    let CalculatedResult = eval(screen.value)
    console.log(CalculatedResult);
    screen.value = CalculatedResult
}

function clear(){
    let screen = document.getElementById('screen')
    screen.value  = '0'
}