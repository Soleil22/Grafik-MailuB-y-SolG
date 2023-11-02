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
            BannerContainer.setAttribute(BannerAttribute.img, "https://s3-alpha-sig.figma.com/img/08c9/353f/09584cf003945b3314dfc98c98e3f097?Expires=1696204800&Signature=J92H-NvkD2~bj1bZLib43g-RknQcRmk2Bg9g0-dSXBvrT4nuGApk5m8j-72fXzmtwcE1rRYeX7~4gIJ7LVdt~u65aVz8lB9UWtb7I5B~RkBy1WcvRZDO1q8kHMKjd~pdeNU6~51JMv~htLz6qeC01Ptu4Y6s6gwke4KF5dCx4~t~ShwLwRo31Fi7ZSajwL5byqJ9aXnkY0ejHlOYwB0LiixUjad3dcgzQ9fHWflJlA0Or4hpu~wF50UUO1b39NtVO3Rdm8zA66Y-hz6PxOIairitlFUzLkdqaGjBSUEZRA2Tws5TJjZF7tHcdIBkVpqAuEOr2EsBKLDpoUPPTasjoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            BannerContainer.setAttribute(BannerAttribute.img2, "https://s3-alpha-sig.figma.com/img/dd7a/2e7a/e87f980566e6d5fd67e0b196c1d48f49?Expires=1696204800&Signature=Zwg68DX71VwGj0HRchkSiAfadMZVG0Zvq3id-mdX2DjN8PUtXJSqY3la-rUIPCde0q2FVTZ8pKGkJDaTKq4BF8XxM4I7xthLkF98PwsBKkOlydwD0ka62vtk-Ha9XhGF0xD~g392FqOC6M0L9ctCQBL~XDFK-0nltUcw-q4Yza93EpWPvbMm5xER~N1xLFXC6FEk63e0SuG~3xXuOpV6fFtfl8A1qDcnINl6Gkp3CKTqAQwtyYXLaAkA8mewKuAiQw~1F7LZCToELeN0ClP0Tr1A9vm3RIFTAes8xE~Oh1LzcBfCWCi~BrBodd1ipbBxItUdHtHrmyrAnVlNY0h7kg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            BannerContainer.setAttribute(BannerAttribute.img3, "https://s3-alpha-sig.figma.com/img/34c1/1562/6a5c331a099d85340db0b4dec69652ee?Expires=1696204800&Signature=fRysk~ac22bGt96nHe2cQY~P69ayfvtP8qLAZoPcixWbE1dqAB7V9mFBvuYBs0ous1bb9Bg~nSC1DcPZvY5N9pAZVEo5BkWMAOoZZTsF2ramgZ00JAfrvFhGb~HQ-Aigfbq6Pz7maXs3CgDG-we5xfY-InJBbL0~Tb0~kTTMlx3MC5QfV7JLPJo8DtjP-pLBaf9qBH~9Yl7p~Bfm4cUr3dk~oTtVpfD3xSJ8GYp6YI9Rj~DCob3xKyvxwU0JFQevqd07fL1PNnAodwLbF7Wb~tHgsqI0CgcTzhF3O8NFKnDAQRKeL2C2d9SyP3wogDLo-8cwy97CZJOntxDGsjnDGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            BannerContainer.setAttribute(BannerAttribute.img4, "https://s3-alpha-sig.figma.com/img/2d1f/4b61/2420189205ffa17f08c687f48074bbdd?Expires=1696204800&Signature=APgsZFg-Tnbux4lRg43kPn8XxW~fde4hbnQpVC5qyhcjUvPinA~takB25BMOIdpF5dO7zZQ8W1IgMaVGV-CytrkKufPO2PIWBT1yPzsQ5dzUkmg2vjcqMBx4Vz54ArexwgwQ8-fLwrEDBrFsE9m1KvU81HlZDjioroJp7gCo1cTukAxybchyDsu13JMTzCMsRZwK8SpmCUOZd8Mj~d6BAdsvPMYaMjklronljHVWz72BIbBTVBpOhah9SmPxoXfXJorWAN3CR7Lphs4DH5sijkquu~d9pvju8geSh~CmzHGGrStH~6iG7MLrIN7ZhANpOrBli0V6br-oj-CgVujOxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            BannerContainer.setAttribute(BannerAttribute.img5, "https://s3-alpha-sig.figma.com/img/f8e7/c65f/ef7f46714aa4b3fd51086d2122616094?Expires=1696204800&Signature=oytVC~oP00adOMWxJ0yK7yxtRuezyt8Q9K-xug2NXChAcLqVjY9k5b4JPSDmLkt9Ywv2F2LiegFEGZO~oGNJQJQFSxVkLbB08Ek6Z4OBVV6seH2ptyHHvJ-N7VfCji5Lsn2L0ErRHIiz~8G9KZJbW-UpqRatT5qxtkadgZkxkk~f84W996k5DiMkIlSy7X4qcnXwEND-ZDpyErBoiJi7Q4wym3zS1gm~Bwl3JKtMxyEe9Im9ah~LZ2oAY4Kv51h9WICD9SfhSK74mRJ-ZNnjEx28fGqDddoovczsol-u2jfBcvnZuWJwXbXKufTZU0j3bLIAVTFfj0~KSin3vSMkCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
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
                textComent.textContent = "Watch the projects of your contacts!"
                dashboard.appendChild(textComent)

            //post
                const comentarioMain = this.ownerDocument.createElement("project-post") as ProjectCard
                comentarioMain.classList.add("comentario-dashboard")
                comentarioMain.setAttribute(ProjectAttribute.nameuser, "@mailubb")
                comentarioMain.setAttribute(ProjectAttribute.descrip, "painting in bora bora")
                comentarioMain.setAttribute(ProjectAttribute.project, "https://s3-alpha-sig.figma.com/img/dbce/582c/078c7e1345b721c72aeb97e960f2bf38?Expires=1696204800&Signature=gpLLPJDODxdivn8cyF7-QbicGyK6glA5R2dcpbulQg~nNhP6-VWYeaesZemNRO-6Xuj2RIhV0slSDPe3FnuCPesx-3YqZq~O-xRHLumqLjH4J9iJGWFDriy2fvRrrCRwJ49K~Zwi57493MVETvOvtnMuK-1BkHI7t2FkkgPXjAZRWU5FeMRiJ52-NKX25ecGQ-B2XD3XilAaOIyfOGQjA-qY-9AHeE-KRWhHDHqCryH6sXKckNG38owMkz0ESO771DuJ8SQyXTgJUZyXFAJ4fXisBsbG4roskV-CCFV728ZL~xy4DLigB2vVPwULJPDb4tRoA~M6dOcokTo38-SOjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
                comentarioMain.setAttribute(ProjectAttribute.send, "https://static.thenounproject.com/png/1015120-200.png")
                dashboard.appendChild(comentarioMain)

            //texto para el usuario
                // //const titlecomment = this.ownerDocument.createElement("h1")
                // titlecomment.classList.add("titulo-comentario")
                // titlecomment.textContent = "Write your comment instantly!"
                // dashboard.appendChild(titlecomment)//

            //comentario de los contactos
              const viewcoments = this.ownerDocument.createElement("coment-main")

            this.shadowRoot.appendChild(dashboard);

            //Esto es la NAV
            const nav = this.ownerDocument.createElement("nav");
            nav.classList.add("navLeft")

            const navLeftContainer = this.ownerDocument.createElement("nav-left") as NavLeft
            navLeftContainer.setAttribute(NavLeftAttributes.username, "Anna!")
            navLeftContainer.setAttribute(NavLeftAttributes.profileimg, "https://s3-alpha-sig.figma.com/img/022b/9ed5/0cfe89950d617403ba13fe5cd3b92fc2?Expires=1696204800&Signature=B8hSlQTrManrBxpvxZi-x8CG3YTpn1rgpTiNS0Nvu3HQawGz29BvWbz4bANND-Dndc8HcWLoxKPKEh5nofkYemmcJ4c-JH28JpPMcnNkol732tVlh-eE2om1iZJKJjdVtoAg4fA5qIbJBkaOsOFcqXM~UL2dDUVK--RQVjEvywe0oXZNntG6UVz1gSoSb25RgkqWEustu6QVZ722GyEeeC4TQEavJXLLTwl0sx2agxYeqciMtc13myVVyGQevR-eDaEwQOJTstljUb9xcDqlrHNbzUKApF4Dbb~WgUNaIqerBWL7ObZW9z0v4xMG3ej9lwtaNGrN~iJYhHifHPD-Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
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