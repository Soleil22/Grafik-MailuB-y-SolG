import EditNavLeft from "./navLeft.css"

export enum NavLeftAttributes {
    "profileimg" = "profileimg",
    "username" = "username"
}

class NavLeft extends HTMLElement {
    //contact: Contacts[] = []
    //activity: LastActivity[]= []
    
    profileimg?: string
    username?: string

    static get observedAttributes(){
        const attrs: Record<NavLeftAttributes,null> = {
            profileimg: null, 
            username: null
        }
        return Object.keys(attrs)
    } 

    attributeChangedCallback(propName:NavLeftAttributes,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
     constructor(){
        super()
        this.attachShadow({mode:"open"})
     }

     connectedCallback(){
        this.render()
     }

     render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${EditNavLeft}</style>
            <div class="navLeft">
                <div class="imgProfile">
                    <img src="${this.profileimg}">
                    <p>Hi, ${this.username}</p>
                </div>
                <div class="buttonContainer">
                    <button class="buttonUP">UPLOAD</button>
                    <button class="buttonNav">Home</button>
                    <button class="buttonNav">Discussion</button>
                    <button class="buttonNav">Following</button>
                    <button class="buttonNav">Tendencies</button>
                    <button class="buttonNav">Shop</button>
                    <button class="buttonNav">Files</button>
                </div>
            </div>
            `
                       
            /*data.forEach((contactsview) => {
                console.log(contactsview);
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
            
            const contactContainer = this.ownerDocument.createElement("section")
            contactContainer.classList.add("contactContainer")
            this.contact.forEach((contactsview)=>{
                contactContainer.appendChild(contactsview)
            })
            this.shadowRoot.appendChild(contactContainer)

            const activityContainer = this.ownerDocument.createElement("section")
            activityContainer.classList.add("containerActivity")
            this.activity.forEach((activitycontacts)=>{
                activityContainer.appendChild(activitycontacts)
            })
            this.shadowRoot.appendChild(activityContainer)*/
        }
     }
}
customElements.define("nav-left", NavLeft)
export default NavLeft