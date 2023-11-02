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
            decoration.setAttribute(DecorationAttributes.img2, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            decoration.setAttribute(DecorationAttributes.img1, "https://s3-alpha-sig.figma.com/img/022b/9ed5/0cfe89950d617403ba13fe5cd3b92fc2?Expires=1696204800&Signature=B8hSlQTrManrBxpvxZi-x8CG3YTpn1rgpTiNS0Nvu3HQawGz29BvWbz4bANND-Dndc8HcWLoxKPKEh5nofkYemmcJ4c-JH28JpPMcnNkol732tVlh-eE2om1iZJKJjdVtoAg4fA5qIbJBkaOsOFcqXM~UL2dDUVK--RQVjEvywe0oXZNntG6UVz1gSoSb25RgkqWEustu6QVZ722GyEeeC4TQEavJXLLTwl0sx2agxYeqciMtc13myVVyGQevR-eDaEwQOJTstljUb9xcDqlrHNbzUKApF4Dbb~WgUNaIqerBWL7ObZW9z0v4xMG3ej9lwtaNGrN~iJYhHifHPD-Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            decoration.setAttribute(DecorationAttributes.img3, "https://s3-alpha-sig.figma.com/img/ec92/2180/08540f58212964c427891bf8327f0d27?Expires=1699833600&Signature=maLpvAp8WuLPUjmx0YWk9d07OOhRssPPEIIAfjWAakgy951DnaaL~Zym7y~UnLpfjVWiRKGQbnDsP~69MznA7bovs27icw~j8xwZyi0Gf7urBdC6JfDrWqBe67Pawmfu1DllMXP-HpQY8diF6EBOg13NkoR0pzN-IR1SBwOYFmoF4GhpaUdOVzqGRuxiu8XkdyHXGW8zuv0Etumht1~aS2ef3gd~4bXsiSmt7ZYAS~gpXafjadRST3OcL9xVBt1Q6vMogvz~r6a2TPHqeBLXHtSt-N7b0cw80KveNFe2hpXmTb9Z05ZcFafP79QIg5jAunzr4BbhNev1xcDqDYpR-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            decoration.setAttribute(DecorationAttributes.img4, "https://s3-alpha-sig.figma.com/img/da64/f02c/97a514e9e8c98d647f06c12400f1f0bd?Expires=1699833600&Signature=A0qXjuPUp2~p6hvRB7U14~KC-pJkuHDpkHRxEkhZX1TGMNYgNMs68vU3OR8~GIMsT67pv2PNiuYZBt8-GwmWkf284SPp~okg5FZdVzTF6jJV0TXI6WE0ZQhtRmuO-NfUsg~D9H8ybSUVOS198jFHPSTlrzNJZXnLfamp83-hvgV9SUmTKJAtI~fhLI1O5YvhtT2uaXxDFo7frzgh7J9VS320J9eGdXO6GIdKgLR6uTHS8Iijiw1ZbJD6hngzSxKWP~spL6xYJxlrUjSg6Iis~47q~N8Mx8WmSzfI4bdTcUP4098IVNnB6JiFTuDMgFgJmo8ojajQMyd~NfNrHnj9zw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            decoration.setAttribute(DecorationAttributes.img5, "https://www.figma.com/file/MB6JxhOuCnQGcA3HR4p10U/image/35deaa821bd4884197e76a04b3286e1852b2fc15?fuid=1069449700781241913")
            decoration.setAttribute(DecorationAttributes.img6, "https://s3-alpha-sig.figma.com/img/17b8/0342/98754c0d3fc94c68729548274a0f86c6?Expires=1699833600&Signature=SwuJGouYmAuUUy5D9t51OJuYvs4t7jiic1lxFr2CJTDN7LjpUFDZw-sFg2GkK69CC8bxEHm1yufnyblqJdz3AdppXI55WKM9mloQtmZPzZw9KCbfyEiXY7e2w5L6DT6mpjLuf6XaUSSWleuxqBQZpxba4ifKrUDU4CowkExKbhCr7tCJBrwDfs7hPS0nM2qxqbzWEq8RVBatVsy7lNYHgGYrQuMBVKlAUN1mZylPxpT69h1cKhHf0Ts4V7e9wwebwnYS7e6c4og6Zt46RehUcbYZsklBpoLZLt2iXEULx6Vl1GRoU3nKQbds7-DR265Rfk74r4IhRVwoSEI5GcMR2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            decoration.setAttribute(DecorationAttributes.img7, "https://s3-alpha-sig.figma.com/img/e763/eff0/4bee936a5021ed7f06196af11a7aa0ae?Expires=1699833600&Signature=GKdmpOL~8myS1qhuHKQUPY0~51ESqt97q-6so5yTCFR0QMtrHBz5SwM-esBF0Zb8~RT3Gvxitl76ukPj4AhEojH-rZTqfJfPxRBih7-AwmJ1q-g1MO3m83CujqCE6cQ7wW6w7hVr3GOKF3ZIPIeBhpxJDW47tTSExS5YKgyhXTsh1fPfLwmLtGtBn-lOnYZoRZiUgubxAsSi6cPWj7AvK-qi-Z3nQXFMhF2TgkcAF-mMnbxBzG89F5EXsUSxnsJWftnKZQ1Qx9BhpMqZEZDQ3R6NKurntrAIzdDd~004mbm3t6VhHatD4r9q-pUOtCoJOWW-V1jAzS~GKJb2T20W1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            this.shadowRoot.appendChild(decoration)
        }
    }
}

customElements.define("log-container", LogInContainer)