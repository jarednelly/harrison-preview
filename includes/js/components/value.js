export function value(pnl, data){
    const itm = `
        <li class="flx f_m f_clm ato ta_">
            <div class="icn-bx bg-bx lk-bg flx f_c f_m">
                <svg viewBox="0 0 24 24">
                    ${data.Svg}
                </svg>
            </div>
            <strong class="fnt_t-5 fnt_tc-5 mrg_tp-30">${data.Title}</strong>
            <p class="mrg_bt-0 mrg_tp-30">${data.Description}</p>
        </li>
    `;

    pnl.querySelector('ul').insertAdjacentHTML('beforeend', itm);
}