import * as components from "../../components/export" 
import EditLogInCss from "./LogInStyle.css"
import RectangleInformation, {LogInAttributes} from "../../components/LogInComponents/RectangleInformation/RectangleInformation"
import InputText, {InputTextAttributes} from "../../components/LogInComponents/InputText/InputText"
import ButtonsLogin, {ButtonAttributes} from "../../components/LogInComponents/Buttons/Buttons"
import DecorationBackground, {DecorationAttributes}  from "../../components/LogInComponents/DecorationBackground/DecorationBackground"

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
            <style>${EditLogInCss}</style>
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
            InputText.setAttribute(InputTextAttributes.text2, "password")
            this.shadowRoot.appendChild(InputText)

            const linkPasswordForgot = this.ownerDocument.createElement("a")
            linkPasswordForgot.classList.add("password-forgot")
            linkPasswordForgot.textContent="Forgot your password?"
            this.shadowRoot.appendChild(linkPasswordForgot)

            /*const ButtonLogIn = this.ownerDocument.createElement("button")
            ButtonLogIn.classList.add("button-remember")
            this.shadowRoot.appendChild(ButtonLogIn)*/
            //estilo en CSS
            /*
            .button-remember{
            border-radius: 100rem;
            background: #ffffff;
            border-color: #601FEB;
            width: 0.9rem;
            height: 0.9rem;
            }
            */

            const ButtonsLogIn = this.ownerDocument.createElement("buttons-login") as ButtonsLogin
            ButtonsLogIn.classList.add("Buttons-login")
            ButtonsLogIn.setAttribute(ButtonAttributes.textlogin, "LOG IN")
            ButtonsLogIn.setAttribute(ButtonAttributes.remember, "Don't have an account yet?")
            ButtonsLogIn.setAttribute(ButtonAttributes.textsignup, "SIGN UP")
            this.shadowRoot.appendChild(ButtonsLogIn)

            //background decoration
            const decoration = this.ownerDocument.createElement("decoration-container") as DecorationBackground
            decoration.classList.add("decoration")
            decoration.setAttribute(DecorationAttributes.img1, "https://s3-alpha-sig.figma.com/img/022b/9ed5/0cfe89950d617403ba13fe5cd3b92fc2?Expires=1696204800&Signature=B8hSlQTrManrBxpvxZi-x8CG3YTpn1rgpTiNS0Nvu3HQawGz29BvWbz4bANND-Dndc8HcWLoxKPKEh5nofkYemmcJ4c-JH28JpPMcnNkol732tVlh-eE2om1iZJKJjdVtoAg4fA5qIbJBkaOsOFcqXM~UL2dDUVK--RQVjEvywe0oXZNntG6UVz1gSoSb25RgkqWEustu6QVZ722GyEeeC4TQEavJXLLTwl0sx2agxYeqciMtc13myVVyGQevR-eDaEwQOJTstljUb9xcDqlrHNbzUKApF4Dbb~WgUNaIqerBWL7ObZW9z0v4xMG3ej9lwtaNGrN~iJYhHifHPD-Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            decoration.setAttribute(DecorationAttributes.img2, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            this.shadowRoot.appendChild(decoration)
        }
    }
}

customElements.define("log-container", LogInContainer)