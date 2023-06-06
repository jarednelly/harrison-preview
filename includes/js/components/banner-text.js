export function bannertext(pnl, data){
    console.log(data);
    var imgMob;
    //Handle Background Image
    pnl.querySelector('.img-bg img').src = `/assets/banner/${data.BannerText.BackgroundImage.ImageUrl.data.attributes.name}`;
    imgMob = `<source media="(max-width: 700px)" srcset="/assets/banner/${data.BannerText.BackgroundImage.ImageUrl.data.attributes.name.split('.')[0]}-mobile.jpg" />`;
    pnl.querySelector('.img-bg').insertAdjacentHTML('afterbegin', imgMob);
    
    const inf = pnl.querySelector('.half');

    // Handle Mainstage Text
    inf.innerHTML = `
        <strong class="fnt_t-k fnt_tc-k">${data.BannerText.Kicker}</strong>
        <h1 class="fnt_t-big fnt_tc-big">${data.BannerText.Title}</h1>
        ${data.BannerText.SubTitle ? `<em class="fnt_t-3 fnt_tc-3">${data.BannerText.SubTitle}</em>` : ''}
        <p class="fnt_pl mrg_bt-0">${data.BannerText.Description}</p>
        <div class="btn-con mrg_tp">
            <a class="btn ${data.BannerText.Button.ButtonVersion}" href="${data.BannerText.Button.Url}">
                ${data.BannerText.Button.ButtonText}
            </a>
        </div>
    `;
}