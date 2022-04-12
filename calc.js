
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
output.textContent = '';

for (let i = 0; i < numbers.length; i++) {

	numbers[i].addEventListener('click', function () {
		numValue=numbers[i].value;
		out = output.textContent;
		console.log('out   ===   '+ out);
		console.log('dlina= ' + par1.toString().length, 'a = ' + par1)
		if (par1.toString().length < 9) {
			
			if (result) { result = 0; out = ''; }
			if (par1 === '') { out = '' }
			if ((out === '')&&numValue==='.') {out='0.'}
			if ((out === '0')&&!(numValue==='.')) {out=''}
			if (out.includes('.')&&(numValue==='.')) {numValue=''}
			if (!(out === '0')) { out += numValue; }
			if ((out === '0')&&(numValue==='.')){ out += numValue; }
			
			
			par1 = out;
			
		}
		console.log('a = ' + par1, 'b = ' + par2, 'result = ' + result)
		output.textContent=out;
	})
	
}
for (let i = 0; i < calculateButtons.length; i++) {
	calculateButtons[i].addEventListener('click', function () {
		if (par1 !== '') {
			par2 = par1;
			par1 = '';
			console.log('a = ' + par1, 'b = ' + par2);
			a = calculateButtons[i].value;
		}
	})
}
console.log(a);
res.addEventListener('click', function () {
	if (a === '+') { result = Number(par1) + Number(par2) };
	if (a === '-') { result = Number(par2) - Number(par1) };
	if (a === '*') { result = Number(par2) * Number(par1) };
	if (a === '/') { result = Number(par2) / Number(par1) };
	if (!a) { result = par1 }
	if (output.textContent === '') { result = '' }
	else { output.textContent = result; }
	par1 = result;
	console.log('result = ' + result, 'a = ' + par1, 'b = ' + par2);
})
clear.addEventListener('click', function () {
	result = '';
	a = '';
	par1 = '';
	par2 = '';
	output.textContent = '';
})