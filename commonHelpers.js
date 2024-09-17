import{S as h,N as g,P as y}from"./assets/vendor-25e36fe5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const q=document.querySelector(".header-burger"),m=document.querySelector(".mobile-menu-wrapper"),w=document.querySelector(".mobile-menu-close"),f=document.querySelector(".header"),b=document.querySelectorAll(".header-list-list"),v=document.querySelector(".mobile-menu-content-home");function L(){m.classList.remove("visually-hidden"),f.classList.add("visually-hidden")}function p(){m.classList.add("visually-hidden"),f.classList.remove("visually-hidden")}q.addEventListener("click",L);w.addEventListener("click",p);document.addEventListener("keydown",n=>{n.key==="Escape"&&p()});v.addEventListener("click",()=>{window.location.href="./"});b.forEach(n=>n.addEventListener("click",p));document.addEventListener("DOMContentLoaded",()=>{const n=new h(".swiper-carousel",{slidesPerView:1,slidesPerGroup:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[g,y],speed:500,breakpoints:{1440:{slidesPerView:4,spaceBetween:70,centeredSlides:0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}}}});function i(){window.innerWidth<1440?(n.pagination.destroy(),n.params.pagination.el=null,n.update()):n.params.pagination.el||(n.params.pagination.el=".swiper-pagination",n.pagination.init(),n.pagination.update())}i(),window.addEventListener("resize",i)});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("faqList"),i=[{req:"How can I compete with friends?",resp:"Connect the game to social media to compare scores with friends."},{req:"What are the game rules?",resp:"The rules are simple and outlined in the help section."},{req:"How to reset my password?",resp:'You can reset your password by clicking on "Forgot Password".'},{req:"Can I play offline?",resp:"No, the game requires an internet connection."},{req:"How do I report a bug?",resp:"You can report bugs through the support form."},{req:"What platforms are supported?",resp:"The game is available on web and mobile."},{req:"Are there in-app purchases?",resp:"Yes, there are optional in-app purchases available."},{req:"How can I contact support?",resp:"You can contact support via the contact form on our website."},{req:"Is there a tutorial available?",resp:"Yes, there is a tutorial in the main menu."},{req:"Can I play with friends?",resp:"Yes, you can invite friends to play together."},{req:"How to change my username?",resp:"You can change your username in the settings."},{req:"What happens if I uninstall the game?",resp:"Your data is saved in the cloud."}];function l(){i.forEach(e=>{const r=document.createElement("div");r.classList.add("faq-item");const o=document.createElement("li");o.classList.add("faq-element");const d=document.createElement("p");d.classList.add("faq-element-req"),d.textContent=e.req;const a=document.createElement("img");a.setAttribute("class","icon"),a.setAttribute("onclick","toggleText(this);"),a.setAttribute("src",s()),o.appendChild(d),o.appendChild(a);const c=document.createElement("li");c.classList.add("extraText"),c.style.display="none";const u=document.createElement("p");u.classList.add("faq-element-resp"),u.textContent=e.resp,c.appendChild(u),r.appendChild(o),r.appendChild(c),n.appendChild(r)})}function s(){return window.matchMedia("(min-width: 1440px)").matches?"./img/faq/minus.png":"./img/faq/minus-mob.png"}l(),window.toggleText=function(e){const r=e.closest(".faq-item").querySelector(".extraText");e.getAttribute("src")==="./img/faq/plus.png"?(e.setAttribute("src",t()),r.style.display="block"):(e.setAttribute("src","./img/faq/plus.png"),r.style.display="none")};function t(){return window.matchMedia("(min-width: 1440px)").matches?"./img/faq/minus.png":"./img/faq/minus-mob.png"}});
//# sourceMappingURL=commonHelpers.js.map
