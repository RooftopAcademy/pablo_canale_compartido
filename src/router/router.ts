import { addCocktail, registerUser, loginUser } from '../forms';
import { bar } from "../index";

interface CustomEvents {
    name : string 
    callback : Function
}

interface RouteInterface {
    id : string 
    htmlPage : string 
    listeners : CustomEvents[]
}

export default class Router {
    private viewsDir = '../../public/view/'
    private viewsExt = '.html'

    public constructor(options = {
        viewsDir : '',
        viewsExt : ''
    }) {
        if (options.viewsDir) this.viewsDir = this.viewsDir
        if (options.viewsExt) this.viewsDir = this.viewsExt
    }

    private routes : RouteInterface[] = [
        { 
            id: '#/cocktails.html', 
            htmlPage: 'cocktails', 
            listeners: [
                {
                    name : 'form-register',
                    callback: registerUser
                }, 
                {
                    name : 'form-login',
                    callback: loginUser
                }, 
                {
                    name : 'form-cocktails',
                    callback: addCocktail
                }
            ] 
        },
        {
            id: '#/explenations.html', 
            htmlPage: 'explanations', 
            listeners: []
        }
    ];

    //*************** METHODS ***************************/
    private getHTMLPage(route : RouteInterface): string | null {
        let r = this.routes.find(r => route.id === r.id);

        if (r) {
            return this.viewsDir + r.htmlPage + this.viewsExt
        }

        return null
    }

    private addListenterSubmit(route : RouteInterface) {
        route.listeners.forEach(listener => {
            document
                .getElementById(listener.name)
                .addEventListener('submit', () => listener.callback)
        });
    }

    findRoute(id : string) : RouteInterface {
        return this.routes.find(route => route.id === id)
    }

    loadPage(id: string) {
        let route = this.findRoute(id)

        bar.loadContent(this.getHTMLPage(route))
        this.addListenterSubmit(route)
    }
}
