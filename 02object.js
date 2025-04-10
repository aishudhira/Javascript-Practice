var User ={
    name :"",
    getUserName : function(){
        console.log(`User name is ${this.name}`);
    }
};

var Aishu = Object.create(User);

console.log(Aishu);

Aishu.name="Aishwarya";

Aishu.getUserName();

var Sam = Object.create(User,{
    name: { value : "Sam Anderson"},
    courseCount : { value : 3}
});
Sam.getUserName();