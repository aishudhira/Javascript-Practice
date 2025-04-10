var countries =["India","Nepal","Korea","Japan","Russia"];


var states =new Array("TamilNadu","Punjab","AndhraPradesh","Delhi","Goa");

//console.log(states[0]);

//console.log(states.length);

states[0]="Rajasthan";
                
//           
//console.log(user);  

 //console.log(user.shift());

//user.unshift("NEW VALUE");
 
//console.log(user);

//console.log(user.indexOf(3));

//console.log(user.indexOf("newy"));


//console.log(Array.from("Aishu123"));

var isEven=(element)=>{
    /* if(element%2===0){
        return true;
    }
    else{
        return false;
    } */
   return element % 2 ===0;
}

//console.log(isEven(2));

var result = [2,3,4,5].every(isEven);
console.log(result);

//callbacks

var result1=[2,4,6,8].every((e)=> e%2 ===0);
console.log(result1);


var testArray = [2,4,6,3,1,5,9,8];
console.log(testArray.fill("h",4,6));

const myNumber = [23,24,25,55,66,77,87,98];
const filresult=myNumber.filter((e)=>e<55);

console.log(filresult);


var names=["Ted","Tim","Ton","Sam","Sor","Sod"];

//console.log(names.slice(2,5));//names.slice(1) is also possible

names.splice(1,3,"Hi","Bye","tata");

console.log(names);

