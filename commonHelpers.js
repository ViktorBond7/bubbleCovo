import{S as p,N as m,P as h}from"./assets/vendor-25e36fe5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const g=document.querySelector(".header-burger"),c=document.querySelector(".mobile-menu-wrapper"),f=document.querySelector(".mobile-menu-close");document.querySelector(".header");const y=document.querySelectorAll(".header-nav-link"),v=document.querySelector(".mobile-menu-content-home");function b(){c.classList.remove("visually-hidden")}function a(){c.classList.add("visually-hidden")}g.addEventListener("click",b);f.addEventListener("click",a);document.addEventListener("keydown",t=>{t.key==="Escape"&&a()});v.addEventListener("click",()=>{window.location.href="./"});y.forEach(t=>t.addEventListener("click",a));document.addEventListener("DOMContentLoaded",()=>{const t=new p(".swiper-carousel",{slidesPerView:1,slidesPerGroup:1,spaceBetween:50,loop:!1,navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},modules:[m,h],speed:900,breakpoints:{1280:{slidesPerView:4,spaceBetween:70,centeredSlides:0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}}}});function o(){window.innerWidth<1280?(t.pagination.destroy(),t.params.pagination.el=null,t.update()):t.params.pagination.el||(t.params.pagination.el=".swiper-pagination",t.pagination.init(),t.pagination.update())}o(),window.addEventListener("resize",o),document.querySelectorAll(".header-nav-link").forEach(s=>{s.addEventListener("click",e=>{e.preventDefault();const n=s.getAttribute("href").replace("#","");if(s.getAttribute("href")==="./index.html"){window.scrollTo({top:0,behavior:"smooth"});return}const i=document.getElementById(n);if(i){const l=document.querySelector("header"),u=l?l.offsetHeight:0,d=i.getBoundingClientRect().top+window.scrollY-u;window.scrollTo({top:d,behavior:"smooth"})}})})});const w=document.getElementById("faqList"),q=[{req:"How can I compete with friends?",resp:"Connect the game to social media to compare scores with friends."},{req:"What are the game rules?",resp:"The rules are simple and outlined in the help section."},{req:"How to reset my password?",resp:'You can reset your password by clicking on "Forgot Password".'},{req:"Can I play offline?",resp:"No, the game requires an internet connection."},{req:"How do I report a bug?",resp:"You can report bugs through the support form."},{req:"What platforms are supported?",resp:"The game is available on web and mobile."},{req:"Are there in-app purchases?",resp:"Yes, there are optional in-app purchases available."},{req:"How can I contact support?",resp:"You can contact support via the contact form on our website."},{req:"Is there a tutorial available?",resp:"Yes, there is a tutorial in the main menu."},{req:"Can I play with friends?",resp:"Yes, you can invite friends to play together."},{req:"How to change my username?",resp:"You can change your username in the settings."},{req:"What happens if I uninstall the game?",resp:"Your data is saved in the cloud."}],L=t=>{const o=t.map(r=>`
    <div class="faq-item">
        <div class="faq-item-header">
            <p class="title-req">${r.req}</p>
            <p class="toggle-symbol">+</p>
        </div>
        <div class="faq-item-content">
            <p>${r.resp}</p>
        </div>
    </div>
  `).join("");w.innerHTML=o};L(q);document.querySelectorAll(".faq-item-header").forEach(t=>{t.addEventListener("click",function(){const o=this.nextElementSibling,r=this.querySelector(".toggle-symbol"),s=this.parentElement;document.querySelectorAll(".faq-item-content").forEach(e=>{e!==o&&(e.classList.remove("active"),e.style.maxHeight="0",e.previousElementSibling.querySelector(".toggle-symbol").textContent="+",e.previousElementSibling.querySelector(".toggle-symbol").classList.remove("minus"),e.previousElementSibling.querySelector(".toggle-symbol").style.backgroundColor="yellow")}),s.classList.toggle("active"),o.classList.toggle("active"),o.classList.contains("active")?(o.style.maxHeight=o.scrollHeight+"px",r.textContent="-",r.classList.add("minus"),r.style.backgroundColor="blue"):(o.style.maxHeight="0",r.textContent="+",r.classList.remove("minus"),r.style.backgroundColor="yellow")})});
//# sourceMappingURL=commonHelpers.js.map
