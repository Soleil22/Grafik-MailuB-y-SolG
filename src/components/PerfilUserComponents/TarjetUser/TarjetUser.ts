import EditTarjetUserCss from "./TarjetUser.css"

export enum LogInAttributes {
    "grafik" = "grafik",
    "logo"="logo",
    "text"="text",
    "logo1"="logo1",
    "logo2"="logo2",
    "logo3"="logo3",
    "textsmall"="textsmall"
}

class RectangleInformation extends HTMLElement {

    grafik?:  string
    logo?: string
    text?:  string
    logo1?:  string
    logo2?: string
    logo3?: string
    textsmall?: string

    static get observedAttributes(){
        const attrs: Record<LogInAttributes,null>={
            grafik: null,
            logo: null,
            text: null,
            logo1: null,
            logo2: null,
            logo3: null,
            textsmall: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:LogInAttributes,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${EditTarjetUserCss}</style>
            <div class="container">
            <div class="rectangle-container">
                    <div class="text-container">
                    <h3 class="grafik-text">${this.grafik}</h3>
                    <img src="${this.logo}" alt="" class= "logo-grafik">
                    <h3 class="text-welcome-join">${this.text}</h3>
                    </div>
                    <div class="container-button">
                    <img src="${this.logo1}" alt="" class= "social-media-buttons1">
                    <img src="${this.logo2}" alt="" class= "social-media-buttons2">
                    <img src="${this.logo3}" alt="" class= "social-media-buttons3">
                    </div>
                    <p class="small-text">${this.textsmall}</p>
            </div>
            </div>
            `
        }
    }
}

customElements.define("rectangle-information", RectangleInformation)
export default RectangleInformation