// This class makes the wiew in HTML//
import Cocktail from './CocktailInterface';
import{bar} from './index';
import RegisteredUser from './RegisteredUserClass';


 export default class View {
    showContent(content: string){
        const nodeMain: HTMLElement | null = document.getElementById('main-container');
        
        let deleteChilds = (nodeMain: HTMLElement | null )=>{
            while (nodeMain?.firstChild)
                nodeMain.removeChild(nodeMain.firstChild);
            };
        deleteChilds(nodeMain);
        
        let node : HTMLDivElement = document.createElement("div"); 
        node.innerHTML = content;
            
        nodeMain?.append(node);

        document.getElementById('login-form')?.addEventListener('submit', (event: Event ) =>{
            event.preventDefault();
            //I condired submit event as submiter event and then submiter event as htmlELement for the button id
            const submitEvent = event as unknown as SubmitEvent;
        
            if (submitEvent.submitter?.id == 'btn-register') {
        
                let name :string = (<HTMLInputElement>document.getElementById('username')).value;
        
                let pass :string = (<HTMLInputElement>document.getElementById('pass')).value;
                
                if( !(name === '') && !(pass === '')){
        
                    let user : RegisteredUser = new RegisteredUser();
        
                    user.name = name;
                    user.pass = pass;
                    bar.addUser(user);                            
                    bar.showMessage('Congratulations! You Are Registered');
                }
                else
                    bar.showMessage('Usernama And Password Required For Registration');                
            } 
        
            else if (submitEvent.submitter?.id == 'btn-login'){  // ACA PODRIA IR UN ELSE SOLO PERO QUERIA QUE SE VIERA BIEN EL ID DEL BOTON AL QUE ESTOY CLICKEANDO
        
                let name :string = (<HTMLInputElement>document.getElementById('username')).value;
                let pass :string = (<HTMLInputElement>document.getElementById('pass')).value;
                if( !(name === '') && !(pass ==''))
                    if(bar.users.length != 0){                        
                        if(bar.corroborateUser(name, pass)){                                            
                            document.getElementById('form-cocktails')?.classList.toggle('hidden-container');
                            document.getElementById('login-form')?.classList.toggle('hidden-container');   
                        
                        }
                        else                                          
                            bar.showMessage(`You Are Not Registered`); 
                    }
                else
                    bar.showMessage(`Username And Password Required`); 
            }        
                
                
        });

        const formCocktails :HTMLFormElement = document.getElementById('form-cocktails') as HTMLFormElement;
        
        formCocktails.addEventListener('submit', function(this:HTMLFormElement, event: Event ) {
            event.preventDefault();
            // listener for form-cocktail, add a cocktail with information provided by the inputs//

            let name: string = (<HTMLInputElement>document.getElementById('cocktailName')).value;
            let ingredients: string = (<HTMLInputElement>document.getElementById('ingredients')).value;
            let ingredientsArray: string[] = ingredients.split(",");
            let imageUrl: string = (<HTMLInputElement>document.getElementById('image')).value; 
            
            let id: string = (bar.cocktails.length + 1).toString();
            
            let cocktail: Cocktail ={
                name: name,
                ingredients: ingredientsArray,
                image: imageUrl,
                id: id
            }; 

            bar.addCocktail(cocktail);
        })


    }
     
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
        let cardText: HTMLElement = document.createElement('div');
        cardText.classList.add('card-text', 'flex-column', 'center');
        let textCenter: HTMLElement = document.createElement('div');
        textCenter.classList.add('text-center');
        let back: HTMLElement = document.createElement('div');
        back.classList.add('card-back', 'text-center');

        // Creating the button trashcan for delete 
        let deleteButton: HTMLElement = document.createElement('span');        
        deleteButton.classList.add('trashcan', 'material-icons-outlined');
        deleteButton.innerHTML += 'delete';
        deleteButton.id = `-${cocktail.id}`;        
        deleteButton.addEventListener('click', 
        function (this: HTMLElement){
            if (bar.actualUser instanceof RegisteredUser)

                bar.deleteCocktail(this.id);       
            else{                                 
                bar.showMessage(`You Should Be Login For Delete Option`);  
            }   
        });

        textCenter.appendChild(deleteButton);
        
        // adding the ingredients to the card        
        let ingredients: string[] = cocktail.ingredients; 
          
        let h1: HTMLElement = document.createElement('h1');
        h1.innerText = 'Ingredients';
        textCenter.appendChild(h1);
        for (let i: number = 0; i < ingredients.length; i++){
            let p: HTMLElement = document.createElement('p');
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
            function (this: HTMLElement) {
                if (bar.actualUser instanceof RegisteredUser) {                    
                    const cocktailFavoriteId: string = this.id;
                    const cocktailFavorite = bar.cocktailFromId(cocktailFavoriteId);
                    bar.actualUser.addFavorite(cocktailFavorite);
                                           
                    bar.showMessage(`Cocktail Added To Favorites`);                      
                }
                else{                                             
                    bar.showMessage(`You Should Be Login For Favorite Option`);  
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
   
    showCocktails(cocktails: Cocktail[]) {  
             
        const cardContainer: HTMLElement | null = document.getElementById('cards-container');
        if(cardContainer != null ){
            cardContainer.innerHTML = '';        
            for (let cocktail: number = 0; cocktail < cocktails.length; cocktail++)
                cardContainer.appendChild(this.createCocktail(cocktails[cocktail]));
        }
    }
    
    showMessage(message : string){
        const boxLocation: HTMLElement | null = document.getElementById('login-container');        
        let div: HTMLElement = document.createElement('div');
        div.id = 'message';
        div.classList.add('message', 'flex-column');

        let p: HTMLElement = document.createElement('p');
        p.innerText = `${message}`       
        div.addEventListener('DOMNodeInsertedIntoDocument', () => {
            window.setTimeout(function(){            
                boxLocation?.removeChild(div);
             }, 2200)
        })
        div.appendChild(p);       
        boxLocation?.appendChild(div);
        div.scrollIntoView(); 
         
    }

}



