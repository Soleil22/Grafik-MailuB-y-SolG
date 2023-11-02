import "./components/export"
import "./screens/DashBoard/DashBoardIndex"
import "./screens/LogIn/LogIn"
import "./screens/SignUp/SignUp"
import "./screens/PerfilUser/PerfilUser"
import "./screens/PerfilPost/PerfilPost"
import "./screens/Shop/Shop"

import { addObserver } from "./store/index";
import { appState } from "./store/index";
import { Screens } from "./types/navigation";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``
        switch (appState.screen) {
            case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement("main-container");
                this.shadowRoot?.appendChild(dashboard);
                break;
        
            case Screens.LOGIN:
                const login = this.ownerDocument.createElement("log-container");
                this.shadowRoot?.appendChild(login);
                break;
        
            default:
                break;
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