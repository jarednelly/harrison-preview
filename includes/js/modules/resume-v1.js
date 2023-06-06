import { magic } from "./../goTime.js";
import { PanelProp } from "./../components/panel-prop.js";
import { resumeitem } from "./../components/resumeitem.js";

export const ResumeV1 = async () => {
  try {
    const url = `${magic}/api/resume-v1?populate=deep,3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data;
    const panel = document.getElementById('ResumeV1');
    const ul = panel.querySelector('ul');


    attributes.ResumeItem.forEach(item => {
        resumeitem(ul, item);
    });
    
    if (attributes.PanelProperties) {
        PanelProp(panel, attributes.PanelProperties);
    }

  } catch (error) {
    console.log(error);
  }
};