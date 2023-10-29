import EditCategorieCss from "./categorie.css"

export enum CategoriesAttributes {
    "backgroundcolor"="backgroundcolor",
    "text"="text",
    "textcolor"="textcolor"
}

class CategoriesMain extends HTMLElement {

    backgroundcolor?:  string
    text?:  string
    textcolor?: string

    static get observedAttributes(){
        const attrs: Record<CategoriesAttributes,null>={
            backgroundcolor: null,
            text: null,
            textcolor: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:CategoriesAttributes,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${EditCategorieCss}</style>
            <div class="btn-categorie-container">
            <style>
            .btnCategorie{
                color: ${this.textcolor};
                background-color: ${this.backgroundcolor}
            }
            </style>
            <button class="btnCategorie">${this.text}</button>
            </div>
            `
    }
}
}

customElements.define("categories-main", CategoriesMain)
export default CategoriesMain