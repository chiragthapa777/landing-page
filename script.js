let nav = document.getElementById("navbar");

var scrollPrev = window.pageYOffset;
window.onscroll = function () {
  if (window.pageYOffset === 0) {
    nav.classList.remove("navFix");
  } else {
    var scrollCur = window.pageYOffset;
    if (scrollPrev > scrollCur) {
      nav.classList.add("navFix");
    } else {
      nav.classList.remove("navFix");
    }
    scrollPrev = scrollCur;
  }
};
 let navBox=document.getElementById("navBox")
 let toggle=document.getElementById("toggle")
 
 toggle.addEventListener("click",()=>{
     console.log("click");
     
    if(navBox.classList.contains("showNav"))
    {
        navBox.classList.remove("showNar")
    }
    else{
        navBox.classList.add("showNar")
    }
     
 })