export function aboutPage(){

    content.classList.toggle('menu', false);
    content.classList.toggle('home', false);
    content.classList.add('about');

    const top = document.querySelector("#top");
    top.classList.add('about');

    const topTitle = document.createElement("p");
    topTitle.textContent = "ABOUT US";
    topTitle.id = "top-title";
    topTitle.classList.add("about");
    topTitle.classList.add('title');
    top.appendChild(topTitle);

    const topText = document.createElement('p');
    topText.textContent = "Welcome to our cookie shop! We bake fresh, delicious cookies every day using simple, high-quality ingredients.";
    topText.id = "top-text"
    topText.classList.add('about');
    topText.classList.add('text');
    top.appendChild(topText);

    const middle = document.querySelector("#middle");
    middle.classList.add('about');

    const middleTitle = document.createElement("p");
    middleTitle.textContent = "Our Story";
    middleTitle.id = "middle-title";
    middleTitle.classList.add("about");
    middleTitle.classList.add('title');
    middle.appendChild(middleTitle);

    const middleText = document.createElement('p');
    middleText.textContent = "What started as a fun hobby quickly turned into a small business we love. We wanted to share our favorite cookie recipes and bring a little joy to our community.";
    middleText.id = "middle-text"
    middleText.classList.add('about');
    middleText.classList.add('text');
    middle.appendChild(middleText);

    const bottom = document.querySelector("#bottom");
    bottom.classList.add('about');

    const bottomTitle = document.createElement("p");
    bottomTitle.textContent = "Why Cookies?";
    bottomTitle.id = "bottom-title";
    bottomTitle.classList.add("about");
    bottomTitle.classList.add('title');
    bottom.appendChild(bottomTitle);

    const bottomText = document.createElement('p');
    bottomText.textContent = "Cookies are comfort, celebration, and childhood all in one bite. They're simple, sweet, and always bring people together—and that's exactly what we love about them.";
    bottomText.id = "bottom-text"
    bottomText.classList.add('about');
    bottomText.classList.add('text');
    bottom.appendChild(bottomText);
}