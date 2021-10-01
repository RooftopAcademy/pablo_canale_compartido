import Cocktail from '../interfaces/CocktailInterface';
import { addCocktail, registerUser, loginUser } from '../forms';



export default class View {

    showPage(content: string) {
        const nodeMain = document.getElementById('main-container') as HTMLElement;
        let node: HTMLDivElement = document.createElement("div");

        nodeMain.innerHTML = '';
        node.innerHTML = content;
        nodeMain.append(node);
        document.getElementById('btn-goLogin')?.addEventListener('click', () => {
            document.getElementById('form-register')?.classList.toggle('hidden-container');
            document.getElementById('form-login')?.classList.toggle('hidden-container');
            document.getElementById('btn-goLogin')?.classList.toggle('hidden-container')
        })
        document.getElementById('form-register')?.addEventListener('submit', registerUser);
        document.getElementById('form-login')?.addEventListener('submit', loginUser);
        document.getElementById('form-cocktails')?.addEventListener('submit', addCocktail);
    }

    createCocktail(cocktail: Cocktail) {
        let ingredientList: string = '';

        for (const ingredient of cocktail.ingredients)
            ingredientList += `<p>${ingredient}</p>`

        return `<div class='card'>
                    <div class="card-container">
                         <div class="card-front">
                            <div class="card-text flex-column center">
                                <span id="-${cocktail.id}"class="trashcan material-icons-outlined">delete</span>
                                <div class="text-center">
                                    <u class="title" >Ingredients</u>
                                    ${ingredientList}     
                                    <span id="${cocktail.id}" class="star material-icons-outlined">star</span>
                                </div>
                            </div>
                        </div>
                        <div class="card-back text-center">
                            <u class="title" id="name-cocktail">${cocktail.name}</u>
                            <img id="image" src="${cocktail.image}" />
                        </div>
                    </div>
                </div>`;
    }

    showCocktails(cocktails: Cocktail[]) {
        const cardContainer = document.getElementById('cards-container') as HTMLElement;

        cardContainer.innerHTML = '';
        cocktails.forEach(cocktail => {
            cardContainer.innerHTML += this.createCocktail(cocktail);
        });
    }

    showMessage(message: string) {
        const boxLocation = document.getElementById('login-container') as HTMLElement;
        let div: HTMLElement = document.createElement('div');
        let p: HTMLElement = document.createElement('p');

        p.innerText = `${message}`
        div.id = 'message';
        div.classList.add('message', 'flex-column');
        div.appendChild(p);
        div.addEventListener('DOMNodeInsertedIntoDocument', () => {
            window.setTimeout(function () {
                boxLocation?.removeChild(div);
            }, 2200)
        })

        boxLocation?.appendChild(div);
    }

}



