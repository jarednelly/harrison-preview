import { magic } from "./../goTime.js";
import { PanelProp } from "./../components/panel-prop.js";

export const MainstageV1 = async () => {
  try {
    const url = `${magic}/api/mainstage-v1?populate=deep,4`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('MainstageV1');
    const inf = panel.querySelector('.inf');
    var imgMob;

    //Handle Background Image
    panel.querySelector('.img-bg img').src = `/assets/mainstage/${attributes.MainstageText.BackgroundImage.ImageUrl.data.attributes.name}`;
    imgMob = `<source media="(max-width: 700px)" srcset="/assets/mainstage/${attributes.MainstageText.BackgroundImage.ImageUrl.data.attributes.name.split('.')[0]}-mobile.jpg" />`;
    panel.querySelector('.img-bg').insertAdjacentHTML('afterbegin', imgMob);

    // Handle Mainstage Text
    inf.innerHTML = `
        <em class="fnt_t-k fnt_tc-k">${attributes.MainstageText.Kicker}</em>
        <strong class="fnt_t-big fnt_tc-big">${attributes.MainstageText.Title}</strong>
        ${attributes.MainstageText.SubTitle ? `<em class="fnt_t-3 fnt_tc-3">${attributes.MainstageText.SubTitle}</em>` : ''}
        <p class="fnt_pl mrg_bt-0">${attributes.MainstageText.Description}</p>
        <div class="btn-con">
            <a class="btn ${attributes.MainstageText.Button.ButtonVersion}" href="${attributes.MainstageText.Button.Url}">
                ${attributes.MainstageText.Button.ButtonText}
            </a>
        </div>
    `;
    

    if (attributes.PanelProperties) {
        PanelProp(panel, attributes.PanelProperties);
    }

  } catch (error) {
    console.log(error);
  }
};