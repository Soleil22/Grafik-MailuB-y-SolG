import * as components from "../../components/export" 
import NavUp, {NavUpAttribute} from "../../components/dashBoardComponents/NavBarAbove/navBarUp";
import NavLeft, {NavLeftAttributes} from "../../components/dashBoardComponents/navLeft/navLeft"
import Tendencies,{TendencyAttributes} from "../../components/tendenciesPostsComponents/tendencyPost/tendencyPost";
import EditMainCss from "../DashBoard/main.css"
import EditShadowCss from "../DashBoard/shadowroot.css"
import Footer,{FooterAttributes} from "../../components/dashBoardComponents/footer/footer";
import firebase from "../../utils/firebase";


class TendenciesScreen extends HTMLElement{

    posts: Tendencies[]=[]

    constructor(){
        super()
        this.attachShadow({mode: "open"})
        //data de los post de tendencias

    }

    async connectedCallback(){
        const posts = await firebase.getPost()
        posts.forEach(async (post:any) => {
            const postDesigner = this.ownerDocument.createElement("post-tendency") as Tendencies
            postDesigner.setAttribute(TendencyAttributes.post, post.post)
            postDesigner.setAttribute(TendencyAttributes.username, post.username)
            this.posts.push(postDesigner)
        })
        this.render()
    }
    
    async render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <style>${EditMainCss}</style>
            <style>${EditShadowCss}</style>
            `

            const dashboard = this.ownerDocument.createElement("section-dashboard")
            dashboard.classList.add("dashboard")

            const NavUpDadContainer = this.ownerDocument.createElement("upper-navigator") as NavUp
            NavUpDadContainer.classList.add("contenedor-papa-navup")
            NavUpDadContainer.setAttribute(NavUpAttribute.appicon, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            NavUpDadContainer.setAttribute(NavUpAttribute.bell, "https://www.iconpacks.net/icons/2/free-bell-icon-3063-thumb.png" )
            dashboard.appendChild(NavUpDadContainer)
            this.shadowRoot.appendChild(dashboard);

//for each data para ver si me renderiza

           /* tendenciesData.forEach((postimg)=> {
            const postDesigner = this.ownerDocument.createElement("post-tendency") as Tendencies
                postDesigner.setAttribute(TendencyAttributes.post, postimg.post)
                postDesigner.setAttribute(TendencyAttributes.username, postimg.username)
                this.posts.push(postDesigner)
            })*/

            const PostDadContainer = this.ownerDocument.createElement("section")
            PostDadContainer.classList.add("contenedor-post-papa")
            this.posts.forEach((postimg) => {
                PostDadContainer.appendChild(postimg)
            })
            this.shadowRoot.appendChild(PostDadContainer)

            //Esto es la NAV
            const nav = this.ownerDocument.createElement("nav");
            nav.classList.add("navLeft")
            const navLeftContainer = this.ownerDocument.createElement("nav-left") as NavLeft
            navLeftContainer.setAttribute(NavLeftAttributes.username, "Anna!")
            navLeftContainer.setAttribute(NavLeftAttributes.profileimg, "https://s3-alpha-sig.figma.com/img/022b/9ed5/0cfe89950d617403ba13fe5cd3b92fc2?Expires=1696204800&Signature=B8hSlQTrManrBxpvxZi-x8CG3YTpn1rgpTiNS0Nvu3HQawGz29BvWbz4bANND-Dndc8HcWLoxKPKEh5nofkYemmcJ4c-JH28JpPMcnNkol732tVlh-eE2om1iZJKJjdVtoAg4fA5qIbJBkaOsOFcqXM~UL2dDUVK--RQVjEvywe0oXZNntG6UVz1gSoSb25RgkqWEustu6QVZ722GyEeeC4TQEavJXLLTwl0sx2agxYeqciMtc13myVVyGQevR-eDaEwQOJTstljUb9xcDqlrHNbzUKApF4Dbb~WgUNaIqerBWL7ObZW9z0v4xMG3ej9lwtaNGrN~iJYhHifHPD-Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            this.shadowRoot.appendChild(navLeftContainer)
            this.shadowRoot.appendChild(nav);

            const footerContainer = this.ownerDocument.createElement("footer-main") as Footer
            footerContainer.setAttribute(FooterAttributes.logo, "Grafik.com")
            footerContainer.setAttribute(FooterAttributes.options1, "Market place")
            footerContainer.setAttribute(FooterAttributes.options2, "Customer care")
            footerContainer.setAttribute(FooterAttributes.options3, "Verify subcription")
            footerContainer.setAttribute(FooterAttributes.options4, "Contact us")
            footerContainer.setAttribute(FooterAttributes.options5, "About Grafik")
            this.shadowRoot.appendChild(footerContainer)

            

            
        }
    } 
}

customElements.define("tendencies-container", TendenciesScreen)