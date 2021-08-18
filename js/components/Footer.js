import { html } from "../htm-preact-router/htm-preact-router.mjs";

const Footer = props => {
  return html`
  <footer>
    <h4>${props.title}</h4>
  </footer>`;
}

export default Footer;
