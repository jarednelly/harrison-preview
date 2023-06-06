import { magic } from "./../goTime.js";
import { mainstagetext } from "./../components/mainstage-text.js";
import { PanelProp } from "./../components/panel-prop.js";

const renderComponents = (container, components) => {
  for (const component of components) {
    const componentName = component.__component;
    const componentParams = component.__component.split('.')[1].split('-').join('');
    eval(`${componentParams}(container, component)`);
  }
};

export const MainstageV1 = async () => {
  try {
    const url = `${magic}/api/panels?filters[PanelID]=MainstageV1&populate=deep`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data[0];

    const pnlBdy = `
      <section class="mstg v1 mstg-tls" id="MainstageV1" data-onvisible="anm">
      <link href="includes/panels/mainstage/mstg-tls.css" type="text/css" rel="stylesheet">
      </section>
    `;
    const main = document.getElementsByTagName('main')[0];
    main.insertAdjacentHTML('beforeend', pnlBdy);
    const pnl = document.getElementById('MainstageV1');

    if (attributes.LeftSide.length) {
      const leftSideComponents = attributes.LeftSide;
      renderComponents(pnl, leftSideComponents);
      pnl.querySelector('.inf').classList.add('half');
    }

    if (attributes.FullWidth.length) {
      const fullWidthComponents = attributes.FullWidth;
      renderComponents(pnl, fullWidthComponents);
      pnl.querySelector('.inf').classList.add('ta_');
    }

    if (attributes.PanelProperties) {
      PanelProp(pnl, attributes.PanelProperties);
    }
  } catch (error) {
    console.log(error);
  }
};