import "./components/export"
import "./screens/DashBoard/DashBoardIndex"
import "./screens/LogIn/LogIn"
import "./screens/SignUp/SignUp"
import "./screens/PerfilUser/PerfilUser"
import "./screens/PerfilPost/PerfilPost"
import "./screens/Tendencies/tendencies"
import "./screens/PerfilExternalUsers/PerfilDesigners"

import { addObserver } from "./store/index";
import { appState } from "./store/index";
import { Screens } from "./types/navigation";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        `
        switch (appState.screen) {
            case Screens.LOGIN:
                const login = this.ownerDocument.createElement("log-container");
                this.shadowRoot?.appendChild(login);
                break;

            case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement("main-container");
                this.shadowRoot?.appendChild(dashboard);
                break;

            case Screens.SIGNUP:
                const signup = this.ownerDocument.createElement("sign-container");
                this.shadowRoot?.appendChild(signup);
                break;

            case Screens.PERFILUSER:
                const perfiluser = this.ownerDocument.createElement("perfil-container");
                this.shadowRoot?.appendChild(perfiluser);
                break;

            case Screens.PUBLICATIONS:
                const publications = this.ownerDocument.createElement("perfil-card-designer");
                this.shadowRoot?.appendChild(publications);
                break; 

            case Screens.TENDENCIES:
                const tendencies = this.ownerDocument.createElement("tendencies-container");
                this.shadowRoot?.appendChild(tendencies);
                break;

            case Screens.USERPOST:
                const userpost = this.ownerDocument.createElement("perfil-post-container");
                this.shadowRoot?.appendChild(userpost);
                break;
        
        //     default:
        //         break;
            }
    }
}
customElements.define('app-container', AppContainer)

//<main-container></main-container>

//<log-container></log-container>

//<perfil-container></perfil-container>

//<perfil-post-container></perfil-post-container>

//<sign-container></sign-container>

//<shop-container></shop-container>

//<tendencies-container></tendencies-container>