import EditRectangleInformationCss from "./RectangleInformation.css"

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
            <style>${EditRectangleInformationCss}</style>
            <div class="rectangle-container">
                <div>
                    <h3 class="grafik-text">${this.grafik}</h3>
                </div>
                <div>
                    <img src="${this.logo}" alt="" class= "logo-grafik">
                    <h3 class="text-welcome-join">${this.text}</h3>
                    <div class="container-button">
                    <button class="social-media-buttons">${this.logo1}</button>
                    <button class="social-media-buttons">${this.logo2}</button>
                    <button class="social-media-buttons">${this.logo3}</button>
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