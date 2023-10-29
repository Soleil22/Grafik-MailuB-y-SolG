import * as components from "../../components/export" 
import RectangleInformation, {LogInAttributes} from "../../components/LogInComponents/RectangleInformation/RectangleInformation"
import InputText, {InputTextAttributes} from "../../components/LogInComponents/InputText/InputText"

class LogInContainer extends HTMLElement {

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
            
            `
            //Rectangle with information
            const RectangleContainer = this.ownerDocument.createElement("rectangle-information") as RectangleInformation
            RectangleContainer.classList.add("Rectangle-information")
            RectangleContainer.setAttribute(LogInAttributes.grafik, "Grafik.com")
            RectangleContainer.setAttribute(LogInAttributes.logo, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            RectangleContainer.setAttribute(LogInAttributes.text, "Welcome!")
            RectangleContainer.setAttribute(LogInAttributes.logo1, "https://cdn-icons-png.flaticon.com/512/59/59439.png")
            RectangleContainer.setAttribute(LogInAttributes.logo2, "https://static-00.iconduck.com/assets.00/google-logo-icon-2014x2048-hsbglouz.png")
            RectangleContainer.setAttribute(LogInAttributes.logo3, "https://www.svgrepo.com/show/108614/linkedin.svg")
            RectangleContainer.setAttribute(LogInAttributes.textsmall, "or use your email")
            this.shadowRoot.appendChild(RectangleContainer)  
            
            const InputText = this.ownerDocument.createElement("input-text") as InputText
            InputText.classList.add("input-text")
            InputText.setAttribute(InputTextAttributes.text, "email")
        }
    }
}

customElements.define("log-container", LogInContainer)