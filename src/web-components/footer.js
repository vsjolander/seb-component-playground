class CustomFooter extends HTMLElement {
    constructor() {
        super();

        //const shadowRoot = this.attachShadow({mode: 'open'});

        //console.log(shadowRoot);
        const wrapper = document.createElement('div');
        wrapper.classList.add('footer-wrapper')
        wrapper.innerText = 'Can you style me?';
        this.appendChild(wrapper);
    }
}

customElements.define('custom-footer', CustomFooter)