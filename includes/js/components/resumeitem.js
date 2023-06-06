export function resumeitem(pnl, data){
    console.log(data);
    const itm = `
        <li class="half flx f_clm anm_seq-itm mrg_tp">
            <h3 class="fnt_t-2 fnt_tc-2">${data.JobTitle}</h3>
            <strong class="fnt_t-5 fnt_tc-5 mrg_tp-20">${data.Company}</strong>
            <em class="fnt_t-6 fnt_tc-6 mrg_tp-20">${data.LocationDate}</em>
            <div class="cnt-stl mrg_tp-30">
                <p>${data.JobDescription}</p>
            </div>
        </li>
    `;

    pnl.insertAdjacentHTML('beforeend', itm);
}