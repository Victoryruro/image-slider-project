var img = document.getElementsByClassName("imgslider");
var container =document.querySelector(".imgcontainer");
var spanButton1= document.getElementById("spanButton1");
var spanButton2= document.getElementById("spanButton2");
let body = document.querySelector("body");
const imgSlide=()=>{
    
    let url =  img[0].getAttribute("src")
    body.style.backgroundImage=`url(${url})`;
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundSize= "cover";
    container.append(img[0]);
};
const imgSlide2=()=>{
    container.prepend(img[8])
    let url =  img[8].getAttribute("src")
    body.style.backgroundImage=`url(${url})`;
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundSize= "cover";
   
};


spanButton1.addEventListener("click", imgSlide);
spanButton2.addEventListener("click",imgSlide2);




    
setInterval(() => {
  
    
}, 1000);



