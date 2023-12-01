import * as components from "../../components/export" 
import { data } from "../../data/contactData"
import { dataActivity } from "../../data/lastActivityData"
import Contacts, {ContactAttributes} from "../../components/dashBoardComponents/contacts/contacts"
import LastActivity, {ActivityAttributes} from "../../components/dashBoardComponents/lastActivityContacts/lastActivity"
import NavLeft, {NavLeftAttributes} from "../../components/dashBoardComponents/navLeft/navLeft"
import NavUp, {NavUpAttribute} from "../../components/dashBoardComponents/NavBarAbove/navBarUp";
import Banner,{BannerAttribute} from "../../components/dashBoardComponents/Banner/banner";
import CardUser, { Attribute } from "../../components/dashBoardComponents/designerCards/Card";
import { personas } from "../../data/dataCard";
import CategoriesMain, {CategoriesAttributes} from "../../components/dashBoardComponents/mainCategories/categoriesMain"
import { ButtonData } from "../../data/buttonData"
import ProjectCard, {ProjectAttribute} from "../../components/dashBoardComponents/ProjectCard/ProjectCard";
import Footer,{FooterAttributes} from "../../components/dashBoardComponents/footer/footer";
import EditMainCss from "./main.css"
import EditShadowCss from "./shadowroot.css"
import EditBannerCss from "../../components/dashBoardComponents/Banner/Banner.css"

class Container extends HTMLElement {

    categoriesmain: CategoriesMain[]=[]
    cards: CardUser[]=[]

