
let output = document.querySelector('.output');
let numbers = document.querySelectorAll('.but');
let res = document.querySelector('.calculateButton1');

let par1 = 0;
let par2 = 0;
let result = 0;
let calculateButtons = document.querySelectorAll('.calculateButton');
let a;
output.textContent='';

for (let i=0;i<numbers.length;i++) {
    ;
    numbers[i].addEventListener('click', function(){

        output.textContent+=numbers[i].value;
        par1= output.textContent 
    console.log(par1,par2)  }) 
    

}

for (let i = 0; i < calculateButtons.length; i++) {
    calculateButtons[i].addEventListener('click', function(){

par2=par1;
par1=0;
console.log(par1,par2);
output.textContent=''
a=calculateButtons[i].value;

    console.log(a)
    })

}
console.log(a);

res.addEventListener('click', function(){
    if (a==='+') {result=Number(par1) +Number(par2)};
    output.textContent=result;
    
})