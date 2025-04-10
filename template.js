var name = "Aishu";

var fullName = `${name} Kumar`;
console.log(fullName);

console.log(fullName.charAt(3));

console.log(fullName.endsWith("r"));

console.log(fullName.includes("umar"));

console.log(fullName.toLowerCase());

//``are called template literals


//maps in javascript


var myMap= new Map();
myMap.set(1,"Aishu");
myMap.set(2,"Amoha");
myMap.set(3,"Tarun");
myMap.set(4,"Hamsika");
myMap.set(5,"Aadhira");

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
    
}

for(let value of myMap.values()){
    console.log(`Key is ${value}`);
    
}

for(let [key,value] of myMap){
    console.log(`${key} ==== ${value}`);
    
}

myMap.forEach((key)=> console.log(`${key}`));//it gives values
myMap.forEach((k,v)=>console.log(`${k}===${v}`));

myMap.delete(4);
console.log(myMap);

//destructuring the data
const user=["aishu",5,"admin"];
var [name,courseCount,role]=user;
console.log(courseCount);

const MyUser ={
    firstName: "aishu",
    count:6,
    r:"user"
};
console.log(MyUser.r);
//while destructuring objects the name should be same
// in both the cases
const {firstName,count,r}=MyUser;

console.log(r);

