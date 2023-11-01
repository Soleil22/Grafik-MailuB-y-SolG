import EditPasswordCss from "./ChangePassword.css"

export enum InputChangeAttributes {
    "text"="text",
    "text2"="text2"
}

class InputTextChange extends HTMLElement {
    text?:  string
    text2?:  string

    static get observedAttributes(){
        const attrs: Record<InputChangeAttributes,null>={
            text: null,
            text2: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:InputChangeAttributes,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${EditPasswordCss}</style>
            <div class="container-input">
            <h1>Change password</h1>
            <p>Email</p>
            <input class="input" type="text" placeholder="${this.text}">
            <p>Old password</p>
            <input class="input" type="password" placeholder="${this.text2}">
            <p>New password</p>
            <input class="input" type="password" placeholder="${this.text2}">
            <p>Repeat password</p>
            <input class="input" type="password" placeholder="${this.text2}">
            <div>
            <button class="button">cancel change</button>
            <button class="button">change password</button>
            </div>
            </div>
            `
        }
    }
}

customElements.define("input-text-change", InputTextChange)
export default InputTextChange