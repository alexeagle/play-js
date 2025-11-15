import { LitElement, html } from "lit";
import { validateName } from "@ours/lib";

export class HelloElement extends LitElement {
  render() {
    const result = validateName("World");
    return html`<p>Hello ${result.success ? result.data : "stranger"}!</p>`;
  }
}

customElements.define("hello-element", HelloElement);
