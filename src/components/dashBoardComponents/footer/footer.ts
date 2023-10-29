import EditFooterStyle from "./footer.css"
import EditShadowCss from "../../../screens/DashBoard/shadowroot.css"

export enum FooterAttributes {
    "options1"="options1",
    "options2"="options2",
    "options3"="options3",
    "options4"="options4",
    "options5"="options5",
    "logo"="logo"
}

class Footer extends HTMLElement {

    options1?:  string
    options2?:  string
    options3?:  string
    options4?:  string
    options5?:  string
    logo?: string

    static get observedAttributes(){
        const attrs: Record<FooterAttributes,null>={
            options1: null,
            options2: null,
            options3: null,
            options4: null,
            options5: null,
            logo: null
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
            <style>${EditFooterStyle}</style>
            <style>${EditShadowCss}</style>
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

customElements.define("footer-main", Footer)
export default Footer