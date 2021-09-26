import { bar } from "../index";

export default function router(route: string){
    
    switch(route){       
            
        case '#/explanations':            
            bar.loadContent(route);
            break;
            
        case '#/cocktails':            
            bar.loadContent(route);
            break;        
    }
}