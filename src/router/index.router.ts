import { bar } from "../index";

export default function router(route: string){
    console.log(route);
    switch(route){       
            
        case '#/explanations':
            console.log("entro")
            bar.loadContent(route);
            break;
        case '#/cocktails':            
            bar.loadContent(route);
            break;        
    }
}