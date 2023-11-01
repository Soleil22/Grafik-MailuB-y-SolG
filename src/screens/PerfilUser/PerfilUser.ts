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
            const TarjetUser = this.ownerDocument.createElement("tarjet-user-information") as TarjetUser
            TarjetUser.classList.add("tarjet-information")
            TarjetUser.setAttribute(TarjetUserAttributes.perfil, "https://s3-alpha-sig.figma.com/img/022b/9ed5/0cfe89950d617403ba13fe5cd3b92fc2?Expires=1699833600&Signature=Y2k0WUtHO5bW3VzWJjyN7Yaj4m4Qs7xp~fw~NUfT5o3W8fbCuNJrWCh~Zxho93yapU8CaacueP4UF~kE4yptnc8N8y8wk5NTgxqV2-HnkTor3juCwCrxbSLMW-1D0JMc5Gxd8Bgix9ChkAgfJDa6uNRodd-0nlNXbD~SuQSd8z5mdaB4iUfG4pKPRXHiau-aX09DO4EcssQ9o8GYNq~zfUWaBfWMdx5JFzZliySJy7DN9158n5W6GCc1qZWsJZ9nTv4vstD7i-okbkfrim~WgAKoWzI1VfDJsrYVRMNhXtkVij8fRA8SCzYHX5Bn54s6L8ZI-nMlO0tE5A9KyBWfbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            TarjetUser.setAttribute(TarjetUserAttributes.name, "Anna Smith")
            TarjetUser.setAttribute(TarjetUserAttributes.profession, "UX/UI designer")
            TarjetUser.setAttribute(TarjetUserAttributes.publish, "25")
            TarjetUser.setAttribute(TarjetUserAttributes.bought, "17")
            TarjetUser.setAttribute(TarjetUserAttributes.followers, "220")
            TarjetUser.setAttribute(TarjetUserAttributes.friends, "35")
            this.shadowRoot.appendChild(TarjetUser)  
        }
    }
}

customElements.define("perfil-container", PerfilUser)