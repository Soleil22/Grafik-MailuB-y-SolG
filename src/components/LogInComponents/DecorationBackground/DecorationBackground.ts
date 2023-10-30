import EditDecorationCss from "./DecorationBackground.css"

export enum DecorationAttributes {
    "img1"="img1",
    "img2"="img2",
    "img3" = "img3",
    "img4" = "img4",
    "img5" = "img5",
    "img6" = "img6",
    "img7" = "img7"
}

class Decoration extends HTMLElement {
    img1?:  string
    img2?:  string
    img3?: string
    img4?: string
    img5?: string
    img6?: string
    img7?: string

    static get observedAttributes(){
        const attrs: Record<DecorationAttributes,null>={
            img1: null,
            img2: null,
            img3: null,
            img4: null,
            img5: null,
            img6: null,
            img7: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:DecorationAttributes,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${EditDecorationCss}</style>
            <div class="bck-img1">
            <img src="${this.img1}" alt="">
            </div>
            <div class="bck-img2">
            <img src="${this.img2}" alt="">
            </div>
            <div class="bck-img3">
            <img src="${this.img3}" alt="">
            </div>
            <div class="bck-img4">
            <img src="${this.img4}" alt="">
            </div>
            <div class="bck-img5">
            <img src="${this.img5}" alt="">
            </div>
            <div class="bck-img6">
            <img src="${this.img6}" alt="">
            </div>
            <div class="bck-img7">
            <img src="${this.img7}" alt="">
            </div>
            `
        }
    }
}

customElements.define("decoration-container", Decoration)
export default Decoration