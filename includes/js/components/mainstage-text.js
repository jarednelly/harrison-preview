export function mainstagetext(pnl, data){
    const inf = `
        ${data.BackgroundImage ? `<picture class="img-bg" role="presentation"><img src="/assets/mainstage/${data.BackgroundImage.ImageUrl.data.attributes.name}"></picture>` : ''}
        <div class="mn_wd flx-at-1280" data-wdth data-flexswap>
            <div class="inf">
                <em class="fnt_t-k fnt_tc-k">${data.Kicker}</em>
                <strong class="fnt_t-big fnt_tc-big">${data.Title}</strong>
                ${data.SubTitle ? `<em class="fnt_t-3 fnt_tc-3">${data.SubTitle}</em>` : ''}
                <p class="fnt_pl mrg_bt-0">${data.Description}</p>
                <div class="btn-con">
                    <a class="btn ${data.Button.ButtonVersion}" href="${data.Button.Url}">
                        ${data.Button.ButtonText}
                    </a>
                </div>
            </div>
        </div>
    `;

    pnl.insertAdjacentHTML('beforeend', inf);
}