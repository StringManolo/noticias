import { html, Component } from "../htm-preact.mjs";
import Router from "../preact-router.js";

import Dummy from "./news/Dummy.js";
import Dummy2 from "./news/Dummy2.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

const App = props => {

  return html`
    <${Header} title="News" />
    <${Router} onChange="${ e => this.setState(e)} >
      <${Dummy} path="/" />
      <${Dummy2} path="/dummy2" />
    <//>
    <${Footer} title="${'© ' + new Date().getFullYear()}" />
  `;
}

export default App;
