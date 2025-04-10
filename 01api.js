fetch("https://api.chucknorris.io/jokes/random")
.then((response) =>{
    return response.json();
    
})
.then((data)=>{
    //console.log("Data is : ",data);
    var info=data.value;
    console.log(info);
    
    
})
.catch();
