import "./components/export"
import "./screens/DashBoard/DashBoardIndex"

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
            <login-container></login-container>
            `
        }
        }
    }


customElements.define('app-container', AppContainer)

//<main-container></main-container>