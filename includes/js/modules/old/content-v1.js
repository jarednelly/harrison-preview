import { magic } from "./../goTime.js";
import { PanelProp } from "./../components/panel-prop.js";
import { imagecollagecta } from "./../components/image-cta.js";
import { kicker } from "./../components/kicker.js";
import { blockcontent } from "../components/block-content.js";
import { buttons } from "../components/buttons.js";

const renderComponents = (container, components) => {
  for (const component of components) {
    const componentName = component.__component;
    const componentParams = component.__component.split('.')[1].split('-').join('');
    eval(`${componentParams}(container, component)`);
  }
};

export const ContentV1 = async () => {
  try {
    const url = `${magic}/api/panels?filters[PanelID]=ContentV1&populate=deep,3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data[0];

    const pnlBdy = `
      <section class="cnt v1 pd_v" id="ContentV1">
        <div class="mn_wd" data-flexswap data-wdth></div>
      </section>
    `;
    const main = document.getElementsByTagName('main')[0];
    main.insertAdjacentHTML('beforeend', pnlBdy);
    const pnl = document.getElementById('ContentV1');

    const mainContainer = pnl.querySelector('[class*="mn_"]');

    if (attributes.LeftSide.length || attributes.RightSide.length) {
      mainContainer.classList.add('flx-at-1280', 'f_m', 'f_gp');
    }

    if (attributes.LeftSide.length) {
      const leftSideComponents = attributes.LeftSide;
      const lftDiv = '<div class="half lft"></div>';
      mainContainer.insertAdjacentHTML('afterbegin', lftDiv);
      const lft = pnl.querySelector('.lft');
      renderComponents(lft, leftSideComponents);
    }

    if (attributes.RightSide.length) {
      const rightSideComponents = attributes.RightSide;
      const rhtDiv = '<div class="half rht mrg_tp"></div>';
      mainContainer.insertAdjacentHTML('beforeend', rhtDiv);
      const rht = pnl.querySelector('.rht');
      renderComponents(rht, rightSideComponents);
    }

    if (attributes.FullWidth.length) {
      const fullWidthComponents = attributes.FullWidth;
      renderComponents(mainContainer, fullWidthComponents);
    }

    if (attributes.PanelProperties) {
      PanelProp(pnl, attributes.PanelProperties);
    }
  } catch (error) {
    console.log(error);
  }
};