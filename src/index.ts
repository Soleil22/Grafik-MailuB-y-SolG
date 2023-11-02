import "./components/export"
import "./screens/DashBoard/DashBoardIndex"
import "./screens/LogIn/LogIn"
import "./screens/SignUp/SignUp"
import "./screens/PerfilUser/PerfilUser"
import "./screens/PerfilPost/PerfilPost"
import "./screens/Shop/Shop"
import "./screens/Tendencies/tendencies"

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
            <tendencies-container></tendencies-container>
            `
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