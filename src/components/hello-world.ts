import {html, TemplateResult} from 'lit';
import {BaseElement} from '../base-element.js';
import {customElement} from 'lit/decorators.js';
import styles from './hello-world.css' with {type: 'css'};

@customElement('hello-world')
export class HelloWorldElement extends BaseElement {
  public static override styles = [...super.styles, styles];
  public render(): TemplateResult {
    return html`
      <h1 class="text-3xl font-bold underline bg-blue-400">Hello world!</h1>
    `;
  }
}
