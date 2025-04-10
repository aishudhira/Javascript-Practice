( function (){
    console.log("I say hi world");
    console.log("I again say hello");
}
)();


//to make the function work without explicitly calling it

//IIFE===>self executing------->no need to call it must execute itself anaonymous function-->no name

 

//keep function and variable separated in functional programming as of below 

// function addScore(score){
//     return socre+45;
// }

//state change 

hitesh="hey";
hitesh="hey theire";
hitesh="hey there everyone";


//in functional programming
hitesh="hey";
hiteshWed="";
hiteshSat="";
//we do not change the same variable but create new variable

//functions are treated as first class citizens.

const h=78;
const names="aishu";

//const addScore = function(){.....};

//we  should be able to treat function same as variable
//i.e able to return it , use it as a parameter in another function etc...

function init(){
    var firstName="Aishu";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();

}
init();



