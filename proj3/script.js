const courses=[
    {
        name:"Complete ReactJs course",
        price:"2.2"
    },
    {
        name:"Complete Angular course",
        price:"2.1"
    },
    {
        name:"Complete MERN course",
        price:"2.7"
    },
    {
        name:"Complete C++ course",
        price:"2.3"
    }
];

function generateList(){
    const ul=document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach(course=>{
       
        const list=document.createElement("li");
        list.classList.add("list-group-item");


        const name = document.createTextNode(course.name);
        list.appendChild(name);


        const span=document.createElement("span");
        span.classList.add("float-right");

        const cost=document.createTextNode("$ " +course.price);
        span.appendChild(cost);

        list.appendChild(span);

        ul.appendChild(list);

    });
}


//generateList();

window.addEventListener("load",generateList());

const button=document.querySelector(".sort-btn");

button.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price)
    
    generateList();
});

const buttonRev=document.querySelector(".btn-primary");

    buttonRev.addEventListener("click",()=>{
        courses.sort((a,b)=>b.price-a.price)
        generateList();
    });