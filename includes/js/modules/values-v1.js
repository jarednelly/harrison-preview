import { magic } from "./../goTime.js";
import { PanelProp } from "./../components/panel-prop.js";
import { value } from "./../components/value.js";

export const ValuesV1 = async () => {
  try {
    const url = `${magic}/api/values-v1?populate=deep,2`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('ValuesV1');
    const header = panel.querySelector('header');
    const btnCont = panel.querySelector('.btn-con');

    // Handle Header Text
    if(header){
        header.innerHTML = `
            ${attributes.HeaderText.Kicker ? `<em class="fnt_t-k">${attributes.HeaderText.Kicker}</em>` : ''}
            <h4 class="fnt_t-co fnt_tc-co">${attributes.HeaderText.Title}</h4>
            ${attributes.HeaderText.SubTitle ? `<h5 class="fnt_t-2 fnt_tc-2">${attributes.HeaderText.SubTitle}</h5>` : ''}
            ${attributes.HeaderText.Description ? `<p>${attributes.HeaderText.Description}</p>` : ''}
        `;
    }

    attributes.ValueItem.forEach(item => {
        value(panel, item);
    });

    if(btnCont){
        btnCont.innerHTML = `
            <a class="btn ${attributes.Button.ButtonVersion}" href="${attributes.Button.Url}">
                ${attributes.Button.ButtonText}
            </a>
        `;
    }
    

    if (attributes.PanelProperties) {
        PanelProp(panel, attributes.PanelProperties);
    }


  } catch (error) {
    console.log(error);
  }
};