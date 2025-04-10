// function init(){
//     var firstName="Aishu";
//     function sayFirstName(){
//         console.log(firstName);
//     }
//    return sayFirstName;//reference

// }
// var value=init();//we got reference so total removal of inti and firstname 
// //from memory is not possible

// value();



function doAddition(x){

    //console.log(y);
    
    return function(y){

        return x+y;
    }
}

var sum=doAddition(4);
var sum2=sum(5);
console.log(sum2);


//this concept is called curring
//doAddition()()();
//this is possible due to closure 
console.log(doAddition(8)(90));//common in redux





