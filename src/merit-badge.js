import { LitElement, html, css } from 'lit-element';
import './badge-sticker.js';

class MeritBadge extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      date: { type: String },
      skills: { type: Array },
      icon: { type: String },
      verificationLink: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
        position: relative;
        margin-bottom: 50px;
      }

      button {
        display: block;
        margin: 0 auto;
        padding: 10px 20px;
        border: none;
        background-color: var(--button-bg-color, #2196F3);
        color: var(--button-text-color, #FFF);
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
      }

      button:active {
        background-color: #0c375a;
      }
    `;
  }

  constructor() {
    super();
    this.locked = true;
  }

  render() {
    return html`
    <!-- badge -->
      <badge-sticker 
        .title=${this.title}
        .date=${this.date}
        .skills=${this.skills}
        .icon=${this.icon}
        .locked=${this.locked}
        .verificationLink=${this.verificationLink}>
      </badge-sticker>
    <!-- button -->
      <button id="unlockBadgeButton" 
      @click="${this.handleButtonClick}"
      >Unlock Badge</button>
    `;
  }

  handleButtonClick() {
    this.locked = false;
    const today = new Date();
    this.date = "Unlocked on " + today.toDateString();
  }

}

customElements.define('merit-badge', MeritBadge);
