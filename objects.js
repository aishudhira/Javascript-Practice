var user ={
    firstName : "Aishwarya",
    lastName : "Kumar",
    role : "Admin",
    loginCount : 8,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
           this.courseList.push(courseName);
    },
    getCourseCount : function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    }
};

// console.log(user.firstName);

// console.log(user["lastName"]);

// user.loginCount = 40;
// console.log(user.loginCount);

user.buyCourse("React");
user.buyCourse("Java");
console.log(user);
console.table(user);
console.log(user.getCourseCount());
