
let output = document.querySelector('.output');
let numbers = document.querySelectorAll('.but');
let res = document.querySelector('.calculateButton1');
let clear = document.querySelector('.buttonC')
let par1 = '';
let par2 = '';
let result = '';
let calculateButtons = document.querySelectorAll('.calculateButton');
let a;

output.textContent='';

for (let i=0;i<numbers.length;i++) {
        numbers[i].addEventListener('click', function(){
        if (result) {result=0; output.textContent='';}
        if (par1===0){output.textContent=''}
        if(!(output.textContent==='0')){output.textContent+=numbers[i].value;}
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
    if(output.textContent==='') {result=''}
   
    else{output.textContent=result;}
    par1=result})

clear.addEventListener('click', function(){
    result='';
    a='';
    par1='';
    par2='';
    output.textContent='';
    
})