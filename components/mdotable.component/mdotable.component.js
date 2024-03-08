class mdoTable extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: 'open'})
       

        fetch('./components/mdotable.component/mdotable.component.html')
            .then(respone => respone.text())
            .then(html => {
                shadow.innerHTML = html
            })

    }
        
}

customElements.define('mdo-table',mdoTable)