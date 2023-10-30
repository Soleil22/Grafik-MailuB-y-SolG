import * as components from "../../components/export" 
import EditSignUpCss from "./SignUpStyle.css"
import RectangleInformation, {LogInAttributes} from "../../components/LogInComponents/RectangleInformation/RectangleInformation"

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
            <style>${EditSignUpCss}</style>
            `
            
        }
    }
}

customElements.define("sign-container", SignUpContainer)