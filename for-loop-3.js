// odd number sum and odd numbers

let number=91;
let sum=0;
for(let num=number ; num<=129; num++){
    if(num %2===1)
    {
        sum=sum+num;
    console.log('odd number:',num,'sum',sum);
    }
}



// even number sum and even numbers

let numbers=51;
let sum2=0;
for(let num2=numbers ; num2<=85; num2++){
    if(num2 %2===0)
       {
        sum2=sum2+num2;
        console.log('even number:',num2,'sum2',sum2);
       }
}