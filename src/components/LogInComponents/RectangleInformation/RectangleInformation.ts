import EditRectangleInformationCss from "./RectangleInformation.css"

export enum FooterAttributes {
    "grafik" = "grafik",
    "logo"="logo",
    "text"="text",
    "logos"="logos",
    "textsmall"="textsmall"
}

class RectangleInformation extends HTMLElement {

    grafik?:  string
    logo?: string
    text?:  string
    logos?:  string
    textsmall?:  string

    static get observedAttributes(){
        const attrs: Record<FooterAttributes,null>={
            grafik: null,
            logo: null,
            text: null,
            logos: null,
            textsmall: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:FooterAttributes,oldValue: string | undefined,newValue: string | undefined){
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
                    <img src="${this.logos}" alt="" class= "logos-redes">
                    <p class="small-text">${this.textsmall}</p>
                </div>
            </div>
            `
    }
}
}

customElements.define("Rectangle-information", RectangleInformation)
export default RectangleInformation