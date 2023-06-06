import { magic } from "./../goTime.js";
import { PanelProp } from "./../components/panel-prop.js";
import { imagecollagecta } from "./../components/image-cta.js";
import { kicker } from "./../components/kicker.js";
import { blockcontent } from "../components/block-content.js";
import { buttons } from "../components/buttons.js";

export const ContentV1 = async () => {
    try {
        const url = `${magic}/api/panels?filters[PanelID]=ContentV1&populate=deep`;
        const ftch = await fetch(url);
        const { data } = await ftch.json();
        const { attributes  } = data[0];
        const pnlBdy = `
            <section class="cnt v1 pd_v" id="ContentV1">
                <div class="mn_wd" data-flexswap data-wdth></div>
            </section>
        `;
        document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', pnlBdy);
        const pnl = document.getElementById('ContentV1');
        

        if(attributes.LeftSide.length || attributes.RightSide.length) {
            pnl.querySelector('[class*="mn_"]').classList.add('flx-at-1280', 'f_m', 'f_gp');
        }
        
        if(attributes.LeftSide.length) {
            const leftSideComponents = data.map(item => item.attributes.LeftSide.map(component => [component.__component, component.__component.split('.')[1].split('-').join('')]));
            const lftDiv = '<div class="half lft"></div>';
            pnl.querySelector('[class*="mn_"]').insertAdjacentHTML('afterbegin', lftDiv);
            const lft = pnl.querySelector('.lft');


            for (let i = 0; i < leftSideComponents.length; i++) {
                for(let j = 0; j < leftSideComponents[i].length; j++){
                    eval(leftSideComponents[i][j][1] + `(lft, attributes.LeftSide.find(obj => obj.__component === '${leftSideComponents[i][j][0]}'))`);
                }
            }
            
        }

        if(attributes.RightSide.length) {
            const rightSideComponents = data.map(item => item.attributes.RightSide.map(component => [component.__component, component.__component.split('.')[1].split('-').join('')]));
            const rhtDiv = '<div class="half rht mrg_tp"></div>';
            pnl.querySelector('[class*="mn_"]').insertAdjacentHTML('beforeend', rhtDiv);
            const rht = pnl.querySelector('.rht');

            for (let i = 0; i < rightSideComponents.length; i++) {
                for(let j = 0; j < rightSideComponents[i].length; j++){
                    eval(rightSideComponents[i][j][1] + `(rht, attributes.RightSide.find(obj => obj.__component === '${rightSideComponents[i][j][0]}'))`);
                }
            }

        }

        if(attributes.FullWidth.length) {
            const FullWidthComponents = data.map(item => item.attributes.FullWidth.map(component => [component.__component, component.__component.split('.')[1].split('-').join('')]));
            const mnWd = pnl.querySelector('[class*="mn_"]');

            for (let i = 0; i < FullWidthComponents.length; i++) {
                for(let j = 0; j < FullWidthComponents[i].length; j++){
                    eval(FullWidthComponents[i][j][1] + `(mnWd, attributes.FullWidth.find(obj => obj.__component === '${FullWidthComponents[i][j][0]}'))`);
                }
            }
        }

        if(attributes.PanelProperties) {
            PanelProp(pnl, attributes.PanelProperties);
        }
        
    }
    catch(error) {
        console.log(error);
    }
}



import { magic } from "./../goTime.js";
import { mainstagetext } from "./../components/mainstage-text.js";
import { PanelProp } from "./../components/panel-prop.js";

export const MainstageV1 = async () => {
    try {
        const url = `${magic}/api/panels?filters[PanelID]=MainstageV1&populate=deep`;
        const ftch = await fetch(url);
        const { data } = await ftch.json();
        const { attributes  } = data[0];
        const pnlBdy = `
            <section class="mstg v1 mstg-tls" id="MainstageV1" data-onvisible="anm"></section>
        `
        document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', pnlBdy);
        const pnl = document.getElementById('MainstageV1');

        if(attributes.LeftSide.length) {
            const leftSideComponents = data.map(item => item.attributes.LeftSide.map(component => [component.__component, component.__component.split('.')[1].split('-').join('')]));
            for (let i = 0; i < leftSideComponents.length; i++) {
                for(let j = 0; j < leftSideComponents[i].length; j++){
                    eval(leftSideComponents[i][j][1] + `(pnl, attributes.LeftSide.find(obj => obj.__component === '${leftSideComponents[i][j][0]}'))`);
                }
            }
            pnl.querySelector('.inf').classList.add('half');

        }

        if(attributes.FullWidth.length) {
            const fullWidthComponents = data.map(item => item.attributes.FullWidth.map(component => [component.__component, component.__component.split('.')[1].split('-').join('')]));
            for (let i = 0; i < fullWidthComponents.length; i++) {
                for(let j = 0; j < fullWidthComponents[i].length; j++){
                    eval(fullWidthComponents[i][j][1] + `(pnl, attributes.FullWidth.find(obj => obj.__component === '${fullWidthComponents[i][j][0]}'))`);
                }
            }
            pnl.querySelector('.inf').classList.add('ta_');
        }

        if(attributes.PanelProperties) {
            PanelProp(pnl, attributes.PanelProperties);
        }
    }
    catch(error) {
        console.log(error);
    }
}