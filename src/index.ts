import "./components/export"
import "./screens/DashBoard/DashBoardIndex"
import "./screens/LogIn/LogIn"

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
            <log-container></log-container>
            `
        }
    }
}


customElements.define('app-container', AppContainer)

//<main-container></main-container>