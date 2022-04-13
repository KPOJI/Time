
let output = document.querySelector('.output');
let numbers = document.querySelectorAll('.but');
let res = document.querySelector('.calculateButton1');
let clear = document.querySelector('.buttonC')
let par1 = '';
let par2 = '';
let result = '';
let calculateButtons = document.querySelectorAll('.calculateButton');
let a;
let out;
let historyWindow = document.querySelector('.outputBar');
let hwText=historyWindow.textContent;
historyWindow.textContent=''
hwText=''
output.textContent = '';


for (let i = 0; i < numbers.length; i++) {

	numbers[i].addEventListener('click', function () {
		numValue = numbers[i].value;
		out = output.textContent;
		console.log('out   ===   ' + out);
		
		if (par1.toString().length < 9) {

			
			if ((par1 === '') && !(out === '-')) { out = '' }

			if ((out === '') && numValue === '.') { out = '0.' }
			if ((out === '-') && numValue === '.') { out = '-0.' }

			if (((out === '0')||(out === '-0')) && !(numValue === '.')) { out = '0' }
			
			if (out.includes('.') && (numValue === '.')) { numValue = '' }
			if(result&&par2===''&&numValue === '.') {out='0'; par2='0';result='';a=''}
			if(result&&par2==='') {out=''; par2='0';result='';a=''}//?
			//убрать out=''?
			if (result) { out += numValue; }   
			else{ if (!(out === '0')||(out === '-')) { out += numValue; }
			if ((out === '0') && (numValue === '.')) { out += numValue; }}



			par1 = out;
			historyWindow.textContent+=numValue;
		}
		console.log('out = '+out,'a = ' + par1, 'b = ' + par2, 'result = ' + result, 'ZNAK', a)
		output.textContent = out;



		
	})

}
for (let i = 0; i < calculateButtons.length; i++) {
	calculateButtons[i].addEventListener('click', function () {
		a = calculateButtons[i].value;
		
		if (output.textContent === ''&&a==='-') { output.textContent = '-'; }
		else if (par1 !== '') {
			par2 = par1;
			par1 = '';
			console.log('a = ' + par1, 'b = ' + par2);
			
		}
		historyWindow.textContent+=a;	
	})
}
console.log(a);


res.addEventListener('click', function () {
	hwText='';
	console.log(a);
	console.log(result);
	if (a === '+'&&(result||result===0)) { result += Number(par1)}
	else if (a === '+') { result = Number(par1) + Number(par2) };
	
	if (a === '-'&&(result||result===0)) { result -= Number(par1)}
	else if ((a === '-')&&(par2)) { result = Number(par2) - Number(par1) };

	if (a === '*'&& (result||result===0)) { result *= Number(par1)}
	else if (a === '*') { result = Number(par2) * Number(par1) };

	if (a === '/'&&(result||result===0)) { result /= Number(par1)}
	else if (a === '/') { result = Number(par2) / Number(par1) };


	if (!a) { result = par2 }
	if (output.textContent === '') { result = '' }
	else { output.textContent = +result.toFixed(8); }
	if ((output.textContent > 999999999)||(output.textContent < (-999999999)))
	 { output.textContent = result.toExponential(4); }
	//par2 = +result.toFixed(8);
	par2=''
	console.log('out = '+out,'result = ' + result, 'a = ' + par1, 'b = ' + par2 , 'ZNAK'+a);
	
	
	if ((result > 999999999)||(result < (-999999999))){hwText+=result.toExponential(4)}
	else {hwText+=+result.toFixed(8);}
	
	historyWindow.textContent+='='+hwText;
	historyWindow.textContent+=`\n`;


})


clear.addEventListener('click', function () {
	result = '';
	a = '';
	par1 = '';
	par2 = '';
	output.textContent = '';
	historyWindow.textContent='';
})