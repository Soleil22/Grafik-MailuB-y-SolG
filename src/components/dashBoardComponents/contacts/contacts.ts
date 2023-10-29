import EditContactStyle from "./contact.css"

export enum ContactAttributes {
    "profileimage"="profileimage",
    "username"="username"
}

class Contacts extends HTMLElement {

    profileimage?:  string
    username?:  string

    static get observedAttributes(){
        const attrs: Record<ContactAttributes,null>={
            profileimage: null,
            username: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:ContactAttributes,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${EditContactStyle}</style>
            <div class="Contact">
            <img class="profileImage" src="${this.profileimage}" alt="">
            <p class="username">${this.username}</p>
            </div>
            `
    }
}
}

customElements.define("contact-info", Contacts)
export default Contacts