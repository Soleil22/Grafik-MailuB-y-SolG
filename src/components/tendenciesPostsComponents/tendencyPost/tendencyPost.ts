import StylePost from "./tendencies.css"

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
        
        this.mount();
        }

    constructor(){
        super()
        this.attachShadow({mode: "open"})
        this.likeClick = this.likeClick.bind(this);
        this.likebutton = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
    }

    connectedCallback(){
        this.mount()
    }

    mount(){
        this.render();
        this.addEventListener();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <style>${StylePost}</style>
            <div class="post-container">
                <img src="${this.post}" alt="post de un diseñador en tendencia" class="post-image">
                <div class="user-like-container">
                    <p>${this.username}</p>
                    <img src="${this.likebutton}" alt="boton de like" class="heart">
                </div>
            </div>
            `
        }
    }

    isliked: boolean = false

    addEventListener(){
        if (this.shadowRoot){
            const heart = this.shadowRoot.querySelectorAll(".heart");
            heart.forEach((heart) => {
                heart.addEventListener("click", this.likeClick);
            });
        }
    }

    likeClick = () => {
        this.isliked = !this.isliked;
        const heart = this.shadowRoot?.querySelectorAll(".heart") as NodeListOf<HTMLImageElement>;

        heart.forEach((heart) => {
        if (this.isliked) {
            heart.src = "https://cdn-icons-png.flaticon.com/512/1077/1077086.png";
        } else {
            heart.src = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
        }});
    };
}



customElements.define("post-tendency",Tendencies)
export default Tendencies
