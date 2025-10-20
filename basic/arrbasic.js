 let myArr =[5,6,2,6,7,8];
 console.log(myArr.join());
 //join() is used for convert arry to an object
const Array2 = new Array(3,5,6,7);
console.log(Array2);

//spead operator 

const marvel_heroes = ["spiderman","antman","captionAmerica"];
const dc_heroes =["suoerman","batman","theflash"];
const AllSuperheroes=[...marvel_heroes,...dc_heroes];
console.log(AllSuperheroes)


// Using flat() can be asses all array in own individual array
const another_arr =[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const new_arr = another_arr.flat(3);
console.log(new_arr);

//convert array to another arrray or asked from is array ya not 
//for asking used  
console.log(Array.isArray("amir_khushroo"));
//output will be --false--
//from method is used for covert method to an arry
console.log(Array.from("amir"));
//output is ['a','m','i','r'];
const name = "amir";
const arr1 = [2,4,56,6];
console.log(Array.isArray(arr1));