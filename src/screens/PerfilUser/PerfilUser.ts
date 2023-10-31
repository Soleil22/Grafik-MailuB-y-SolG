import * as components from "../../components/export" 
import EditPerfilUserCss from "./PerfilUser.css"
import TarjetUser, {TarjetUserAttributes} from "../../components/PerfilUserComponents/TarjetUser/TarjetUser"

class PerfilUser extends HTMLElement {

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
            const TarjetUser = this.ownerDocument.createElement("rectangle-information") as TarjetUser
            TarjetUser.classList.add("Rectangle-information")
            TarjetUser.setAttribute(TarjetUserAttributes.perfil, "Grafik.com")
            TarjetUser.setAttribute(TarjetUserAttributes.name, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            TarjetUser.setAttribute(TarjetUserAttributes.profession, "Join Us!")
            TarjetUser.setAttribute(TarjetUserAttributes.publish, "https://cdn-icons-png.flaticon.com/512/59/59439.png")
            TarjetUser.setAttribute(TarjetUserAttributes.bought, "https://static-00.iconduck.com/assets.00/google-logo-icon-2014x2048-hsbglouz.png")
            TarjetUser.setAttribute(TarjetUserAttributes.followers, "https://www.svgrepo.com/show/108614/linkedin.svg")
            TarjetUser.setAttribute(TarjetUserAttributes.friends, "register your data")
            this.shadowRoot.appendChild(TarjetUser)  
        }
    }
}

customElements.define("perfil-container", PerfilUser)