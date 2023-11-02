import EditNavShopComponentCss from "./NavShopComponent.css"

export enum NavLeftShopAttributes {
    "profileimg" = "profileimg",
    "username" = "username"
}

class NavLeftShop extends HTMLElement {
        
    profileimg?: string
    username?: string

    static get observedAttributes(){
        const attrs: Record<NavLeftShopAttributes,null> = {
            profileimg: null, 
            username: null
        }
        return Object.keys(attrs)
    } 

    attributeChangedCallback(propName:NavLeftShopAttributes,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
     constructor(){
        super()
        this.attachShadow({mode:"open"})
     }

     connectedCallback(){
        this.render()
     }

     render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${EditNavShopComponentCss}</style>
            <div class="navLeft">
                <div class="imgProfile">
                    <img src="${this.profileimg}">
                    <p>Hi, ${this.username}</p>
                </div>
                <div class="buttonContainer">
                    <button class="buttonUP">UPLOAD</button>
                    <button class="buttonNav">Home</button>
                    <button class="buttonNav">Discussion</button>
                    <button class="buttonNav">Following</button>
                    <button class="buttonNav">Tendencies</button>
                    <button class="buttonNav">Shop</button>
                    <button class="buttonNav">Files</button>
                </div>
            </div>
            `
        }
     }
}
customElements.define("nav-left-shop", NavLeftShop)
export default NavLeftShop