const hitesh={
    firstName:"Hitesh",
    lastName :" Choudhary",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role} 
            and is studying ${this.courseCount} courses

            `);

    },
};

const dj={

    firstName :"Rocky",
    lastName :"DJ",
    role:"Admin",
    courseCount:4
};

hitesh.getInfo();

//borrowing of method

//hitesh.getInfo.bind(dj)();

var djinfo=hitesh.getInfo.bind(dj);
djinfo();

//bind always give a reference back and have to run that reference.

//reference==>getInfo
//calling the method==>getInfo()


hitesh.getInfo.call(dj);

//bind method gives reference which we have to call 
//whereas call method calls itself

//<element>text node in js</>


