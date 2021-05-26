let nums = document.querySelectorAll('.btn_key_num');
let displayInfo = document.getElementById('displayInfo');
let oper = document.querySelectorAll('.btn_key_oper')

//вводит данные 
for(let y=0; y<nums.length;y++){
    nums[y].addEventListener("click",()=>{
    displayInfo.innerText += +nums[y].value;
    });
}

for(let i=0;i<oper.length;i++){
    oper[i].addEventListener("click", ()=>{
        displayInfo.innerHTML += oper[i].value;
    });
}

function clearValue() {
    return displayInfo.innerText = " ";
    
}

function calcValue() {
   return  displayInfo.innerHTML=eval(displayInfo.innerText);
    
}


