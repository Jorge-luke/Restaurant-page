
import cookieLogo from "./img/logo.png";
import cookieImg from "./img/home-img.png";
export function homePage (){
    content.classList.toggle('menu', false);

    //Top portion of the Home page
    const top = document.querySelector("#top");
    top.classList.add("home");

    const topInner = document.createElement('div');
    topInner.id = "top-inner";
    topInner.classList.add("home");
    top.appendChild(topInner);

    const topLeft = document.createElement('div');
    topLeft.id = "top-left";
    topLeft.classList.add("home");
    topInner.appendChild(topLeft);

    const topText = document.createElement("p");
    topText.textContent = "Lu's Cookies";
    topText.classList.add("home");
    topText.id = "top-text";
    topLeft.appendChild(topText);

    const topTextPlus = document.createElement("p");
    topTextPlus.textContent = "THE BEST OPTION MADE WITH LOVE";
    topTextPlus.classList.add("home");
    topTextPlus.id = "top-text-plus";
    topLeft.appendChild(topTextPlus);

    const topRight = document.createElement('div');
    topRight.id = "top-right";
    topRight.classList.add("home");
    topInner.appendChild(topRight);

    const logo = document.createElement('img');
    logo.src = cookieLogo;
    logo.alt = "COOKIE LOGO";
    logo.classList.add("logo");
    topRight.appendChild(logo);

    const middle = document.querySelector("#middle");
    const middleText = document.createElement("p");
    middleText.textContent = "Hello, Im the Home Middle text!";
    middleText.classList.add("home");
    middleText.id = "middle-text";
    middle.appendChild(middleText);

    const homeImg = document.createElement('img');
    homeImg.src = cookieImg;
    homeImg.alt = "Cookie Image!";
    homeImg.classList.add("cookie-img");
    middle.appendChild(homeImg);

    const bottom = document.querySelector("#bottom");
    const bottomText = document.createElement("p");
    bottomText.textContent = "Hello, Im the Home bottom text!";
    bottomText.classList.add('home');
    bottomText.id = "bottom-text";
    bottom.appendChild(bottomText);
}
