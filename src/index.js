import "./styles.css"
import cookiesWallpaper from "./img/pexels-cookies.jpg";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

console.log("Hello Webpack! One");

console.log("Hello Webpack! One");

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
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", ()=>{
    // missing code to clear all html before loading homePage
    content.innerHTML = "";
    createElements();
    homePage();
});

menuBtn.addEventListener("click", ()=>{
    // missing code to clear all html before loading menuPage
    content.innerHTML = "";
    createElements();
    menuPage();
});



aboutBtn.addEventListener("click", ()=>{
    // missing code to clear all html before loading aboutPage
    content.innerHTML = "";
    createElements();
    aboutPage();
});

