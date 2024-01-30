class navBar extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode:'open'})
        shadow.appendChild(this.build())
    }

    build(){
        const componentRoot = document.createElement('html')

        const navBar = document.createElement('div')
            navBar.setAttribute('class','navBar_div')

        const ul = document.createElement('ul')
            ul.setAttribute('class','navBar_ul')

        const home = document.createElement('li')
            home.setAttribute('class','navBar_li')

            const homeLink = document.createElement('a')
                homeLink.setAttribute('href','./../html/index.html')
                homeLink.innerHTML = 'Home'
            home.appendChild(homeLink)

        const maoObra = document.createElement('li')
            maoObra.setAttribute('class','navBar_li')

            const mdoLink = document.createElement('a')
                mdoLink.setAttribute('href','./../html/mdo.html')
                mdoLink.innerHTML = 'Mão de Obra'
            maoObra.appendChild(mdoLink)

        const material = document.createElement('li')
            material.setAttribute('class','navBar_li')

            const matLink = document.createElement('a')
                matLink.setAttribute('href','./../html/material.html')
                matLink.innerHTML = 'Material'
            material.appendChild(matLink)

        const obras = document.createElement('li')
            obras.setAttribute('class','navBar_li')

            const obrLink = document.createElement('a')
                obrLink.setAttribute('href','./../html/material.html')
                obrLink.innerHTML = 'Obras'
            obras.appendChild(obrLink)


        const relatorio = document.createElement('li')
            relatorio.setAttribute('class','navBar_li')

            const relatLink = document.createElement('a')
                relatLink.setAttribute('href','./../html/relatorio.html')
                relatLink.innerHTML = 'Relatórios'
            relatorio.appendChild(relatLink)

        const styles = document.createElement('link')
            styles.setAttribute('rel','stylesheet')
            styles.setAttribute('href','/components/navbar.component/navbar.component.css')
        
        const head = document.createElement('head')
            head.appendChild(styles)


        ul.appendChild(home)
        ul.appendChild(maoObra)
        ul.appendChild(material)
        ul.appendChild(obras)
        ul.appendChild(relatorio)

        navBar.appendChild(ul)

        componentRoot.appendChild(head)
        componentRoot.appendChild(navBar)


        return componentRoot
    }
}

customElements.define('nav-bar',navBar)