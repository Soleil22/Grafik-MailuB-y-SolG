import EditPerfilPostCss from "./PerfilPost.css"
import TarjetUser, {TarjetUserAttributes} from "../../components/PerfilUserComponents/TarjetUser/TarjetUser"
import NavUp, {NavUpAttribute} from "../../components/PerfilUserComponents/IconsNavUp/IconsNavUp";
import Posts, {PostAttributes} from "../../components/PerfilUserComponents/PostsoftheUser/postUserProfile";
import firebase from "../../utils/firebase";

class PerfilPostUser extends HTMLElement {

    userp: Posts[]=[]

    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    async connectedCallback(){
        const posts = await firebase.getPostUser()
        posts.forEach(async (post:any) => {
            const postImage = this.ownerDocument.createElement("post-user-component") as Posts
            postImage.setAttribute(PostAttributes.imagen, post.link)
            postImage.setAttribute(PostAttributes.titulo, post.description)
            this.userp.push(postImage)
        })

        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <style>${EditPerfilPostCss}</style>
            `
            const NavUpDadContainer = this.ownerDocument.createElement("upper-navigator-icons") as NavUp
            NavUpDadContainer.classList.add("contenedor-papa-navup")
            NavUpDadContainer.setAttribute(NavUpAttribute.appicon, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            NavUpDadContainer.setAttribute(NavUpAttribute.bell, "https://www.iconpacks.net/icons/2/free-bell-icon-3063-thumb.png" )
            this.shadowRoot.appendChild(NavUpDadContainer)


            const Title = this.ownerDocument.createElement("h1")
            Title.classList.add("title-posts")
            Title.innerText = "Your posts"
            this.shadowRoot.appendChild(Title)

            
            const TarjetUser = this.ownerDocument.createElement("tarjet-user-information") as TarjetUser
            TarjetUser.classList.add("tarjet-information")
            TarjetUser.setAttribute(TarjetUserAttributes.perfil, "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png")
            TarjetUser.setAttribute(TarjetUserAttributes.name, "Anna Smith")
            TarjetUser.setAttribute(TarjetUserAttributes.profession, "UX/UI designer")
            TarjetUser.setAttribute(TarjetUserAttributes.publish, "25")
            TarjetUser.setAttribute(TarjetUserAttributes.bought, "17")
            TarjetUser.setAttribute(TarjetUserAttributes.followers, "220")
            TarjetUser.setAttribute(TarjetUserAttributes.friends, "35")
            this.shadowRoot.appendChild(TarjetUser) 

            

           /* postProfile.forEach((userimg)=> {
                const postImage = this.ownerDocument.createElement("post-user-component") as Posts
                    postImage.setAttribute(PostAttributes.imagen, userimg.post)
                    postImage.setAttribute(PostAttributes.titulo, userimg.title)
                    this.userp.push(postImage)
                })*/
    
                const PostpapaContainer = this.ownerDocument.createElement("section")
                PostpapaContainer.classList.add("contenedor-post-papa")
                this.userp.forEach((userimg) => {
                    PostpapaContainer.appendChild(userimg)
                })
                this.shadowRoot.appendChild(PostpapaContainer)
    

        }
    }
}

customElements.define("perfil-post-container", PerfilPostUser)