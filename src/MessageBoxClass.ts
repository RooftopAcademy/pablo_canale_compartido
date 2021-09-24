class MessageBox{
    private _message: string; 

    constructor(){
        this._message = '';
    }
    
    get message(): string{
        return this._message;
    }
    
    set message(message: string){
        this._message = message;
    }    

}