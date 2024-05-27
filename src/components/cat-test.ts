import {html, TemplateResult} from 'lit';
import {BaseElement} from '../base-element.js';
import {customElement} from 'lit/decorators.js';
import styles from './cat-test.css' with {type: 'css'};

@customElement('cat-test')
export class CatTest extends BaseElement {
  public static override styles = [...BaseElement.styles, styles];
  public render(): TemplateResult {
    return html`
      <h1 class="text-8xl font-bold underline bg-orange-400">Hello cat!</h1>
    `;
  }
}
