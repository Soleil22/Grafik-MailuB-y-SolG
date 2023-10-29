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
            <div class="footer-container">
                <div>
                    <h3 class="logoFooter">${this.logo}</h3>
                </div>
                <div>
                    <a class="opcionesFooter" href="">${this.options1}</a>
                    <a class="opcionesFooter" href="">${this.options2}</a>
                    <a class="opcionesFooter" href="">${this.options3}</a>
                    <a class="opcionesFooter" href="">${this.options4}</a>
                    <a class="opcionesFooter" href="">${this.options5}</a>
                </div>
            </div>
            `
    }
}
}

customElements.define("Rectangle-information", RectangleInformation)
export default RectangleInformation