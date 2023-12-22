var main = document.querySelector(".main")
var crsr = document.querySelector(".CRSR")
main.addEventListener("mousemove",function(dest)
{
    crsr.style.left = dest.x+"px"
   crsr.style.top = dest.y+"px"
})

