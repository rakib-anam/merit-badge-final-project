import { LitElement, html, css } from 'lit-element';
import './badge-sticker.js';

class MeritBadge extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      date: { type: String },
      skills: { type: Array },
      locked: { type: Boolean },
      verificationLink: { type: String },
    };
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .button {
        background-color: blue;
        color: white;
        border-radius: 10px;
        padding: 10px;
        margin-top: 10px;
        cursor: pointer;
      }

      .button:hover {
        background-color: darkblue;
      }
    `;
  }

  constructor() {
    super();
    this.locked = true;
  }

  render() {
    return html`
      <div class="container">
        <badge-sticker 
          .title=${this.title} 
          .date=${this.date} 
          .skills=${this.skills} 
          .locked=${this.locked} 
          .verificationLink=${this.verificationLink}>
        </badge-sticker>
        ${this.locked ?
          html`<button class="button" @click=${this._unlockBadge}>Unlock Badge</button>` :
          html``
        }
      </div>
    `;
  }

  _unlockBadge() {
    const unlockEvent = new CustomEvent('unlockBadge', { bubbles: true, composed: true });
    this.dispatchEvent(unlockEvent);
    this.date = new Date().toLocaleDateString();
    this.locked = false;
  }

}

customElements.define('merit-badge', MeritBadge);
