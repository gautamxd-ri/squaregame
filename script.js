let s1=document.getElementById("box1");

s1.addEventListener("mouseenter",function(){
    let nu=Math.floor(Math.random()*11)
    s1.innerHTML=`<h1>${nu}</h1>`;
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML="<h1>1</h1>"
})
s1.addEventListener("dblclick",function(){
    s1.style.backgroundColor="red";
})


let s2=document.getElementById("box2");
let clr="green";
s2.addEventListener("mouseenter",function(){
    if(clr=="green"){
      s2.style.backgroundColor="green";
      clr="red";
    }
      else {
        s2.style.backgroundColor="red";
      clr="green";
      } 
})
s2.addEventListener("mouseleave",function(){
         s2.style.backgroundColor="white";
})

let s3=document.getElementById("box3");

s3.addEventListener("mouseenter",function(){
    let cu=Math.floor(Math.random()*256);
    let nu=Math.floor(Math.random()*256);
    let tu=Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${nu},${tu},${cu})`
})
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white";
})

let s4=document.getElementById("box4");

s4.addEventListener("click",function(){
    let cu=Math.floor(Math.random()*256);
    let nu=Math.floor(Math.random()*256);
    let tu=Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(${nu},255,255)`
    s2.style.backgroundColor=`rgb(255,255,${cu})`
    s3.style.backgroundColor=`rgb(255,${tu},255)`
})
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
})