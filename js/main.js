
document.addEventListener("DOMContentLoaded",()=>{
  const button=document.querySelector(".nav-toggle");
  const nav=document.querySelector(".nav");
  if(button&&nav){
    button.addEventListener("click",()=>{
      const isOpen=nav.classList.toggle("open");
      button.setAttribute("aria-expanded",String(isOpen));
    });
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
  }
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear()+543);
});
