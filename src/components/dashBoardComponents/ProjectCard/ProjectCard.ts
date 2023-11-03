import EditProjectCardCss from "./ProjectCard.css"
import EditWriteCss from "./DescriptionPost.css"
import firebase from "../../../utils/firebase"

export enum ProjectAttribute {
    "nameuser" = "nameuser",
    "descrip" = "descrip",
    "project" = "project",
    "heart" = "heart",
    "send" = "send",
    "like" = "like",
    "user" = "user"
}

const formsPost = {
    link: "",
    description: ""
}

class ProjectCard extends HTMLElement {
    nameuser?: string
    descrip?: string
    project?: string
    heart?: string
    send?: string
    like?: string
    user?: string

    static get observedAttributes(){
        const attrs: Record<ProjectAttribute,null> = {
            nameuser: null,
            descrip: null,
            project: null,
            heart: null,
            send: null,
            like: null,
            user: null
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

        const imgInput = this.shadowRoot?.querySelector(".input-link")
        imgInput?.addEventListener("change", this.changeImg)

        const descriptionPost = this.shadowRoot?.querySelector(".input")
        descriptionPost?.addEventListener("change", this.changeDes)

        const upload = this.shadowRoot?.querySelector(".buttonUpload")
        upload?.addEventListener("click", this.uploadForm)
    }

    changeImg(e: any){
        formsPost.link = e.target.value;
    }

    changeDes(e: any){
        formsPost.description = e.target.value;
    }

    uploadForm (){
        firebase.addPost(formsPost)
        this.render()
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
                <input class="input-link" type="text" placeholder="put the link of you image">
            </div>
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