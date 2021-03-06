import { MailHelperNavigationItem } from './MailHelperNavigationItem'

const template = document.createElement('template')

template.innerHTML = `
  <style>
    :host {
      position: relative;

      display: flex;
      flex-direction: column;
    }
  </style>

  <slot></slot>
`

export class MailHelperNavigation extends HTMLElement {
  constructor() {
    super()

    // Attach a shadow root to the element.
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const el = new MailHelperNavigationItem()
    this.appendChild(el)
  }

  disconnectedCallback() {
  }
}

customElements.define('mail-helper-navigation', MailHelperNavigation)
