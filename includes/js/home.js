// Imports

import { magic } from "./goTime.js";

//Mainstage
import { MainstageV1 } from "./modules/mainstage.js";
//Content
import { ContentV1 } from "./modules/content-v1.js";
//Portfolio
import { PortfolioV1 } from "./modules/portfolio-v1.js";

import { ValuesV1 } from "./modules/values-v1.js";


async function Home() {
    try {
        const url = `${magic}/api/pages?filters[PageName]=Home&populate=deep,2`;
        const ftch = await fetch(url);
        const { data } = await ftch.json();
        const { attributes  } = data[0];

        const panelIds = attributes.panels.data.map(panel => panel.attributes.PanelID);
        
        for (let i = 0; i < panelIds.length; i++) {
            eval(panelIds[i] + '()');
          }
        
    }
    catch(error) {
        console.log(error);
    }
}

window.onload = () => {
    Home();
};