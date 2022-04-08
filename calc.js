
let output = document.querySelector('.output');
let numbers = document.querySelectorAll('.but');
let res = document.querySelector('.calculateButton1');
let clear = document.querySelector('.buttonC')
let par1 = 0;
let par2 = 0;
let result = 0;
let calculateButtons = document.querySelectorAll('.calculateButton');
let a;

output.textContent='';

for (let i=0;i<numbers.length;i++) {
        numbers[i].addEventListener('click', function(){
        if (result) {result=0; output.textContent='';}
        if (par1===0){output.textContent=''}
        output.textContent+=numbers[i].value;
        par1= output.textContent 
        
    console.log(par1,par2)  }) 
    

}

for (let i = 0; i < calculateButtons.length; i++) {
    calculateButtons[i].addEventListener('click', function(){

            par2=par1;
            par1=0;
            console.log(par1,par2);
            a=calculateButtons[i].value;
            
                })

}
console.log(a);


res.addEventListener('click', function(){
    if (a==='+') {result=Number(par1) + Number(par2)};
    if (a==='-') {result=Number(par2) - Number(par1)};
    if (a==='*'){result=Number(par2) * Number(par1)};
    if (a==='/') {result=Number(par2) / Number(par1)};
    if (!a) {result=par1}
    output.textContent=result;})

clear.addEventListener('click', function(){
    result=0;
    a=0;
    par1=0;
    par2=0;
    output.textContent='';
    
})