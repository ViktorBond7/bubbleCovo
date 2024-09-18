import{S as l,N as d,P as u}from"./assets/vendor-25e36fe5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const p=document.querySelector(".header-burger"),c=document.querySelector(".mobile-menu-wrapper"),m=document.querySelector(".mobile-menu-close");document.querySelector(".header");const f=document.querySelectorAll(".header-nav-link"),h=document.querySelector(".mobile-menu-content-home");function y(){c.classList.remove("visually-hidden")}function s(){c.classList.add("visually-hidden")}p.addEventListener("click",y);m.addEventListener("click",s);document.addEventListener("keydown",e=>{e.key==="Escape"&&s()});h.addEventListener("click",()=>{window.location.href="./"});f.forEach(e=>e.addEventListener("click",s));document.addEventListener("DOMContentLoaded",()=>{const e=new l(".swiper-carousel",{slidesPerView:1,slidesPerGroup:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[d,u],speed:500,breakpoints:{1440:{slidesPerView:4,spaceBetween:70,centeredSlides:0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}}}});function n(){window.innerWidth<1440?(e.pagination.destroy(),e.params.pagination.el=null,e.update()):e.params.pagination.el||(e.params.pagination.el=".swiper-pagination",e.pagination.init(),e.pagination.update())}n(),window.addEventListener("resize",n)});const g=document.getElementById("faqList"),w=[{req:"How can I compete with friends?",resp:"Connect the game to social media to compare scores with friends."},{req:"What are the game rules?",resp:"The rules are simple and outlined in the help section."},{req:"How to reset my password?",resp:'You can reset your password by clicking on "Forgot Password".'},{req:"Can I play offline?",resp:"No, the game requires an internet connection."},{req:"How do I report a bug?",resp:"You can report bugs through the support form."},{req:"What platforms are supported?",resp:"The game is available on web and mobile."},{req:"Are there in-app purchases?",resp:"Yes, there are optional in-app purchases available."},{req:"How can I contact support?",resp:"You can contact support via the contact form on our website."},{req:"Is there a tutorial available?",resp:"Yes, there is a tutorial in the main menu."},{req:"Can I play with friends?",resp:"Yes, you can invite friends to play together."},{req:"How to change my username?",resp:"You can change your username in the settings."},{req:"What happens if I uninstall the game?",resp:"Your data is saved in the cloud."}],q=e=>{const n=e.map(r=>`
    <div class="faq-item">
        <div class="faq-item-header">
            <p class="title-req">${r.req}</p>
            <p class="toggle-symbol">+</p>
        </div>
        <div class="faq-item-content">
            <p>${r.resp}</p>
        </div>
    </div>
  `).join("");g.innerHTML=n};q(w);document.querySelectorAll(".faq-item-header").forEach(e=>{e.addEventListener("click",function(){const n=this.nextElementSibling,r=this.querySelector(".toggle-symbol");n.style.display==="block"?(n.style.display="none",r.textContent="+"):(n.style.display="block",r.textContent="-")})});
//# sourceMappingURL=commonHelpers.js.map
