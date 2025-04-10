var User= function (firstName,courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;

    this.getCourseCount=function(){
        console.log( `course count for  ${this.firstName} is ${this.courseCount}`);
    };
};


User.prototype.getFirstName= function(){
    console.log(`Your first name is ${this.firstName}`);
};
//in browser i can give lco.hasOwnProperty()

var Aishu = new  User("Aishwarya",2);
//console.log(Aishu);
Aishu.getCourseCount();
if(Aishu.hasOwnProperty("firstName")){
Aishu.getFirstName();
}



var Sam=new User("Sam",3);
//console.log(Sam);
Sam.getCourseCount();



//new keyword is responsible for invoking the constructor and creating a new instance everytime


//without new this is pointing to the window object so we got the undefined in output.
//with new it is not a regular function call

//proto can give property to the object and it is the job of new to check the availability of prototype.
//proto gets instantiated with creation of new object
//proto is done out of the object.
//we can also inject our constructor and override it

