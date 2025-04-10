class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    
    #courseList=[];
    getInfo(){
        return { name:this.name, email:this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }

    //static login() it will become private
     login(){
        return "You are logged in";
    }

}

class SubAdmin extends User{
    constructor(name,email){
       super(name,email);
    }
    login(){
        return " login only for admin only";
    }
    getAdminInfo(){
        return "I am sub admin";
    }
}

//let hitesh=User("hitesh","hit@mail.com");


module.exports=User;


const rock = new User("rock","rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("ReactJs");
console.log(rock.getCourseList());
console.log(rock.courseList);



const tom = new SubAdmin("Tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
console.log(tom.login());


// use super()
