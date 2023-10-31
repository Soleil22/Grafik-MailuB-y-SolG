import * as components from "../../components/export" 
import EditPerfilUserCss from "./PerfilUser.css"

class SignUpContainer extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <style>${EditPerfilUserCss}</style>
            `
        }
    }
}

customElements.define("sign-container", SignUpContainer)