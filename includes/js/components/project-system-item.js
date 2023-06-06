export function projectSysItem(pnl, data){
    const itm = `
        <li class="itm flx" data-role="item">
            <a class="flx full hvr_scl-itm bdr_a" href="javascript:void(0)" data-role="lightbox-btn" data-img="/assets/portfolio/items/${data.Screenshot.data.attributes.name}">
                <picture class="img-bg itm" role="presentation">
                    <img src="/assets/portfolio/items/thumbnail/${data.Thumbnail.data.attributes.name}">
                </picture>
            </a>
        </li>
    `;

    pnl.insertAdjacentHTML('beforeend', itm);
}