import { addCocktail, registerUser, loginUser } from '../forms';
import { bar } from "../index";

export default class Router {

    private routes = [
        { id: '#/cocktails.html', route: '../../public/view/cocktails.html', idComponents: ['form-register', 'form-login', 'form-cocktails'] },
        { id: '#/explenations.html', route: '../../public/view/explanations.html', idComponets: [''] }
    ];

    private listenerFunctions = [
        { id: 'form-register', function: registerUser },
        { id: 'form-login', function: loginUser },
        { id: 'form-cocktails', function: addCocktail }
    ]

    //*************** METHODS ***************************/
    private getFunction(id: string) {
        let funct: any;
        this.listenerFunctions.forEach(element => {
            if (id === element.id)
                funct = element.function;
        });
        return funct;
    }

    private getIdComponents(id: string) {
        let idComponts: string[] = [];
        this.routes.forEach(element => {
            if ((id === element.id) && (element.idComponents != ['']))
                idComponts = element.idComponents;
        });
        return idComponts;
    }

    private getRoute(id: string): string {
        let route: string = '';
        this.routes.forEach(element => {
            if (id === element.id)
                route = element.route;
        });
        return route;
    }

    private addListenterSubmit(idComponents: string[]) {
        idComponents.forEach(id => {
            let listenerFunction = this.getFunction(id)
            document.getElementById(id).addEventListener('submit', listenerFunction)
        });
    }

    /**
     * ? Estan bien las funciones de arriba? 
     * @param id 
     */

    loadPage(id: string) {
        bar.loadContent(this.getRoute(id))
        this.addListenterSubmit(this.getIdComponents(id))
    }
}





