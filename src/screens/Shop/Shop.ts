import EditShopCss from "./Shop.css"
import NavUp, {NavUpAttribute} from "../../components/PerfilUserComponents/IconsNavUp/IconsNavUp";
import NavLeft, {NavLeftAttributes} from "../../components/dashBoardComponents/navLeft/navLeft"
import { data } from "../../data/contactData"
import { dataActivity } from "../../data/lastActivityData"
import Contacts, {ContactAttributes} from "../../components/dashBoardComponents/contacts/contacts"
import LastActivity, {ActivityAttributes} from "../../components/dashBoardComponents/lastActivityContacts/lastActivity"
import EditMainCss from "../DashBoard/main.css"
import EditShadowCss from "../DashBoard/shadowroot.css"
import EditNavLeft from "../../components/dashBoardComponents/navLeft/navLeft.css"

class Shop extends HTMLElement {

    contact: Contacts[] = []
    activity: LastActivity[]= []

    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()

        data.forEach((contactsview) => {
            const newContact = this.ownerDocument.createElement("contact-info") as Contacts;
            newContact.setAttribute(ContactAttributes.username, contactsview.username)
            newContact.setAttribute(ContactAttributes.profileimage, contactsview.profileImage)
            this.contact.push(newContact)
        });

        dataActivity.forEach((activitycontacts) => {
            const newuserActivity = this.ownerDocument.createElement("last-activity") as LastActivity;
            newuserActivity.setAttribute(ActivityAttributes.user, activitycontacts.user)
            this.activity.push(newuserActivity)
        });
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <style>${EditShopCss}</style>
            <style>${EditMainCss}</style>
            <style>${EditShadowCss}</style>
            <style>${EditNavLeft}</style>
            `
            const NavUpDadContainer = this.ownerDocument.createElement("upper-navigator-icons") as NavUp
            NavUpDadContainer.classList.add("contenedor-papa-navup")
            NavUpDadContainer.setAttribute(NavUpAttribute.appicon, "https://cdn-icons-png.flaticon.com/512/106/106226.png")
            NavUpDadContainer.setAttribute(NavUpAttribute.bell, "https://www.iconpacks.net/icons/2/free-bell-icon-3063-thumb.png" )
            this.shadowRoot.appendChild(NavUpDadContainer)

            //Esto es la NAV
            const navLeftContainer = this.ownerDocument.createElement("nav-left") as NavLeft
            navLeftContainer.setAttribute(NavLeftAttributes.username, "Anna!")
            navLeftContainer.setAttribute(NavLeftAttributes.profileimg, "https://s3-alpha-sig.figma.com/img/022b/9ed5/0cfe89950d617403ba13fe5cd3b92fc2?Expires=1696204800&Signature=B8hSlQTrManrBxpvxZi-x8CG3YTpn1rgpTiNS0Nvu3HQawGz29BvWbz4bANND-Dndc8HcWLoxKPKEh5nofkYemmcJ4c-JH28JpPMcnNkol732tVlh-eE2om1iZJKJjdVtoAg4fA5qIbJBkaOsOFcqXM~UL2dDUVK--RQVjEvywe0oXZNntG6UVz1gSoSb25RgkqWEustu6QVZ722GyEeeC4TQEavJXLLTwl0sx2agxYeqciMtc13myVVyGQevR-eDaEwQOJTstljUb9xcDqlrHNbzUKApF4Dbb~WgUNaIqerBWL7ObZW9z0v4xMG3ej9lwtaNGrN~iJYhHifHPD-Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
            this.shadowRoot.appendChild(navLeftContainer)
        }
    }
}

customElements.define("shop-container", Shop)