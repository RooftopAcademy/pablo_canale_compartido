// This class makes the wiew in HTML//
interface FavoriteEvent extends MouseEvent{
    target: HTMLElement
}

class View {



    createCocktail(cocktail: Cocktail) {     
       
        // This is a example of flip cocktail cards that I'm creating with the nodes//

        /*<div id="4" class="card">
                            <div class="card-container">
                                <div class="card-front">
                                    <div class="card-text flex-column center">
                                        <span class="trashcan material-icons-outlined">delete</span>
                                        <div class="text-center">
                                            <h1>Ingredients</h1>
                                            <p>Cachaca</p>
                                            <p>Sugar </p>
                                            <p>Lime wedges</p>
                                            <p>Crushed Ice</p>
                                            <span class="star material-icons-outlined">star</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-back text-center">
                                    <h1>Caipirinha</h1>
                                    <img src="./img/cocktail_caipirinha-1.png" />
                                </div>
                            </div>
                        </div>
        */
       
        let card: HTMLElement = document.createElement('div');
        card.classList.add('card');        
        let cardContainer: HTMLElement= document.createElement('div');
        cardContainer.classList.add('card-container')
        let front: HTMLElement= document.createElement('div');
        front.classList.add('card-front');
        let cardText = document.createElement('div');
        cardText.classList.add('card-text', 'flex-column', 'center');
        let textCenter = document.createElement('div');
        textCenter.classList.add('text-center');
        let back = document.createElement('div');
        back.classList.add('card-back', 'text-center');

        // Creating the button trashcan for delete 
        let deleteButton: HTMLElement = document.createElement('span');        
        deleteButton.classList.add('trashcan', 'material-icons-outlined');
        deleteButton.innerHTML += 'delete';
        deleteButton.id = `-${cocktail.id}`;        
        deleteButton.addEventListener('click', 
        function (e: MouseEvent){
            if (bar.actualUser instanceof RegisteredUser)

                bar.deleteCocktail(-(e.currentTarget.id));       
            else{
                bar.messageBox.message = `You Should Be Login For Delete Option`;                       
                bar.showBox();  
            }   
        });

        textCenter.appendChild(deleteButton);

        // adding the ingredients to the card        
        let ingredients = cocktail.ingredients;        
        let h1 = document.createElement('h1');
        h1.innerText = 'Ingredients';
        textCenter.appendChild(h1);
        for (let i = 0; i < ingredients.length; i++){
            let p = document.createElement('p');
            p.innerText = `${ingredients[i]}`;
            textCenter.appendChild(p);
        }
        // this is the star for favorites drinks
        let star: HTMLElement = document.createElement('span');
        star.classList.add('star', 'material-icons-outlined');
        star.innerText = 'star';
        star.id = cocktail.id;
        star.addEventListener('click', 
        // clicked stars in cards add cocktail to favorite if the user its registered//
            function (e: FavoriteEvent) {
                if (bar.actualUser instanceof RegisteredUser) {                    
                    const cocktailFavoriteId: string = e.target.id;
                    const cocktailFavorite = bar.cocktailFromId(cocktailFavoriteId);
                    bar.actualUser.addFavorite(cocktailFavorite);

                    bar.messageBox.message = `Cocktail Added To Favorites`;                            
                    bar.showBox();                      
                }
                else{
                    bar.messageBox.message = `You Should Be Login For Favorite Option`;                            
                    bar.showBox();  
                }                   
            }
        );
        
        textCenter.appendChild(star);
        
        back.innerHTML += `<h1>${cocktail.name}</h1>`;
        //  add images from the input in form-cocktail //
        back.innerHTML += `<img src="${cocktail.image}" />`;

        cardText.appendChild(textCenter);
        front.appendChild(cardText);
        cardContainer.appendChild(front);
        cardContainer.appendChild(back);
        card.appendChild(cardContainer);
        
        return card;
    }    
   
    showCocktails(cocktails) {        
        let cardContainer = document.getElementById('cards-container');
        cardContainer.innerHTML = '';        
        for (let cocktail = 0; cocktail < cocktails.length; cocktail++)
            cardContainer.appendChild(this.createCocktail(cocktails[cocktail]));
    }
    
    showBox(messageBox : MessageBox){
        let boxLocation = document.getElementById('container-inside-login');        
        let div = document.createElement('div');
        div.id = 'message';
        div.classList.add('message', 'flex-column');

        let p = document.createElement('p');
        p.innerText = `${messageBox.message}`

        let buttonBox = document.createElement('button');
        buttonBox.id= 'btn-box'
        buttonBox.classList.add('btn');
        buttonBox.innerText = 'Accept';
        buttonBox.addEventListener('click', function(){
           boxLocation.removeChild(div);
        })
        
        div.appendChild(p);
        div.appendChild(buttonBox);
        boxLocation.prepend(div);
        div.scrollIntoView();      
    }

}