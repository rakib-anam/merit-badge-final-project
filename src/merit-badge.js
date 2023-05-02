import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import "@lrnwebcomponents/simple-colors/simple-colors.js";

import './badge-sticker.js';

class MeritBadge extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      date: { type: String },
      skills: { type: Array },
      logo: { type: String },
      locked: { type: Boolean },
      verificationLink: { type: String },

      //simpleColors badge background color var
      badgeColor: { type: String }
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
    this.date = "Locked";
  }

  render() {
    return html`
    <!-- badge -->
      <badge-sticker 
        accent-color=${this.badgeColor}
        .title=${this.title}
        .date=${this.date}
        .skills=${this.skills}
        .logo=${this.logo}
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
