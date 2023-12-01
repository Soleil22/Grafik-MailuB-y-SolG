import * as components from "../../components/export"
import EditSignUpCss from "./SignUpStyle.css"
import RectangleInformation, { LogInAttributes } from "../../components/LogInComponents/RectangleInformation/RectangleInformation"
import DecorationBackground, { DecorationAttributes } from "../../components/LogInComponents/DecorationBackground/DecorationBackground"
import Inputs, { InputSignAttributes } from "../../components/SignUpComponents/Inputs/Inputs"
import firebase from "../../utils/firebase"
import { dispatch } from "../../store"
import { navigate } from "../../store/actions"
import { Screens } from "../../types/navigation"
import EditInputSignCss from "../../components/SignUpComponents/Inputs/InputsStyle.css"
import EditButtonSignCss from "../../components/SignUpComponents/Button/Button.css"

const credentials = { email: '', password: '' }
class SignUpContainer extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

   async connectedCallback() {
        this.render()    
        const buttons = this.shadowRoot?.querySelector(".btn-log");
        buttons?.addEventListener(('click'), () =>{
          dispatch(navigate(Screens.LOGIN))
        })      
    }

    async handleRegisterButton() {
        firebase.registerUser(credentials)
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>${EditSignUpCss}</style>
            <style>${EditInputSignCss}</style>
            <style>${EditButtonSignCss}</style>
            `
            //data register
            const RectangleContainer = this.ownerDocument.createElement("rectangle-information") as RectangleInformation
            RectangleContainer.classList.add("Rectangle-information")
            RectangleContainer.setAttribute(LogInAttributes.grafik, "Grafik.com")
            RectangleContainer.setAttribute(LogInAttributes.logo, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            RectangleContainer.setAttribute(LogInAttributes.text, "Join Us!")
            RectangleContainer.setAttribute(LogInAttributes.logo1, "https://cdn-icons-png.flaticon.com/512/59/59439.png")
            RectangleContainer.setAttribute(LogInAttributes.logo2, "https://static-00.iconduck.com/assets.00/google-logo-icon-2014x2048-hsbglouz.png")
            RectangleContainer.setAttribute(LogInAttributes.logo3, "https://www.svgrepo.com/show/108614/linkedin.svg")
            RectangleContainer.setAttribute(LogInAttributes.textsmall, "register your data")
            this.shadowRoot.appendChild(RectangleContainer)

            //decoration page
            const decoration = this.ownerDocument.createElement("decoration-container") as DecorationBackground
            decoration.classList.add("decoration")
            decoration.setAttribute(DecorationAttributes.img2, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            decoration.setAttribute(DecorationAttributes.img1, "https://s3-alpha-sig.figma.com/img/022b/9ed5/0cfe89950d617403ba13fe5cd3b92fc2?Expires=1702252800&Signature=FDuVTQOjTriLMCxJmkw3OwGgyhYPjt3cVLh-3bQ1NJKdaL31bHCwYH2hEKfmmHo0j8TO9A3HnHNmn29o2GKhw4AUXj7KePP6CaVZiajHNKOLzQ-hJMvAgX8eZLhCVYcM4DaRrlUf9zZrGEyRkCarbi0yY8gSO-zf3O9oX4iH4psL901yS6Yuffd~MTcG7G9WAv5hExwBFQmZqsxQK65yoOPDJI0nHcJWnniMiIK7SuFIDcyTVsXvf4WWC2i2qPwwNG6y5oh7exbDMGZWMzW9FfQeBdtAf86xU9~mBJvEAkq6orOOwlbmb1U4tgqickMbMVmnPDKotgR8Wl1jXe0KHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            decoration.setAttribute(DecorationAttributes.img3, "https://s3-alpha-sig.figma.com/img/ec92/2180/08540f58212964c427891bf8327f0d27?Expires=1702252800&Signature=MWY139W6F~Pz5HPsqx6ojPoWDLfEeH9Iw0MdNTqsYpVfnVuzuG6m5MXVXrlU-iTWUdEBlxFLHWFKRdf8vdh8oHexw6lRQaXyY8F72-Xrs21j57wntJYs0UjRmIQGFCyIvr0Pz4aRzUYxLll8D8KeI~36BRa3eBCbPRwemcTNpnVYzW59Q87AYMtFkxcAoJDH4HeUZANd7~ZFpgfUfB~GCFgU8ZEkZ9peZuRN1DAC~nzALoqkiK9LeleHwsLVomvlXLU8X-yeyo6dN3RvyflYUbFJ8~F7wGlynVqJgcuIYD~Y4nf1-W51XdkTnwRColL0MHtLtu-UneB99-gJ~Q~jzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            decoration.setAttribute(DecorationAttributes.img4, "https://s3-alpha-sig.figma.com/img/da64/f02c/97a514e9e8c98d647f06c12400f1f0bd?Expires=1702252800&Signature=T5xlefapZApWM3XyRxBqnLuY-6eURnbakP~sNwboTrJz3H0NuyujhLGSQUudbBQSBvcKSSzKuPzn98x60MvviPB6Z7pfw3erzyY7VIUuuIw2brDBGEzmLsXrZ1fRfpqf0TTPScXTEwJvKFEyznbb8bwp05vahE1dF~3TdBgsYDwXH03n7HCfq9ryh68gcF-eBy4lThvDb70APfoZBjQvCpHn0PLOfJ6uIym1zz-BXAH7pRMvK69gq8qOqhF3EXY-pbWHKPSV4VXPDU8FoEY1I6eBnoVMTooj8vxqgm5XUJWhSuMFgyZFmM0d~91D-5KxrRkABbNVOPMnVyGE6Go7ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            decoration.setAttribute(DecorationAttributes.img5, "https://www.figma.com/file/MB6JxhOuCnQGcA3HR4p10U/image/35deaa821bd4884197e76a04b3286e1852b2fc15?fuid=1069449700781241913")
            decoration.setAttribute(DecorationAttributes.img6, "https://github.com/Soleil22/imagenes-grafik/blob/main/emoticon%20login%20y%20sign%20up.png?raw=true")
            decoration.setAttribute(DecorationAttributes.img7, "https://s3-alpha-sig.figma.com/img/022b/9ed5/0cfe89950d617403ba13fe5cd3b92fc2?Expires=1702252800&Signature=FDuVTQOjTriLMCxJmkw3OwGgyhYPjt3cVLh-3bQ1NJKdaL31bHCwYH2hEKfmmHo0j8TO9A3HnHNmn29o2GKhw4AUXj7KePP6CaVZiajHNKOLzQ-hJMvAgX8eZLhCVYcM4DaRrlUf9zZrGEyRkCarbi0yY8gSO-zf3O9oX4iH4psL901yS6Yuffd~MTcG7G9WAv5hExwBFQmZqsxQK65yoOPDJI0nHcJWnniMiIK7SuFIDcyTVsXvf4WWC2i2qPwwNG6y5oh7exbDMGZWMzW9FfQeBdtAf86xU9~mBJvEAkq6orOOwlbmb1U4tgqickMbMVmnPDKotgR8Wl1jXe0KHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            this.shadowRoot.appendChild(decoration)

            const formSignUp = this.ownerDocument.createElement("section")
            formSignUp.classList.add("container-input")
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

            formSignUp.appendChild(InputEmail)
            formSignUp.appendChild(InputPass)
            this.shadowRoot.appendChild(formSignUp)
            
            const containerB = this.ownerDocument.createElement("section")
            containerB.classList.add("container-signup")
            const registerBtn = this.ownerDocument.createElement('button')
            registerBtn.classList.add("button-signup")
            registerBtn.innerText="SIGN UP"
            registerBtn.addEventListener('click', this.handleRegisterButton)
            containerB.appendChild(registerBtn)
            this.shadowRoot.appendChild(containerB) 
            
            const containerSignUp = this.ownerDocument.createElement("section")
            containerSignUp.classList.add("container-sign")

            const text = this.ownerDocument.createElement("a")
            text.classList.add("password-forgot")
            text.innerText = "Already have an account?"
            containerSignUp.appendChild(text)

            const btnSign = this.ownerDocument.createElement("button")
            btnSign.classList.add("btn-log")
            btnSign.innerText = "LOG IN"
            containerSignUp.appendChild(btnSign)

            this.shadowRoot.appendChild(containerSignUp)
        }

    }
}

customElements.define("sign-container", SignUpContainer)