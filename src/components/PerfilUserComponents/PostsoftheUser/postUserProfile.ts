import StylePostUser from "./postuser.css"

export enum PostAttributes {
    "imagen"="imagen",
    "titulo" = "titulo"
}

class Posts extends HTMLElement {
    imagen? :string
    titulo?: string
    

    static get observedAttributes(){
        const attrs: Record<PostAttributes,null>={
            imagen :null,
            titulo: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:PostAttributes,oldValue: string | undefined,newValue: string | undefined){
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
            this.shadowRoot.innerHTML=`
            <style>${StylePostUser}</style>
            <div class="post-container">
                <img src="${this.imagen}" alt="post de mi usuario publicado" class="post-image">
                <p class="title-class">${this.titulo}</p>
            </div>
            `
        }
    }
}

customElements.define("post-user-component", Posts)
export default Posts