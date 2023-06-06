import { magic } from "./../goTime.js";
import { navLink } from "./../components/navLink.js";
import { PanelProp } from "./../components/panel-prop.js";

export const Header = async () => {
  try {
    const url = `${magic}/api/header?populate=deep,3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('HeaderV1');
    const logo = panel.querySelector('.tp-lg img');
    const navMenu = panel.querySelector('[data-role="panel"]');
    const btnBx = panel.querySelector('.btn-cnt');

    logo.src = `/assets/logo/${attributes.Logo.LogoSrc.data.attributes.name}`;
    
    attributes.NavBar.forEach(item => {
        navLink(navMenu, item);
    });

    btnBx.innerHTML = `
        <a class="btn ${attributes.HeaderButton.ButtonVersion}" href="${attributes.HeaderButton.Url}">
            ${attributes.HeaderButton.ButtonText}
        </a>
    `;

    if (attributes.PanelProperties) {
        PanelProp(panel, attributes.PanelProperties);
    }

  } catch (error) {
    console.log(error);
  }
};