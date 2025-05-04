import cookieItem from "./img/logo.png";
import recipeChocolate from "./img/top-banner.png";
import recipePeanut from "./img/middle-banner.png";
import recipeSugar from "./img/bottom-banner.png";
import logoPeanut from "./img/peanut-logo.png";
import logoSugar from "./img/sugar-logo.png";

export function menuPage(){
    let currentBanner = [];
    const content = document.querySelector('#content');
    content.classList.add('menu');
    content.innerHTML = "";

    function firstText(){
        if(!currentBanner.includes("chocolate")){
            const firstTitle = document.createElement('h2');
            firstTitle.classList.add('menu');
            firstTitle.classList.add('title');
            firstTitle.id = "first-title";
            firstTitle.textContent = "Chocolate Tips Cookies!!";
            firstHalf.appendChild(firstTitle);

            const firstPar = document.createElement('p');
            firstPar.classList.add('menu');
            firstPar.classList.add('par');
            firstPar.id = "first-par";
            firstPar.textContent = "Our classic chocolate chip cookie is golden on the outside, soft and chewy on the inside, and packed with rich, melty chocolate chips in every bite. A timeless favorite that’s impossible to resist.";
            firstHalf.appendChild(firstPar);
        }
        currentBanner.push("chocolate");
    };

    function secondText(){
        if(!currentBanner.includes("peanut")){
            const secondTitle = document.createElement('h2');
            secondTitle.classList.add('menu');
            secondTitle.classList.add('title');
            secondTitle.id = "second-title";
            secondTitle.textContent = "Peanut Butter Cookies!!";
            secondHalf.appendChild(secondTitle);
        
            const secondPar = document.createElement('p');
            secondPar.classList.add('menu');
            secondPar.classList.add('par');
            secondPar.id = "second-par";
            secondPar.textContent = `Smooth, nutty, and full of flavor, our peanut butter cookies 
            are a perfect balance of sweet and salty. With a soft, melt-in-your-mouth texture, they’re 
            a treat for any peanut butter lover.`;
            secondHalf.appendChild(secondPar);

        currentBanner.push("peanut");
        }
    };

    function thirdText(){
        if(!currentBanner.includes("sugar")){
            const thirdTitle = document.createElement('h2');
            thirdTitle.classList.add('menu');
            thirdTitle.classList.add('title');
            thirdTitle.id = "third-title";
            thirdTitle.textContent = "Sugar Cookies!!";
            third.appendChild(thirdTitle);
        
            const thirdPar = document.createElement('p');
            thirdPar.classList.add('menu');
            thirdPar.classList.add('par');
            thirdPar.id = "third-par";
            thirdPar.textContent = `Light, buttery, and delicately sweet, our sugar cookies are
             a simple pleasure with a soft center and crisp edges. Perfectly baked and dusted with 
             sugar for just the right touch of sparkle.`;
            third.appendChild(thirdPar);
        currentBanner.push("sugar");
        }
    }
    
    const recipes = document.createElement('div');
    recipes.id = "recipes";
    recipes.classList.add("menu");
    content.appendChild(recipes);

    const firstHalf = document.createElement('div');
    firstHalf.id = "first-half";
    firstHalf.classList.add('menu');
    content.appendChild(firstHalf);

    const secondHalf = document.createElement('div');
    secondHalf.id = "second-half";
    secondHalf.classList.add('menu');
    content.appendChild(secondHalf);

    const third = document.createElement('div');
    third.id = "third";
    third.classList.add("menu");
    content.appendChild(third);
  
    const topBanner = document.createElement('img');
    topBanner.classList.add("top-banner");
    topBanner.classList.add('banner');
    topBanner.src = recipeChocolate;
    topBanner.alt = "Chocolate Cookie Image!";
    firstHalf.appendChild(topBanner);

    const middleBanner = document.createElement('img');
    middleBanner.src = recipePeanut;
    middleBanner.alt = "Peanut butter cookies!"
    middleBanner.classList.add('middle-banner');
    middleBanner.classList.add('banner');
    secondHalf.appendChild(middleBanner);

    const bottomBanner = document.createElement('img');
    bottomBanner.src = recipeSugar;
    bottomBanner.alt = "Sugar Cookies!";
    bottomBanner.classList.add('bottom-banner');
    bottomBanner.classList.add('banner');
    third.appendChild(bottomBanner);

    const item1 = document.createElement('div');
    item1.id = "item-one";
    item1.classList.add("menu");
    recipes.appendChild(item1);

    const cookie1 = document.createElement("img");
    cookie1.src = cookieItem;
    cookie1.alt = "cookie Image!"
    cookie1.classList.add("cookie-item");
    cookie1.id = "cookie-one";
    item1.appendChild(cookie1);
    
    const text1 = document.createElement('button');
    text1.classList.add('menu');
    text1.id = "text-one";
    text1.textContent = "Chocolate Chips"
    item1.appendChild(text1);


    const item2 = document.createElement('div');
    item2.id = "item-two";
    item2.classList.add("menu");
    recipes.appendChild(item2);

    const cookie2 = document.createElement("img");
    cookie2.src = logoPeanut;
    cookie2.alt = "cookie Image!"
    cookie2.classList.add("cookie-item");
    cookie2.id = "cookie-two";
    item2.appendChild(cookie2);

    const text2 = document.createElement('button');
    text2.classList.add('menu');
    text2.id = "text-two";
    text2.textContent = "Peanut Butter"
    item2.appendChild(text2);

    // text2.addEventListener("click", );

    const item3 = document.createElement('div');
    item3.id = "item-three";
    item3.classList.add("menu");
    recipes.appendChild(item3);

    const cookie3 = document.createElement("img");
    cookie3.src = logoSugar;
    cookie3.alt = "cookie Image!"
    cookie3.classList.add("cookie-item");
    cookie3.id = "cookie-three";
    item3.appendChild(cookie3);

    const text3 = document.createElement('button');
    text3.classList.add('menu');
    text3.id = "text-three";
    text3.textContent = "Sugar Cookies"
    item3.appendChild(text3);

    // text3.addEventListener("click", );

    item1.addEventListener("click", firstText);
    text1.addEventListener("click", firstText);

    item2.addEventListener("click", secondText);
    text2.addEventListener("click", secondText);

    item3.addEventListener("click", thirdText);
    text3.addEventListener("click", thirdText);


  
}

// MENU 
// BUTTONS 
// FUNCTIONS

let currentRecipe = false;




