import { magic } from "./../goTime.js";
import { PanelProp } from "./../components/panel-prop.js";
import { projectitem } from "./../components/project-item.js";

export const PortfolioV1 = async () => {
  try {
    const url = `${magic}/api/portfolio-v1?populate=deep,3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('PortfolioV1');
    const header = panel.querySelector('header');
    const btnCont = panel.querySelector('.btn-con');
    var imgMob;

    //Handle Background Image
    panel.querySelector('.img-bg img').src = `/assets/portfolio/${attributes.BackgroundImage.ImageUrl.data.attributes.name}`;
    imgMob = `<source media="(max-width: 700px)" srcset="/assets/portfolio/${attributes.BackgroundImage.ImageUrl.data.attributes.name.split('.')[0]}-mobile.jpg" />`;
    panel.querySelector('.img-bg').insertAdjacentHTML('afterbegin', imgMob);

    // Handle Header Text
    header.innerHTML = `
        ${attributes.HeaderText.Kicker ? `<em class="fnt_t-k">${attributes.HeaderText.Kicker}</em>` : ''}
        <h4 class="fnt_t-co fnt_tc-co">${attributes.HeaderText.Title}</h4>
        ${attributes.HeaderText.SubTitle ? `<h5 class="fnt_t-2 fnt_tc-2">${attributes.HeaderText.SubTitle}</h5>` : ''}
        ${attributes.HeaderText.Description ? `<p>${attributes.HeaderText.Description}</p>` : ''}
    `;

    attributes.ListItem.forEach(item => {
        projectitem(panel, item);
    });

    btnCont.innerHTML = `
        <a class="btn ${attributes.Button.ButtonVersion}" href="${attributes.Button.Url}">
            ${attributes.Button.ButtonText}
        </a>
    `;
    

    if (attributes.PanelProperties) {
        PanelProp(panel, attributes.PanelProperties);
    }

    const lightBox = document.createElement('script');
    lightBox.src = 'includes/js/action/light-box.js';
    panel.append(lightBox);

    const scrolling = document.createElement('script');
    scrolling.src = 'includes/js/action/scrolling-list.js';
    panel.append(scrolling);

  } catch (error) {
    console.log(error);
  }
};