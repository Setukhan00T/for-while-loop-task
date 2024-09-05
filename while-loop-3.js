// odd number sum

let number=81;
let sum=0;
while(number<=131){
    if(number %2===1)
    {
        sum=sum+number;
        console.log('Odd Number:',number,'sum',sum);
    }
    number++;
}



// even number sum

let num2=206;
let sum2 =0;

while(num2<=311){
    if(num2 %2===0){
        sum2 +=num2;
        console.log('Even Number',num2,'sum2',sum2);
    }
    num2++;
}