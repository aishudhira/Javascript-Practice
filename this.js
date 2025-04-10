//for regular function calls , this points to window objects or the global objects

console.log(this);


var user ={
    firstName :"Aishu",
    courseCount :4,
    getCourseCount :function (){
        console.log("line 10",this.courseCount);
        function sayHello(){
            console.log("Hello");
            console.log("Line 13",this);
        }
        sayHello();
    }
};
user.getCourseCount();


//for normal function call this gives global 
//for object call this points to the current object

