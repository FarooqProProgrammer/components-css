let input = document.getElementById("input")
let toggle = document.getElementById("toggle")

document.getElementById("toggle").addEventListener("click",()=>{

    console.log(input.value);

    let originalVal = input.value
    
    let flag = 0
    if(flag == 0){
        let hide = ''
        for(let i=0;i<input.value.length;i++){
            hide+='*'
        }
        input.value = hide
        flag = 1
    }
    else if(flag == 1){
        input.value = originalVal
        flag = 0
    }
})
