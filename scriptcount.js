//setTimeout and setInterval

var counter = document.getElementsByClassName("counter")[0];

var followers = document.getElementsByClassName("followers")[0];

var names=document.getElementById("title");
let count =1;
setInterval(()=>{
    if(count<1000){
    count++;
    counter.innerText=count;
    }
},1);


setTimeout(()=>{
    followers.innerText="Followers in Instagram";
},12000);

setTimeout(()=>{
names.innerText="Aadhira";

},3000);