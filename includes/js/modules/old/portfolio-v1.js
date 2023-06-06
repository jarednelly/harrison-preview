import { magic } from "./../goTime.js";
import { PanelProp } from "./../components/panel-prop.js";
import { buttons } from "../components/buttons.js";
import { projectitem } from "../components/project-item.js";
import { tokenheader } from "../components/token-header.js";
import { backgroundimage } from "../components/background-image.js";

const renderComponents = (container, components) => {
  for (const component of components) {
    const componentName = component.__component;
    const componentParams = component.__component.split('.')[1].split('-').join('');
    eval(`${componentParams}(container, component)`);
  }
};

export const PortfolioV1 = async () => {
  try {
    const url = `${magic}/api/panels?filters[PanelID]=PortfolioV1&populate=deep,3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data[0];

    const pnlBdy = `
      <section class="prt v1 pd_v dk-bg" id="PortfolioV1" data-role="scroller">
        <link href="includes/panels/portolio/portfolio-v1.css" type="text/css" rel="stylesheet">
        <link href="includes/scrolling-list.css" type="text/css" rel="stylesheet">
        <div class="mn_wd" data-wdth></div>
      </section>
    `;
    const main = document.getElementsByTagName('main')[0];
    main.insertAdjacentHTML('beforeend', pnlBdy);
    const pnl = document.getElementById('PortfolioV1');
    const mnWd = pnl.querySelector('[class*="mn_"]');

    if (attributes.FullWidth.length) {
      const backImgItm = attributes.FullWidth.filter(obj => obj.__component === 'panel-components.background-image');
      if (backImgItm.length) {
        backgroundimage(pnl, backImgItm, '/assets/portfolio/');
      }

      const lst = `
        <div data-role="container">
          <ul class="flx-at-700-grd sl_ato-rsp sl_itm-100-700" data-role="list"></ul>
        </div>
      `;
      mnWd.insertAdjacentHTML('beforeend', lst);

      const FullWidthComponents = attributes.FullWidth.filter(obj =>
        obj.__component !== 'panel-components.background-image'
      );
      renderComponents(mnWd, FullWidthComponents);
    }

    if (attributes.PanelProperties) {
      PanelProp(pnl, attributes.PanelProperties);
    }

    const ltBxScr = document.createElement('script');
    ltBxScr.src = 'includes/js/action/light-box.js';
    pnl.append(ltBxScr);
  } catch (error) {
    console.log(error);
  }
};