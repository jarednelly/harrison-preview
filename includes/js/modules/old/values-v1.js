import { magic } from "./../goTime.js";
import { PanelProp } from "./../components/panel-prop.js";
import { value } from "./../components/value.js";

const renderComponents = (container, components) => {
  for (const component of components) {
    const componentName = component.__component;
    const componentParams = component.__component.split('.')[1].split('-').join('');
    eval(`${componentParams}(container, component)`);
  }
};

export const ValuesV1 = async () => {
  try {
    const url = `${magic}/api/panels?filters[PanelID]=ValuesV1&populate=deep,2`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data[0];

    const pnlBdy = `
      <section class="vls v1 pd_v" id="ValuesV1">
      <link href="includes/panels/values/values-v1.css" type="text/css" rel="stylesheet">
      <link href="includes/flex-gas-lrg.css" type="text/css" rel="stylesheet">
        <div class="mn_wd" data-wdth>
            <ul class="flx-at-700-mx-4-ato-sz-grd-lrg"></ul>
        </div>
      </section>
    `;
    const main = document.getElementsByTagName('main')[0];
    main.insertAdjacentHTML('beforeend', pnlBdy);
    const pnl = document.getElementById('ValuesV1');

    const mainContainer = pnl.querySelector('[class*="mn_"]');

    if (attributes.LeftSide.length || attributes.RightSide.length) {
      mainContainer.classList.add('flx-at-1280', 'f_m', 'f_gp');
    }

    if (attributes.LeftSide.length) {
      const lftDiv = '<div class="half lft"></div>';
      mainContainer.insertAdjacentHTML('afterbegin', lftDiv);
      renderComponents(pnl.querySelector('.lft'), attributes.LeftSide);
    }

    if (attributes.RightSide.length) {
      const rhtDiv = '<div class="half rht mrg_tp"></div>';
      mainContainer.insertAdjacentHTML('beforeend', rhtDiv);
      renderComponents(pnl.querySelector('.rht'), attributes.RightSide);
    }

    if (attributes.FullWidth.length) {
      renderComponents(mainContainer, attributes.FullWidth);
    }

    if (attributes.PanelProperties) {
      PanelProp(pnl, attributes.PanelProperties);
    }
  } catch (error) {
    console.log(error);
  }
};