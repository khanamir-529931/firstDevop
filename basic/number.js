const score = 400;
console.log(score);

   console.log(score.toString())

console.log(typeof(score.toString()))

        const arr = new Array([2,4,4,5,56,6])
                console.log(typeof(arr));
                        console.log(arr[2]);
    const num = new Number(100);
console.log(typeof(num));
            console.log(num);

console.log(num.toString().length)
//output 3
//tofixed is used for return value with  if give him fixed(2) it return fisrt passing then .00 ;

console.log(num.toFixed(2))
 //toprecisios() method is used for return limited value is passing in for example we have a number 79000 we need
 //  only three digit of number used presious method
 const other_number = 123.3435;
 console.log(other_number.toPrecision(5));
 //output 123.34
   //tolocalString is return like 100,000,00
   const hundred = 100000;
   console.log(hundred.toLocaleString());


 //  ++++++++++++++++++++++++++ math ++++++++++++++++++
//console.log(Math) 
// abs is used only to change negative value in positive value
// console.log(Math.abs(-4));

//     console.log(Math.round(4.6));
//        console.log(Math.ceil(4.6));
//                console.log(Math.floor(4.6));
//               console.log(Math.max(8,89,9)); 
//                console.log(Math.min(4,6,6,8,3,7));     
console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10) + 1);

//
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() *(max - min +1)+min));