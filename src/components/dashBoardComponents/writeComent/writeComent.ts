export enum WritecomentAttribute {
    "user" = "user"
}

class NavUp extends HTMLElement {
    user?: string

    static get observedAttributes(){
        const attrs: Record<WritecomentAttribute,null> = {
            user: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:WritecomentAttribute,oldValue: string | undefined,newValue: string | undefined){
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
           /* this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="NavUp.css">
            <div class="nav-bar-container">
                <div class="search-bar-container">
                    <img src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png" alt="" width="20px" height="20px" class="lupa">
                    <input type="text" placeholder="Search..." class="barra">
                </div>
                <div class="icons-container">
                    <img src="${this.bell}" alt="" class="bell-img">
                    <button>SIGN OFF</button>
                    <img src="${this.appicon}" alt="" class="app-img">
                </div>
                
            </div>*/
        }
    }
}


customElements.define("upper-navigator", NavUp)
export default NavUp