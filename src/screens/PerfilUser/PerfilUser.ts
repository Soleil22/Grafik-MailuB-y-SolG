import * as components from "../../components/export" 
import EditPerfilUserCss from "./PerfilUser.css"
import TarjetUser, {TarjetUserAttributes} from "../../components/PerfilUserComponents/TarjetUser/TarjetUser"
import NavUp, {NavUpAttribute} from "../../components/PerfilUserComponents/IconsNavUp/IconsNavUp";
import ChangePassword, {InputChangeAttributes} from "../../components/PerfilUserComponents/ChangePassword/ChangePassword";
import firebase from "../../utils/firebase";
const credentials = { email: '', password: '' }
class PerfilUser extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
    }

    async handleUpdateButton(){
        firebase.updateUserEmail(credentials.email)
        firebase.updatePass(credentials.password)
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <style>${EditPerfilUserCss}</style>
            `
            const NavUpDadContainer = this.ownerDocument.createElement("upper-navigator-icons") as NavUp
            NavUpDadContainer.classList.add("contenedor-papa-navup")
            NavUpDadContainer.setAttribute(NavUpAttribute.appicon, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            NavUpDadContainer.setAttribute(NavUpAttribute.bell, "https://www.iconpacks.net/icons/2/free-bell-icon-3063-thumb.png" )
            this.shadowRoot.appendChild(NavUpDadContainer)

            const TarjetUser = this.ownerDocument.createElement("tarjet-user-information") as TarjetUser
            TarjetUser.classList.add("tarjet-information")
            TarjetUser.setAttribute(TarjetUserAttributes.perfil, "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png")
            TarjetUser.setAttribute(TarjetUserAttributes.name, "Anna Smith")
            TarjetUser.setAttribute(TarjetUserAttributes.profession, "UX/UI designer")
            TarjetUser.setAttribute(TarjetUserAttributes.publish, "25")
            TarjetUser.setAttribute(TarjetUserAttributes.bought, "17")
            TarjetUser.setAttribute(TarjetUserAttributes.followers, "220")
            TarjetUser.setAttribute(TarjetUserAttributes.friends, "35")
            this.shadowRoot.appendChild(TarjetUser)  

    
            const containerEditUser = this.ownerDocument.createElement("section")
            containerEditUser.classList.add("editar-usuario")

            const InputEmail = this.ownerDocument.createElement('input')
            InputEmail.classList.add("input")
            InputEmail.placeholder="email"
            InputEmail.type = 'email'
            InputEmail.addEventListener('change', (e: any) => {
                credentials.email = e.target.value
            })

            const InputPass = this.ownerDocument.createElement('input')
            InputPass.classList.add("input")
            InputPass.placeholder="password"
            InputPass.type = 'password'
            InputPass.addEventListener('change', (e: any) => {
                credentials.password = e.target.value
            })

            const btnUpdate = this.ownerDocument.createElement("button")
            btnUpdate.classList.add("btn-log")
            btnUpdate.innerText = "CHANGE PASSWORD"
            btnUpdate.addEventListener('click', this.handleUpdateButton)

            containerEditUser.appendChild(InputEmail)
            containerEditUser.appendChild(InputPass)
            containerEditUser.appendChild(btnUpdate)
            this.shadowRoot.appendChild(containerEditUser)
        }
    }
}

customElements.define("perfil-container", PerfilUser)