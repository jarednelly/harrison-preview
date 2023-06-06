import { magic } from "./../goTime.js";
import { PanelProp } from "./../components/panel-prop.js";

export const ContentV2 = async () => {
  try {
    const url = `${magic}/api/content-v2?populate=deep,3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('ContentV2');
    const gridItem = panel.querySelector('.grd');
    const contentItem = panel.querySelector('.cnt-stl');
    var img1Mob;

    
    // Handle Grid Items
    gridItem.classList.add(attributes.Collage.CollageVersion);
    gridItem.querySelector('.itm-1 img').src = `/assets/content/${attributes.Collage.LargeImage.data.attributes.name}`;
    gridItem.querySelector('.itm-2 img').src = `/assets/content/${attributes.Collage.SmallImage.data.attributes.name}`;
    gridItem.querySelector('.itm-3').innerHTML = `
        <a class="pd_h pd_v flx f_b bg-bx flx btn-clr-hvr full" href="${attributes.Collage.CtaPageLink}" data-innertheme>
          <div class="full flx f_clm">
            <strong class="fnt_t-3 fnt_tc-3 fnt-over">${attributes.Collage.CtaTitle}</strong>
            <span class="btn ${attributes.Collage.CtaButtonVersion} mrg_tp-20"> ${attributes.Collage.CtaButtonText} ${attributes.Collage.CtaSvg ? `<svg class="mrg_lt-30" viewBox="0 0 24 24" role="presentation">${attributes.Collage.CtaSvg}</svg>` : ''}</span>
          </div>
        </a>
    `;

    img1Mob = `<source media="(max-width: 1279px)" srcset="/assets/content/${attributes.Collage.LargeImage.data.attributes.name.split('.')[0]}-tablet.jpg" />`;
    gridItem.querySelector('.itm-1 picture').insertAdjacentHTML('afterbegin', img1Mob);
    
    // Handle Content
    contentItem.innerHTML = `
        <strong class="fnt_t-k fnt_tc-k">${attributes.Content.Kicker}</strong>
        ${attributes.Content.Content}
    `;

      panel.querySelector('.btn-cnt').innerHTML = `
            <a class="btn ${attributes.Button.ButtonVersion}" href="${attributes.Button.Url}">
            ${attributes.Button.ButtonText}
        </a>
    `;

    if (attributes.PanelProperties) {
        PanelProp(panel, attributes.PanelProperties);
    }

  } catch (error) {
    console.log(error);
  }
};