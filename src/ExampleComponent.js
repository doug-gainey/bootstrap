import {BaseElement} from './BaseElement.js';

// noinspection JSUnusedGlobalSymbols
export default class ExampleComponent extends BaseElement {
  static get observedAttributes() {
    return ['example-attribute'];
  }

  #eventBindings = [];

  constructor() {
    super();
  }

  set exampleProperty(value) {
    this.setAttribute('example-attribute', value);
  }

  get exampleProperty() {
    return this.getAttribute('example-attribute');
  }

  #addEventBinding(element, type, listener) {
    this.#eventBindings.push({element, type, listener});
    element.addEventListener(type, listener);
  }

  #example(event) {
    console.log(event.detail.exampleDetail);
  }

  connectedCallback() {
    this.#addEventBinding(this, 'example-event', event => this.#example(event));
  }

  disconnectedCallback() {
    // Remove event bindings
    while (this.#eventBindings.length) {
      const binding = this.#eventBindings.pop();
      binding.element.removeEventListener(binding.type, binding.listener);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {

  }
}

customElements.define('example-component', ExampleComponent);
