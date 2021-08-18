import { html } from "../htm-preact.mjs";

const Header = props => {
  return html`
  <header>
    <h1>${props.title}</h1>
  </header>`;
}

export default Header;