    constructor(){
        super()
        this.attachShadow({mode: "open"})
        //data de los botones main
        ButtonData.forEach((maincategorie) => {
            const categories = this.ownerDocument.createElement("categories-main") as CategoriesMain;
            categories.setAttribute(CategoriesAttributes.text, maincategorie.text)
            categories.setAttribute(CategoriesAttributes.backgroundcolor, maincategorie.backgroundcolor)
            categories.setAttribute(CategoriesAttributes.textcolor, maincategorie.textcolor)
            this.categoriesmain.push(categories)
        });
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <style>${EditMainCss}</style>
            <style>${EditShadowCss}</style>
            <style>${EditBannerCss}</style>
            `
            
            //Esto es el dashboard
            const dashboard = this.ownerDocument.createElement("section-dashboard")
            dashboard.classList.add("dashboard")

            //contenedor y atributos de la barra de navegacion superior//
            const NavUpDadContainer = this.ownerDocument.createElement("upper-navigator") as NavUp
            NavUpDadContainer.classList.add("contenedor-papa-navup")
            NavUpDadContainer.setAttribute(NavUpAttribute.appicon, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            NavUpDadContainer.setAttribute(NavUpAttribute.bell, "https://www.iconpacks.net/icons/2/free-bell-icon-3063-thumb.png" )
            dashboard.appendChild(NavUpDadContainer)

            //contenedor y atributos del banner
            const BannerContainer = this.ownerDocument.createElement("banner-main") as Banner
            BannerContainer.classList.add("contenedor-papa-banner")
            BannerContainer.setAttribute(BannerAttribute.header, "Check out what is trending in Grafik right now!")
            BannerContainer.setAttribute(BannerAttribute.img, "https://github.com/Soleil22/imagenes-grafik/blob/main/img1.png?raw=true")
            BannerContainer.setAttribute(BannerAttribute.img2, "https://github.com/Soleil22/imagenes-grafik/blob/main/img2.png?raw=true")
            BannerContainer.setAttribute(BannerAttribute.img3, "https://github.com/Soleil22/imagenes-grafik/blob/main/img3.png?raw=true")
            BannerContainer.setAttribute(BannerAttribute.img4, "https://github.com/Soleil22/imagenes-grafik/blob/main/img4.png?raw=true")
            BannerContainer.setAttribute(BannerAttribute.img5, "https://github.com/Soleil22/imagenes-grafik/blob/main/img5.png?raw=true")
            dashboard.appendChild(BannerContainer)

            //data de tarjetas del diseñador
            personas.forEach((cardsuser) => {
            const cardDesigner = this.ownerDocument.createElement("designer-card") as CardUser
            cardDesigner.setAttribute(Attribute.user, cardsuser.user)
            cardDesigner.setAttribute(Attribute.followers, cardsuser.followers)
            cardDesigner.setAttribute(Attribute.profilepic, cardsuser.profile)
            cardDesigner.setAttribute(Attribute.projectpic, cardsuser.project_pic)
            this.cards.push(cardDesigner)
            })

            //componente Carta con data//
            const CardDadContainer = this.ownerDocument.createElement("section")

            //titulo//
            const titulo = this.ownerDocument.createElement("h1")
            titulo.classList.add("titulo-de-cards")
            titulo.textContent = "Recommended for you"
            CardDadContainer.appendChild(titulo)

            //subitulo//
            const subtitulo = this.ownerDocument.createElement("p")
            subtitulo.classList.add("subtitulo-cards")
            subtitulo.textContent ="Check out these new designers who have dazzled with just their appearances."
            CardDadContainer.appendChild(subtitulo)

            CardDadContainer.classList.add("contenedor-carta-papa")
            this.cards.forEach((cardsuser)=>{
                CardDadContainer.appendChild(cardsuser)
            })
                dashboard.appendChild(CardDadContainer)

            //titulo de las main categories
                const titulo2 = this.ownerDocument.createElement("h1")
                titulo2.classList.add("titulo-de-categories")
                titulo2.textContent = "Your Categories"
                
    
            //texto de las main categories
                const textMain = this.ownerDocument.createElement("p")
                textMain.classList.add("texto-main-categories")
                textMain.textContent = "These are some of the categories that adjust to your likings, check them out!"
    
            //div para el texto
    
                const textCategorie = this.ownerDocument.createElement("div")
                textCategorie.classList.add("textContainerCategorie")
                textCategorie.appendChild(titulo2)
                textCategorie.appendChild(textMain)
                dashboard.appendChild(textCategorie)

            //botones de categorias for each
                const categorieContainer = this.ownerDocument.createElement("div")
                categorieContainer.classList.add("mainCategorie")
                this.categoriesmain.forEach((maincategorie)=>{
                categorieContainer.appendChild(maincategorie)
              })
                dashboard.appendChild(categorieContainer)

            //texto sección comentarios
                const textComent = this.ownerDocument.createElement("h1")
                textComent.classList.add("titulo-seccion-comentarios")
                textComent.textContent = "Want to show off? Share your project!"
                dashboard.appendChild(textComent)

            //post
                const comentarioMain = this.ownerDocument.createElement("project-post") as ProjectCard
                comentarioMain.classList.add("comentario-dashboard")
                comentarioMain.setAttribute(ProjectAttribute.nameuser, "@mailubb")
                comentarioMain.setAttribute(ProjectAttribute.descrip, "painting in bora bora")
                comentarioMain.setAttribute(ProjectAttribute.project, "https://cdn3.iconfinder.com/data/icons/photo-tools/65/upload-1024.png")
                comentarioMain.setAttribute(ProjectAttribute.send, "https://static.thenounproject.com/png/1015120-200.png")
                comentarioMain.setAttribute(ProjectAttribute.user, "M")
                dashboard.appendChild(comentarioMain)

            //comentario de los contactos
              const viewcoments = this.ownerDocument.createElement("coment-main")

            this.shadowRoot.appendChild(dashboard);

            //Esto es la NAV
            const nav = this.ownerDocument.createElement("nav");
            nav.classList.add("navLeft")

            const navLeftContainer = this.ownerDocument.createElement("nav-left") as NavLeft
            navLeftContainer.setAttribute(NavLeftAttributes.username, "Anna!")
            navLeftContainer.setAttribute(NavLeftAttributes.profileimg, "https://github.com/Soleil22/imagenes-grafik/blob/main/images/se%C3%B1oraperfil.png?raw=true")
            nav.appendChild(navLeftContainer)

            //textos para usar en el index papa
            const textContact = this.ownerDocument.createElement("h1")
            textContact.classList.add("textoContacto")
            textContact.textContent="CONTACTS"

            const tittleActivity = this.ownerDocument.createElement("h1")
            tittleActivity.classList.add("tittleActivity")
            tittleActivity.textContent="LAST ACTIVITY"

            const textActivity = this.ownerDocument.createElement("p")
            textActivity.classList.add("textActivity")
            textActivity.textContent="these are the last people that saw your profile"

            const moreGrafik = this.ownerDocument.createElement("h3")
            moreGrafik.classList.add("moreGrafik")
            moreGrafik.textContent="More from Grafik.com"
            //fin textos

            //contactos componente
            
            this.shadowRoot.appendChild(nav);

            //footer//
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

customElements.define("main-container", Container)