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
            <input class="input" type="text" placeholder="${this.text}">
            <input class="input" type="password" placeholder="${this.text2}">
            <input class="input" type="password" placeholder="${this.text2}">
            <input class="input" type="password" placeholder="${this.text2}">
            </div>
            `
        }
    }
}

customElements.define("input-text-change", InputTextChange)
export default InputTextChange