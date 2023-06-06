import { magic } from "./../goTime.js";
import { navLink } from "./../components/navLink.js";
import { PanelProp } from "./../components/panel-prop.js";

export const Footer = async () => {
  try {
    const url = `${magic}/api/Footer?populate=deep,3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('FooterV1');
    const logo = panel.querySelector('.ftr-lg img');
    const navMenu = panel.querySelector('[data-role="menu"]');
    const btnBx = panel.querySelector('.btn-cnt');

    logo.src = `/assets/logo/${attributes.Logo.LogoSrc.data.attributes.name}`;
    
    attributes.NavBar.forEach(item => {
        navLink(navMenu, item);
    });

    btnBx.innerHTML = `
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