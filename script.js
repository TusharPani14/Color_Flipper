const btn=document.querySelector(".btn");
const color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const clr=document.querySelector(".color");
btn.addEventListener("click",function (){
    let hexcolor="#"
    for(let i=0;i<6;i++)
    {
        hexcolor=hexcolor+color[randomnumber()];
    }
    document.body.style.backgroundColor=hexcolor;
    clr.textContent=hexcolor;
})
function randomnumber(){
  return  Math.floor(Math.random()*color.length);
}