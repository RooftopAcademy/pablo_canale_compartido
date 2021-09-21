class OwnCocktail {
    constructor() {
        this.users = [];
        this.view = new View();
        this.actualUser = new User();
        this.cocktails = [];
        this.messageBox = new MessageBox();
    } 
    
    getMessageBox(){
        return this.messageBox;
    }

    addCocktail(cocktail) {        
        this.cocktails.push(cocktail);
        this.view.addCocktail(cocktail);

    }
    getCocktails() {
        return this.cocktails;
    }
    getUsers() {
        return this.users;
    }    
    getActualUser() {
        return this.actualUser;
    };
    setActualUser(user) {
        this.actualUser = user;
    }
    cocktailFromId(id){
        let cocktail = 0;
        while(this.cocktails[cocktail].getId() != id)
            cocktail++;
        return this.cocktails[cocktail];
    }
    deleteCocktail(cocktail){
        //remove element with index        
        this.cocktails.splice(cocktail.getId() - 1, 1);       
        this.view.showCocktails(this.cocktails);       
    }

    addUser(user) {
        if (user instanceof (RegisteredUser)){
            this.users.push(user);
      
        }
    }
    filterFavorites() {        
        this.view.showCocktails(this.actualUser.getFavorites());
    }

    showBox(){
        this.view.showBox(this.messageBox);
    }

    async postUserApi(user){ 
        let url = "https://6148b332035b3600175b9fd8.mockapi.io/Bar/1/"
        try{     
            let res = await fetch(`${url}User`,{
                "method":"POST",
                "headers":{"Content-type":"application/json"},
                "body":JSON.stringify(user)
            });
            if( res.status === 201){            
                console.log(res);       
            }
        }
        catch(e){
            alert("ERROR CATCH POST USER")
        }
    }

    async getArrayUsersApi(){
        let url = "https://6148b332035b3600175b9fd8.mockapi.io/Bar/1/"
        let users;
        try{              
            let res = await fetch(`${url}User`);        
            users = await res.json();                   
            if(res.ok){
                console.log(users);
            }    
            else{
                alert("ERROR, RESP NO OK GET USERS");
                users=[];
            }       
                        
        }            
        catch(error){
            alert("ERROR CATCH GET USERS");
            users=[];
        }    
        return users; 
    }

}

