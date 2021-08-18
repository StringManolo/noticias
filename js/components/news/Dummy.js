import { html } from "../../htm-preact-router/htm-preact-router.mjs";
import News from "./News.js";

const Dummy = props => {
  const article = [
    "Going online created more opportunities for newspapers, such as competing with broadcast journalism in presenting breaking news in a more timely manner. The credibility and strong brand recognition of well established newspapers, and the close relationships they have with advertisers, are also seen by many in the newspaper industry as strengthening their chances of survival.[1] The movement away from the printing process can also help decrease costs.",

    "Consectetur corporis repellat amet reprehenderit quos Explicabo impedit sit quam voluptas eligendi? Maiores harum minus sequi tempora sunt In excepturi non corrupti perferendis placeat. Reprehenderit sequi commodi commodi officiis dolores Recusandae asperiores assumenda culpa minus harum Corrupti cupiditate incidunt eaque repudiandae quae, in nisi, sunt. Nemo quae nam saepe veritatis neque Beatae culpa delectus perferendis molestias amet, non maxime Ducimus voluptatibus quia voluptas possimus consequuntur.",
    "Pariatur magnam voluptatum reprehenderit dolorum porro Maxime corrupti veritatis libero earum alias Assumenda cumque voluptates autem possimus maiores Asperiores vel eum tempore quo dolore. Animi accusantium obcaecati blanditiis eum dolore. Non atque voluptates totam deleniti asperiores non nisi. Repellendus magni minus nostrum repudiandae sed! Distinctio totam non quis repellendus ipsa Saepe quos consequatur officia unde provident Voluptas modi voluptatibus illo modi accusamus! Eaque nihil expedita ducimus magnam possimus Facilis neque nesciunt eligendi deserunt animi? Beatae eum voluptatibus necessitatibus voluptates magnam. Voluptatum reprehenderit voluptatem fuga sed cum Doloremque perferendis corporis voluptatem nam sequi cumque? Consectetur nam vel temporibus dolorem explicabo Delectus rerum quaerat dolore sed iste Nam recusandae maxime soluta nulla quaerat alias At corporis neque quibusdam minima mollitia provident. Earum aliquid animi eveniet molestias assumenda laboriosam Est veritatis fuga libero autem aspernatur suscipit Illum natus."
  ];

  return html`
  <${News}
    title="Dummy"
    publishedDate="${new Date() + ''}"
    mainImage="${ { src: 'https://google.com/favicon.ico', alt: 'Example.com Favicon' } }"
    shortDescription="Dummy is a placeholder text for news used for style the elements and debug"
    article="${article}"
  />
  `;
}

export default Dummy;
