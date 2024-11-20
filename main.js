//function to display content 
function displayContent(content){
    result.value +=content
}

//clear input
function calcClear(){
    result.value=""
}

function calcOutput(){
    result.value = eval(result.value)
}
function removeLastDigit(){
    result.value = result.value.slice(0,-1)
}