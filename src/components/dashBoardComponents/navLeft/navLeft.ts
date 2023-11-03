import EditNavLeft from "./navLeft.css"

import { addObserver, appState, dispatch } from "../../../store";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/navigation";

export enum NavLeftAttributes {
    "profileimg" = "profileimg",
    "username" = "username"
}

class NavLeft extends HTMLElement {
        
    profileimg?: string
    username?: string

    static get observedAttributes(){
        const attrs: Record<NavLeftAttributes,null> = {
            profileimg: null, 
            username: null
        }
        return Object.keys(attrs)
    } 

    attributeChangedCallback(propName:NavLeftAttributes,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
     constructor(){
        super()
        this.attachShadow({mode:"open"})
        addObserver(this);
     }

     async connectedCallback(){
        this.render()
        const button = this.shadowRoot?.querySelector(".imagen");
        button?.addEventListener(('click'), () =>{
          dispatch(navigate(Screens.USERPOST))
        })
        const buttonT = this.shadowRoot?.querySelector(".buttonTend");
        buttonT?.addEventListener(('click'), () =>{
          dispatch(navigate(Screens.TENDENCIES))
        })
     }

     render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${EditNavLeft}</style>
            <div class="navLeft">
                <div class="imgProfile">
                    <img class="imagen" src="${this.profileimg}">
                    <p class="text">Hi, ${this.username}</p>
                </div>
                <div class="buttonContainer">
                    <button class="buttonHome">Home</button>
                    <button class="buttonTend">Tendencies</button>
                </div>
            </div>
            `
        }
     }
}
customElements.define("nav-left", NavLeft)
export default NavLeft