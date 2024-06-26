customElements.define('key-m', class KeyMentioned extends HTMLElement {
  connectedCallback() {
    this.classList.add('mentioned');
  }
});
customElements.define('key-i', class KeyImportant extends HTMLElement {
  connectedCallback() {
    this.classList.add('important');
  }
});