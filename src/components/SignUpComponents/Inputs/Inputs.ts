import EditInputSignCss from "./InputsStyle.css"

export enum InputSignAttributes {
    "text"="text",
    "text2"="text2",
    "pass" = "pass",
    "pass2" = "pass2"
}

class InputText extends HTMLElement {
    text?:  string
    text2?:  string
    pass?:  string
    pass2?:  string

    static get observedAttributes(){
        const attrs: Record<InputSignAttributes,null>={
            text: null,
            text2: null,
            pass: null,
            pass2: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:InputSignAttributes,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${EditInputSignCss}</style>
            <div class="container-input">
            <input class="input" type="text" placeholder="${this.text}">
            <input class="input" type="text" placeholder="${this.text2}">
            <input class="input" type="password" placeholder="${this.pass}">
            <input class="input" type="password" placeholder="${this.pass2}">
            </div>
            `
        }
    }
}

customElements.define("input-text-sign", InputText)
export default InputText