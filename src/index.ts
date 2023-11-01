import "./components/export"
import "./screens/DashBoard/DashBoardIndex"
import "./screens/LogIn/LogIn"
import "./screens/SignUp/SignUp"
import "./screens/PerfilUser/PerfilUser"
import "./screens/PerfilPost/PerfilPost"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <perfil-container></perfil-container>
            `
        }
    }
}


customElements.define('app-container', AppContainer)

//<main-container></main-container>

//<log-container></log-container>

//<perfil-container></perfil-container>

//<sign-container></sign-container>