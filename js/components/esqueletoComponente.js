import { html } from "../htm-preact-router/htm-preact-router.mjs";

const Example = props => {
  return html`<div class="myDivs">
    <h1>${props.innerText}</h1>
  </div>`;
}

export default Example;
