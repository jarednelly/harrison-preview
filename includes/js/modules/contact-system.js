import { magic } from "./../goTime.js";

export const ContactSystem = async () => {
  try {
    const url = `${magic}/api/contact-system?populate=deep,3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('ContactSystemV1');
    const panelGrp = document.getElementById('ContactSystemGroup');
    const header = panel.querySelector('header');
    var imgMob;

    //Handle Background Image
    panelGrp.querySelector('.img-bg img').src = `/assets/contact/${attributes.BackgroundImage.ImageUrl.data.attributes.name}`;
    imgMob = `<source media="(max-width: 700px)" srcset="/assets/contact/${attributes.BackgroundImage.ImageUrl.data.attributes.name.split('.')[0]}-mobile.jpg" />`;
    panelGrp.querySelector('.img-bg').insertAdjacentHTML('afterbegin', imgMob);

    // Handle Header Text
    header.innerHTML = `
        ${attributes.HeaderText.Kicker ? `<em class="fnt_t-k">${attributes.HeaderText.Kicker}</em>` : ''}
        <h4 class="fnt_t-co fnt_tc-co">${attributes.HeaderText.Title}</h4>
        ${attributes.HeaderText.SubTitle ? `<h5 class="fnt_t-2 fnt_tc-2">${attributes.HeaderText.SubTitle}</h5>` : ''}
        ${attributes.HeaderText.Description ? `<p>${attributes.HeaderText.Description}</p>` : ''}
    `;

  } catch (error) {
    console.log(error);
  }
};