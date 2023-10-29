import EditProjectCardCss from "./ProjectCard.css"

export enum ProjectAttribute {
    "nameuser" = "nameuser",
    "descrip" = "descrip",
    "project" = "project",
    "heart" = "heart",
    "send" = "send",
    "like" = "like"
}

class ProjectCard extends HTMLElement {
    nameuser?: string
    descrip?: string
    project?: string
    heart?: string
    send?: string
    like?: string

    static get observedAttributes(){
        const attrs: Record<ProjectAttribute,null> = {
            nameuser: null,
            descrip: null,
            project: null,
            heart: null,
            send: null,
            like: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:ProjectAttribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.mount();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.likeClick = this.likeClick.bind(this);
        this.like = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
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
            this.shadowRoot.innerHTML = `
            <style>${EditProjectCardCss}</style>
            <div class="post-contenedor">
                <div class= "foto-container">
                    <img src="${this.project}" alt="" class="project-pic">
                </div>
            <p class="nombre-user">${this.nameuser}</p>
            <p class="descripcion">${this.descrip}</p>
            </div>
            <div class="containericons">
            <img src="${this.like}" alt="" class="heart">
            <img src="${this.send}" alt="" class="send">
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

customElements.define("project-post", ProjectCard)
export default ProjectCard