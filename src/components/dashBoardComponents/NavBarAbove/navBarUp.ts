import EditNaveUpCss from "./NavUp.css"

export enum NavUpAttribute {
    "appicon" = "appicon",
    "bell" = "bell"
}

class NavUp extends HTMLElement {
    appicon?: string
    bell?: string

    static get observedAttributes(){
        const attrs: Record<NavUpAttribute,null> = {
            appicon: null,
            bell: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:NavUpAttribute,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${EditNaveUpCss}</style>
            <div class="nav-bar-container">
                <div class="icons-container">
                    <img src="${this.bell}" alt="" class="bell-img">
                    <button>SIGN OFF</button>
                    <img src="${this.appicon}" alt="" class="app-img">
                </div>
            </div>
            `
        }
    }
}

customElements.define("upper-navigator", NavUp)
export default NavUp