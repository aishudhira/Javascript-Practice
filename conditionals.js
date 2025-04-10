var temperature;

temperature=21;
var result=temperature===20;
if(temperature <=22){

    console.log("it is very cold outside");

}
if(temperature===21){
   console.log("it is mild cold outside");
}else{
    console.log("it is not cold outside");
}



var email=false;
var facebook=false;
var google=false;
if(email||facebook||google){
    console.log("user is logged in");
}
else{
    console.log("user is not logged in");
}

var authenticated =false;
var signinOrOut=authenticated?"signout":"signin";
console.log(signinOrOut);

var user="new";

switch(user){
    case "testprep":
        console.log("create tests");
        break;
        case "consumer":
            console.log("you can see courses");
            break;
            case "admin":
                console.log("you have all permissions");
                break;
                default:
                    console.log("enter a proper value");
}



//undefined,null,0,'',NaN----->falsy values are nothing but values are treated as false
var user1="";
if(user1){
    console.log("condition is true");
    
}
console.log(2+2);
