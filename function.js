function namstey(){
    return "Hello India";
}
var greetings=namstey();
console.log(greetings);

function sayHello(){
    console.log("Hello there");
}

sayHello();


var getUserRole=function (name,role){
    switch(role){
        case "admin":
            return `${name} is admin with all access`
            break;
            case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`
            break;
            case "testprep":
                return  `${name} is testprep with access to create and delete tests`
            case "user":
                return `${name} is user to consume content`
                break;
                default:
                     return `${name} is a trial user`
                    break;

    }
}
 console.log(getUserRole("Aishwarya","testprep"));
 var getRole=getUserRole("Sammy","user");
 console.log(getRole);
 
 tip("79");
 var myName="Aishu";
 if(myName === "Aishu"){
    console.log("this is a true statement");
 }
function tip(a){
    var bill =parseInt(a);
    console.log(5+bill);
}

function sayName(){
    var name="h";
    console.log(name);
}  


console.log(this);

var game="basketBall";
function sayGameName(){
    var name="Hotei";
    console.log(this);
}
sayGameName();