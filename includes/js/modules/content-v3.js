import { magic } from "./../goTime.js";
import { PanelProp } from "./../components/panel-prop.js";

export const ContentV3 = async () => {
  try {
    const url = `${magic}/api/content-v3?populate=deep,3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('ContentV3');
    const contentItem = panel.querySelector('.cnt-stl');

    
   //Handle Image
   panel.querySelector('picture img').src = `/assets/content/${attributes.Image.data.attributes.name}`;
    
    // Handle Content
    contentItem.innerHTML = `
        ${attributes.Content.Kicker ? `<strong class="fnt_t-k fnt_tc-k">${attributes.Content.Kicker}</strong>` : ''}
        ${attributes.Content.Content}
    `;

      panel.querySelector('.btn-cnt').innerHTML = `
            <a class="btn ${attributes.Button.ButtonVersion}" href="${attributes.Button.Url}"> 
            ${attributes.Button.ButtonText} ${attributes.Button.Svg ? `<svg class="mrg_lt-30" viewBox="0 0 24 24" role="presentation">${attributes.Button.Svg}</svg>` : ''}
        </a>
    `;

    if (attributes.PanelProperties) {
        PanelProp(panel, attributes.PanelProperties);
    }

  } catch (error) {
    console.log(error);
  }
};