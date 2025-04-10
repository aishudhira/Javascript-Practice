for (let index = 0; index < 10; index++) {
    //console.log(index);
    
}


const myStates =["TamilNadu",
    ,1980,"Delhi","Goa","Andhra","gujarat"];
//we use let cause memory is freed after use in loop

myStates.forEach(e=>console.log(e+" state"));

//for of and for in loop

const names =["Youtube","Facebook","Instagram","Netflix","Amazon"];


//for of loop is majorly arrays

for(const a of names){
    console.log(a);
}


const symbols={
    yt :"Youtube",
    fb :"Facebook",
    ig:"Instagram",

}


//for in loop is for objects
for(const n  in symbols){
    //console.log(n);
    console.log(symbols[n]);

    console.log(`${n} has the value of ${symbols[n]}`);
}


