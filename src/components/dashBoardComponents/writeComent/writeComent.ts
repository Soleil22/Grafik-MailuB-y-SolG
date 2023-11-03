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
           this.shadowRoot.innerHTML = `
            `
        }
    }
}


customElements.define("upper-navigator", NavUp)
export default NavUp