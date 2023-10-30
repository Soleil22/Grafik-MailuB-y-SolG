import EditButtonSignCss from "./Button.css"

export enum ButtonAttributes {
    "textsignup" = "textsignup",
    "text"="text",
    "link"="link",
}

class ButtonsSignUp extends HTMLElement {
    text?:  string
    link?:  string
    textsignup?: string

    static get observedAttributes(){
        const attrs: Record<ButtonAttributes,null>={
            text: null,
            link: null,
            textsignup: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:ButtonAttributes,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${EditButtonSignCss}</style>
            <div class="container-signup">
            <button class="button-signup">${this.textsignup}</button>
            <p>${this.text}<a href=""> ${this.link}</a></p>
            </div>
            `
        }
    }
}

customElements.define("buttons-sign", ButtonsSignUp)
export default ButtonsSignUp