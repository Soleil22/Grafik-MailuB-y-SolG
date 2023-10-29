import EditActivityCss from "./activity.css"

export enum ActivityAttributes {
    "user"="user"
}

class LastActivity extends HTMLElement {

    user?:  string

    static get observedAttributes(){
        const attrs: Record<ActivityAttributes,null>={
            user: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:ActivityAttributes,oldValue: string | undefined,newValue: string | undefined){
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
            <style>${EditActivityCss}</style>
            <div class="containerBox">
                <div class="boxUser"><p class="username">${this.user}</p></div>
            </div>
            `
    }
}
}
customElements.define("last-activity", LastActivity)
export default LastActivity