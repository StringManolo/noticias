import { html } from "../../htm-preact.mjs";

const News = props => {

  return html`<section class="news">
    <article class="newsArticles">
      <h3>${props.title}</h3>
      <p>${props.shortDescription}</p>
      ${props?.mainImage?.src?.length && html`<img src="${props.mainImage.src}" alt="${props.mainImage.alt}" />`}
      <span class="publishedDate">${props.publishedDate}</span>
      <div class="newsArticle">
      ${props.article.map(article => html`<p>${article}</p>`)}
      </div>
    </article>
  </section>`;
}

export default News;
