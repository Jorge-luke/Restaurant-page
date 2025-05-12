import "./styles.css"
import cookiesWallpaper from "./img/pexels-cookies.jpg";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const content = document.querySelector("#content");
const body = document.querySelector('body');

// IMAGE ADDITION
const background = document.createElement("img");
background.src = cookiesWallpaper;
background.alt = "Lu's Cookies!";
background.classList.add("background");
body.appendChild(background);

function createElements(){
const top = document.createElement("div");
top.id = "top";
top.classList.add("element");
content.appendChild(top);

const middle = document.createElement("div");
middle.id = "middle";
middle.classList.add("element");
content.appendChild(middle);

const bottom = document.createElement("div");
bottom.id = "bottom";
bottom.classList.add("element");
content.appendChild(bottom);
}

createElements();
homePage();

const homeBtn = document.querySelector("#home-btn");
homeBtn.classList.add('button');

const menuBtn = document.querySelector("#menu-btn");
menuBtn.classList.add('button');

const aboutBtn = document.querySelector("#about-btn");
aboutBtn.classList.add('button');

homeBtn.addEventListener("click", ()=>{
    content.replaceChildren();
    createElements();
    homePage();
});

menuBtn.addEventListener("click", function showMenu(){
    content.replaceChildren();
    createElements();
    menuPage();
}
);

aboutBtn.addEventListener("click", ()=>{
    content.replaceChildren();
    createElements();
    aboutPage();
});

