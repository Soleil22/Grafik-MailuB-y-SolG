import EditInputTextCss from "./InputText.css"

export enum InputTextAttributes {
    "text"="text"
}

class InputText extends HTMLElement {
    text?:  string

    static get observedAttributes(){
        const attrs: Record<InputTextAttributes,null>={
            text: null
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
            <div>
            <input type="text" placeholder="${this.text}">
            <input type="password" placeholder="${this.text}">
            </div>
            `
        }
    }
}

customElements.define("input-text", InputText)
export default InputText