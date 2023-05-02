import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
//import "@lrnwebcomponents/simple-colors.js";


class BadgeSticker extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      date: { type: String },
      skills: { type: Array },
      logo: { type: String },
      locked: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        text-align: center;
        position: relative;
      }

      .badge {
        position: relative;
        width: 300px;
        height: 300px;
        background-color: var(--badge-color, #7cc6e6);
        border: 2px dashed var(--badge-stitch-color, #FFF);
        border-radius: 50%;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        cursor: pointer;
      }

      .badge.locked {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .badge-logo {
        font-size: 50px;
        margin-top:25px;
      }

      .badge-label {
        font-size: 22px;
        font-weight: bold;
        margin-top: 50px;
        color: var(--badge-label-color, #ffffff);
        text-align: center
        width: 120px;
      }

      .badge-date {
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: var(--badge-date-color, #ffffff);
      }

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="badge ${this.locked ? 'locked' : ''}">
        <div class="badge-label">${this.title}</div>
        <div class="badge-logo"><simple-icon icon="${this.logo}"></simple-icon></div>
        <div class="badge-date">${this.date}</div>
        <div class="icons">
          <simple-icon-button icon="check-circle" @click="${this.verify}"></simple-icon-button>
          <simple-icon-button icon="group-work" @click="${this.clickHandler}"></simple-icon-button>
        </div>
      </div>
    `;
  }


  verify() {
    window.open(this.verificationLink, "_blank");
  }

}

customElements.define('badge-sticker', BadgeSticker);
