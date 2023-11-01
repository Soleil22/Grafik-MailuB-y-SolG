export enum TendencyAttributes {
    "post"="post",
    "username" = "username",
    "likebutton" = "likebutton"
}

class Tendencies extends HTMLElement {
    post? :string
    username?: string
    likebutton?: string

    static get observedAttributes(){
        const attrs: Record<TendencyAttributes,null>={
            post :null,
            username: null,
            likebutton: null 
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:TendencyAttributes,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${StylePost}</style>
            <div class="post-container">
                <img src="${this.post}" alt="post de un diseñador en tendencia" class="post-image">
            </div>
            <div class="user-like-container">
                <p>${this.username}</p>
                <img src="${this.likebutton}" alt="boton de like" class="heart">
            </div>
            `
        }
    }

}

customElements.define("post-tendency",Tendencies)
export default Tendencies