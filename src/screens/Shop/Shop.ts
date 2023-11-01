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
            
        }
    }
}

customElements.define("shop-container", Shop)