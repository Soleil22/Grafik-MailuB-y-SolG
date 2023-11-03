import EditWriteCss from "./DescriptionPost.css"

export enum DescriptionAttribute {
    "user" = "user"
}

class DescriptionPost extends HTMLElement {
    user?: string

    static get observedAttributes(){
        const attrs: Record<DescriptionAttribute,null> = {
            user: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:DescriptionAttribute,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${EditWriteCss}</style>
            <div class="container">
            <p>Post description</p>
            <div class="user-input">
            <div class="cajita">
            <h4>${this.user}</h4>
            </div>
            <input class="input" type="text" placeholder="Add a description for your post">
            </div>
            <div>
            <button class="buttonUpload">UPLOAD</button>
            </div>
            </div>
            `
        }
    }
}


customElements.define("description-post", DescriptionPost)
export default DescriptionPost