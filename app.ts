window.addEventListener('DOMContentLoaded',()=>{
    let num1Element=document.getElementById('num1') as HTMLInputElement;
    let num2Element=document.getElementById('num2') as HTMLInputElement;
    let buttonElement =document.querySelector('button');
    buttonElement.addEventListener('click',()=>{
        const num1=num1Element.value;
        const num2=num2Element.value;
        const result=add(+num1,+num2);
    
        console.log(result);
        
    })

})

function add(num1: number |string,num2: number| string){
    if(typeof num1==='number' && typeof num2==='number'){
        return num1+num2;
    }
    else if(typeof num1==='string' && typeof num2==='string'){
        return num1 +' '+ num2;
    } else{
        return +num1 + +num2;
    }

}

