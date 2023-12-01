import EditCardCss from "./Card.css"
import { addObserver, appState, dispatch } from "../../../store";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/navigation";

export enum Attribute {
    "user" = "user",
    "followers" = "followers",
    "profilepic" = "profilepic",
    "projectpic" = "projectpic"
}

class CardUser extends HTMLElement {
    user?: string
    followers?: string
    profilepic?: string
    projectpic?: string

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            user: null,
            followers: null,
            profilepic: null,
            projectpic: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render()

        // const buttonfalse = this.shadowRoot?.querySelector(".card-main-container");
        // buttonfalse?.addEventListener(('click'), () =>{
        //   dispatch(navigate(Screens.PUBLICATIONS))
        // })
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${EditCardCss}</style>
            <div class="card-main-container">
            <img src="${this.profilepic}" alt="" class="profile-pic">
            <img src="${this.projectpic}" alt="" class= "project-background">
            <h3 class="user-name">${this.user}</h3>
            <p class="followers-number">${this.followers}</p>
            </div>
            `
        }
    }
}

customElements.define("designer-card",CardUser)
export default CardUser