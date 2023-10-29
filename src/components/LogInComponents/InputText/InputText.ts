import EditInputTextCss from "./InputText.css"

export enum InputTextAttributes {
    "email" = "email",
    "password"="password",
    "text"="text",
}

class InputText extends HTMLElement {

    email?:  string
    password?: string
    text?:  string

    static get observedAttributes(){
        const attrs: Record<InputTextAttributes,null>={
            email: null,
            password: null,
            text: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:InputTextAttributes,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${EditInputTextCss}</style>
            `
        }
    }
}

customElements.define("input-text", InputText)
export default InputText