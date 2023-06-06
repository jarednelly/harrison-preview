export function PanelProp(pnl, data){
    const themeProp = data.find(prop => prop.__component === 'panel-properties.theme' && prop.Theme);
    const padProp = data.find(prop => prop.__component === 'panel-properties.padding' && prop.Padding);
    const imgProp = data.find(prop => prop.__component === 'panel-properties.background');
    const bxProp = data.find(prop => prop.__component === 'panel-properties.bg-bx' && prop.color);
    const wdthProp = data.find(prop => prop.__component === 'panel-properties.main-width' && prop.MainWidth);
    const flxProp = data.find(prop => prop.__component === 'panel-properties.flex-swap');

    if (themeProp && themeProp.Theme) {
        pnl.classList.add(...themeProp.Theme.split(' '));
    }

    if (padProp && padProp.Padding) {
        pnl.classList.add(padProp.Padding);
    }

    if (imgProp && imgProp.BackgroundImage && imgProp.BackgroundImage === true) {
       pnl.classList.add('bg-image');
    }

    if (bxProp && bxProp.color) {
        pnl.querySelector('[data-innertheme]').classList.add(bxProp.color);
    }

    if (wdthProp && wdthProp.MainWidth) {
        pnl.querySelector('[data-wdth]').classList.remove('mn_wd', 'mn_tn', 'mn_');
        pnl.querySelector('[data-wdth').classList.add(wdthProp.MainWidth);
    }

    if (flxProp && flxProp.Swap && flxProp.Swap === true) {
        pnl.querySelector('[data-flexswap]').classList.add('f_rev');
    }
}