import EditButtonsCss from "./Buttons.css"

export enum ButtonAttributes {
    "textlogin"="textlogin",
    "remember"="remember",
    "textsignup" = "textsignup"
}

class ButtonsLogin extends HTMLElement {
    textlogin?:  string
    remember?:  string
    textsignup?: string

    static get observedAttributes(){
        const attrs: Record<ButtonAttributes,null>={
            textlogin: null,
            remember: null,
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
            <style>${EditButtonsCss}</style>
            <div class="container-buttons">
            <button class="button-login">${this.textlogin}</button>
            <div class="container-signup">
            <a class="link-account"href="">${this.remember}</a>
            <button class="button-signup">${this.textsignup}</button>
            </div>
            </div>
            `
        }
    }
}

customElements.define("buttons-login", ButtonsLogin)
export default ButtonsLogin