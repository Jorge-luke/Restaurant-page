
export function menuPage(){
    
    const content = document.querySelector('#content');
    content.classList.add('menu');

    content.innerHTML = "";
    
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
}