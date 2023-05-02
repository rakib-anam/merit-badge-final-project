import { LitElement, html, css } from 'lit-element';
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";


class BadgeSticker extends SimpleColors {

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      date: { type: String },
      logo: { type: String },
      locked: { type: Boolean },
      verificationLink: { type: String },

      skills: { type: Array },
      activeNode: {type: Object},
      skillsOpened: {type: Boolean},
    };
  }

  static styles = [...super.styles, css`
      
    :host 
    {
        display: inline-block;
        text-align: center;
        position: relative;
    }

    .badge 
    {
        position: relative;
        width: 300px;
        height: 300px;
        background-color: var(--simple-colors-default-theme-accent-5, #7cc6e6);
        border: 2px dashed var(--badge-stitch-color, #FFF);
        border-radius: 50%;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        cursor: pointer;
    }

    .badge.locked 
    {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .badge-logo 
    {
        font-size: 50px;
        margin-top:25px;
    }

    .badge-label 
    {
        font-size: 22px;
        font-weight: bold;
        margin-top: 50px;
        color: var(--badge-label-color, #ffffff);
        text-align: center
        width: 120px;
    }

    .badge-date 
    {
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: var(--badge-date-color, #ffffff);
    }

    .skills 
    {
      background-color: grey;
      padding: 10px;
      margin: 5px;
      border: 4px solid black;
      width: 100%;
      min-width: 100px;
    }
    
  `];

  constructor() {
    super();

    this.activeNode = null;
    this.skillsOpened = false;
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
        <div id="skillList">
          <simple-icon-button icon="cancel" @click="${this.skillClick}"></simple-icon-button>
        </div>
      </div>
    
      <!-- ABSOLUTE POSITION CODE FOR SKILLS POP OVER -->

      <absolute-position-behavior
          justify
          position="bottom"
          allow-overlap
          sticky
          auto
          .target="${this.activeNode}"
          ?hidden="${!this.skillsOpened}">
            <ul class="skills">${this.skills.map(item => html`<li>${item}</li>`)}</ul>
        </absolute-position-behavior> 

    `;
  }

  //verification icon button function
  verify() {
    window.open(this.verificationLink, "_blank");
  }

  //skills popover functions 
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector("#skillList");
  }
  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
    console.log(this.skillsOpened)
  }

}

customElements.define('badge-sticker', BadgeSticker);
