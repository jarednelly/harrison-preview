export function navLink(pnl, data){
    const itm = `
        <li class="flx ato rlt">
            <a class="ato flx f_m fnt_nv-lnk clr-swp pd_tp pd_bt" href="${data.PageLink}">
               ${data.LinkText}
            </a>
        </li>
    `;

    pnl.insertAdjacentHTML('beforeend', itm);
}