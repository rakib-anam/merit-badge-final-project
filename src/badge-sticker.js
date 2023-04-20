import { LitElement, html, css } from 'lit-element';
import './BadgeSticker.js';

class MeritBadge extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      date: { type: String },
      skills: { type: Array },
      unlocked: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        position: relative;
      }

      .details {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        padding: 10px;
        z-index: 1;
      }

      :host([unlocked]) .details {
        display: block;
      }

      .button {
        display: inline-block;
        margin-top: 10px;
        padding: 5px 10px;
        border: 1px solid black;
        background-color: white;
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.title = '';
    this.date = '';
    this.skills = [];
    this.unlocked = false;
  }

  render() {
    return html`
      <badge-sticker
        title=${this.title}
        .skills=${this.skills}
        ?unlocked=${this.unlocked}
        @click=${this._handleBadgeClick}
      ></badge-sticker>
      <div class="details">
        <p>Date Unlocked: ${this.date}</p>
        <p>Skills:</p>
        <ul>
          ${this.skills.map((skill) => html`<li>${skill}</li>`)}
        </ul>
        <button class="button" @click=${this._handleButtonClick}>
          ${this.unlocked ? 'Lock Badge' : 'Unlock Badge'}
        </button>
      </div>
    `;
  }

  _handleBadgeClick() {
    this.unlocked = !this.unlocked;
  }

  _handleButtonClick() {
    if (this.unlocked) {
      this.date = new Date().toLocaleDateString();
      this.dispatchEvent(new CustomEvent('lockBadge'));
    } else {
      this.date = '';
      this.dispatchEvent(new CustomEvent('unlockBadge'));
    }
    this.unlocked = !this.unlocked;
    this.requestUpdate();
  }
}

customElements.define('merit-badge', MeritBadge);
