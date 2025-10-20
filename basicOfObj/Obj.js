const obj = {
name : 'amir',
location : 'jaipur',
age :18,
email : "amir@gmail.com",
isLogged : false,
lastLoginDay :['monday','saturday'],



}
//there are way of calling object value 
//1st call trough obj name then . and then written 
// key like it
console.log(obj.lastLoginDay)

//and second is  this 

console.log(obj['name'])

const mysym =Symbol("keys");

//freeze()is used when we don't want change in onj

//console.log(typeof(mysym))

// rule access symbol in obj
obj.sym =mysym;
console.log(obj)
console.log(typeof(obj['sym']))
   
//adding fuction in obj

obj.greeting=function(){
    console.log("hello JS user")

}

console.log(obj.greeting());

//const tinderUser = new object();
//it singleton oject
const tinderUser ={};
//none singleton obj
tinderUser.id ="234abc"
tinderUser.name="sameer"
tinderUser.islogged = false
//console.log(tinderUser)

const regularUser ={
email:"amir@gail.com",
fullname :{
    username :{
        firstname:"amir",
        lastname: "khushroo",
    }
}

}
console.log(regularUser.fullname)
//if you want to access object of an object use . and then use object name 
console.group(regularUser.fullname.username.lastname)

//HOW TO CONCATE OBJECT
const obj2 ={1 : "a" ,2 :"b"}
const obj3 = {3 : "a" , 4 : "d"}
// it will merge object in another object

//const obj4 = {obj2,obj3}

//console.log(obj4)

//object assign is use to merge object in sigle object and it return value
            //syntax
const obj5 = Object.assign({},obj2,obj3)
console.log(obj5);

//it display all keys of tinderUser as array
console.log(Object.keys(tinderUser));

const users =[{
    id : 2,
    email :'am@gmail.com'

},
{
id : 2,
email: 'aman@gmail.com'

},
{

    id: 3,
    email : 'afsar@gmail.com'
}
,
]
console.log(users[1].id)

console.log(tinderUser.hasOwnProperty('islogged'))
console.log(tinderUser.hasOwnProperty('islogg'))