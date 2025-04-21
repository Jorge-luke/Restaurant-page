
export function aboutPage(){

    content.classList.toggle('menu', false);

    const top = document.querySelector("#top");
    const topText = document.createElement("p");
    topText.textContent = "Hello, Im the about main text!";
    topText.id = "top-text";
    topText.classList.add("about");
    top.appendChild(topText);

    const middle = document.querySelector("#middle");
    const middleText = document.createElement("p");
    middleText.textContent = "Hello, Im the about Middle text!";
    middleText.id = "middle-text";
    middleText.classList.add("about");
    middle.appendChild(middleText);

    const bottom = document.querySelector("#bottom");
    const bottomText = document.createElement("p");
    bottomText.textContent = "Hello, Im the about bottom text!";
    bottomText.id = "bottom-text";
    bottomText.classList.add("about");
    bottom.appendChild(bottomText);
}