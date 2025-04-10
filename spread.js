// var ans=Math.max(2,5,7,8,9,0);
// console.log(ans);

// var myObj={}

// Object.assign(myObj,{a:1,b:2,c:3},{z:9,i:0,u:7});

// console.log(myObj);

function sumOne(a,b){
    return a+b;
}

var myA=[5,4];

//console.log(sumOne(...myA));//spread operator
//takes a group and spread it into individual 

//REST operator
//converts individual value to a group
function sumTwo(a,b,...args){
    console.log(args[2]);
    let pro=a*b;
    let sum=0;
    for(const arg of args){
        sum+=arg;
    }
    return [pro,sum];
}
console.log(sumTwo(9,10,8,7));