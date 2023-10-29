import EditBannerCss from "./Banner.css"

export enum BannerAttribute {
    "header" = "header",
    "img" = "img",
    "img2" = "img2",
    "img3" = "img3",
    "img4" = "img4",
    "img5" = "img5"
}

class Banner extends HTMLElement {
    header?: string
    img?: string
    img2?: string
    img3?: string
    img4?: string
    img5?: string


    static get observedAttributes(){
        const attrs: Record<BannerAttribute,null> = {
            header: null,
            img: null,
            img2: null,
            img3: null,
            img4: null,
            img5: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:BannerAttribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${EditBannerCss}</style>
            <div class="banner-background">
            <p>Around the world</p>
            <h2>${this.header}</h2>
                <div class="geometric-figures">
                    <img src="${this.img}" alt="" class="img1">
                    <img src="${this.img2}" alt="" class="img2">
                    <img src="${this.img3}" alt="" class="img3">
                    <img src="${this.img4}" alt="" class="img4">
                    <img src="${this.img5}" alt="" class="img5">
                </div>
            </div>
            `
        }

    }
}

customElements.define("banner-main", Banner)
export default Banner