import { magic } from "./../goTime.js";
import { bannertext } from "./../components/banner-text.js";
import { PanelProp } from "./../components/panel-prop.js";

export const BannerV4 = async () => {
  try {
    const url = `${magic}/api/banner-v4?populate=deep,4`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('BannerV4');
    
    bannertext(panel, attributes);

    if (attributes.PanelProperties) {
        PanelProp(panel, attributes.PanelProperties);
    }

  } catch (error) {
    console.log(error);
  }
};