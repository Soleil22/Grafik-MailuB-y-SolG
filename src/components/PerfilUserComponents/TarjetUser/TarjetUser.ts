import EditTarjetUserCss from "./TarjetUser.css"

export enum TarjetUserAttributes {
    "perfil" = "perfil",
    "name"="name",
    "profession"="profession",
    "publish"="publish",
    "bought"="bought",
    "followers"="followers",
    "friends"="friends"
}

class TarjetUser extends HTMLElement {

    perfil?:  string
    name?: string
    profession?:  string
    publish?:  string
    bought?: string
    followers?: string
    friends?: string

    static get observedAttributes(){
        const attrs: Record<TarjetUserAttributes,null>={
            perfil: null,
            name: null,
            profession: null,
            publish: null,
            bought: null,
            followers: null,
            friends: null,
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:TarjetUserAttributes,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${EditTarjetUserCss}</style>
            <div class="tarjet-user">
            <img src="${this.perfil}" alt="">
            <h4>${this.name}</h4>
            <p>${this.profession}</p>
            <div class="info-user">
                <h5>Published projects</h5>
                <p>${this.publish}</p>
            </div>
            <div class="info-user">
                <h5>Bought projects</h5>
                <p>${this.bought}</p>
            </div>
            <div class="info-user">
                <h5>Followers</h5>
                <p>${this.followers}</p>
            </div>
            <div class="info-user">
                <h5>Friends</h5>
                <p>${this.friends}</p>
            </div>
            <button>Change password</button>
        </div>
            `
        }
    }
}

customElements.define("tarjet-user-information", TarjetUser)
export default TarjetUser