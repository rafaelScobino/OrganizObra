class navBar extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode:'open'})
        
            fetch('./../../components/navbar.component/navbar.component.html')
                .then(response => response.text())
                    .then( html => {shadow.innerHTML = html})
    }
    
}

customElements.define('nav-bar',navBar)