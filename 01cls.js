//import User from "./classes.js";

const User = require("./classes.js");

const hitesh = new User("hitesh","hit@mail.com");


console.log(hitesh.getInfo());

hitesh.enrollCourse("React");
hitesh.enrollCourse("JavaScript");
console.log(hitesh.getCourseList());

let courses =hitesh.getCourseList();
console.log(courses.length);

courses.forEach((c)=>console.log(c));


