import * as components from "../../components/export" 
import RectangleInformation, {LogInAttributes} from "../../components/LogInComponents/RectangleInformation/RectangleInformation"

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
            const RectangleContainer = this.ownerDocument.createElement("rectangle-main") as RectangleInformation
            RectangleContainer.classList.add("Rectangle-information")
            RectangleContainer.setAttribute(LogInAttributes.grafik, "Grafik.com")
            RectangleContainer.setAttribute(LogInAttributes.logo, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            RectangleContainer.setAttribute(LogInAttributes.text, "Welcome!")
            
        }
    }
}