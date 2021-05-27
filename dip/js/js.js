let nums = document.querySelectorAll('.btn_key_num');
let displayInfo = document.getElementById('displayInfo');
let oper = document.querySelectorAll('.btn_key_oper')
let tbl= document.getElementById('tbl')
//вводим данные и добавляем слушетеля  на нажатие  по кнопокам
for(let y=0; y<nums.length;y++){
    nums[y].addEventListener("click",()=>{
    displayInfo.innerText += +nums[y].value;
    });
}

for(let i=0;i<oper.length;i++){
    oper[i].addEventListener("click", ()=>{
        displayInfo.innerText += oper[i].value;
    });
}
// чистое поле ввода
function cleanValue() {
    return displayInfo.innerText = " ";
    
}
//вычисляем
function calcValue() {
   return  displayInfo.innerText=eval(displayInfo.innerText);
    
}
//выводим в таблицу последнюю операцию
function getLastValue() {
    tbl.children[1].rows[0].innerText=displayInfo.innerText;
}

//вычисляем логарифмы
function calcLog(){
    let result= Math.log(Number(displayInfo.innerText));
    displayInfo.innerText = result;
}

//вычисляем квадратный корень
function calcSqrt(){
    let result= Math.sqrt(Number(displayInfo.innerText));
    displayInfo.innerText = result;
}