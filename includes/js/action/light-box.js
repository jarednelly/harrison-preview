function lightbox(pnl){
    var el = document.querySelector('[data-lightbox]');
    var itms = el.querySelector('[data-role="lightbox-btn"]');

    if(itms) el.addEventListener('click', showLightBox);

    function showLightBox(e) {
        var opnBtn = e.target.closest( '[data-role="lightbox-btn"]' );
        if(opnBtn) {
            var itm = e.target.closest('[data-role="item"]');
            var lrgSrc = itm.querySelector('a').getAttribute('data-img');
            loadLightBox(e, lrgSrc);
        }

    }

    function loadLightBox(e, src){
        var lightBox = `
        <div class="lb-con dk-bg lb-zoom-0" aria-hidden="false">
            <button data-action><svg viewBox="0 0 24 24"><path d="M1.285 0.002A1.498 1.498 0.012 0 0 0.012 1.5a1.498 1.498 0 0 0 0.434 0.884L10.019 11.986L0.447 21.604a1.408 1.408 0 0 0 0 1.992a1.393 1.393 0 0 0 1.962 0L11.996 14.009l9.572 9.587a1.498 1.498 0 0 0 2.007 0a1.408 1.408 0 0 0 0-1.992L14.034 11.986l9.587-9.587A1.423 1.423 0.012 0 0 21.614 0.437L11.996 10.009L2.454 0.437A1.588 1.588 0.012 0 0 1.285 0.002Z" /></svg></button>
            <div class="lb-background bg-bx flx f_m">
                <div class="lb-box full ta_">
                    <div class="flx f_c f_m mrg_bt-20">
                        <svg class="icn blk" viewBox="0 0 24 24"><path d="M11.868 21.016c0.128 0.112 0.286 0.167 0.443 0.167h0.001c0.043 0 0.087-0.005 0.13-0.014 0.013-0.002 0.025-0.007 0.038-0.01 0.03-0.008 0.059-0.017 0.088-0.028 0.015-0.006 0.029-0.014 0.044-0.021 0.025-0.013 0.05-0.027 0.074-0.043 0.014-0.009 0.028-0.019 0.042-0.03 0.009-0.007 0.019-0.013 0.028-0.02l2.472-2.163c0.28-0.245 0.309-0.672 0.063-0.952-0.246-0.28-0.671-0.309-0.952-0.063l-2.028 1.775l-2.029-1.775c-0.28-0.245-0.706-0.217-0.952 0.063-0.245 0.281-0.217 0.707 0.064 0.952z" />
                            <path d="M11.868 17.032c0.128 0.112 0.286 0.167 0.443 0.167h0.001h0.001c0.043 0 0.087-0.005 0.13-0.014 0.013-0.003 0.025-0.007 0.037-0.01 0.03-0.008 0.06-0.017 0.089-0.029 0.015-0.006 0.029-0.014 0.044-0.021 0.025-0.013 0.05-0.027 0.074-0.042 0.014-0.01 0.028-0.02 0.042-0.031 0.009-0.007 0.019-0.013 0.028-0.02l2.472-2.163c0.28-0.245 0.309-0.671 0.063-0.952-0.246-0.28-0.671-0.309-0.952-0.063l-2.028 1.775l-2.029-1.775c-0.28-0.245-0.706-0.217-0.952 0.063-0.245 0.281-0.217 0.706 0.064 0.952z" />
                            <path d="M10.083 24.204h4.455c3.393 0 6.153-2.76 6.153-6.153v-11.695c0-3.393-2.76-6.153-6.153-6.153h-4.455c-3.393 0-6.153 2.76-6.153 6.153v11.695c0 3.393 2.761 6.153 6.153 6.153zm-4.804-17.847c0-2.649 2.155-4.804 4.804-4.804h4.455c2.649 0 4.804 2.155 4.804 4.804v11.695c0 2.649-2.155 4.804-4.804 4.804h-4.455c-2.649 0-4.804-2.155-4.804-4.804z" />
                            <path d="M12.311 10.985c1.342 0 2.433-1.092 2.433-2.434v-2.723c0-1.342-1.091-2.433-2.433-2.433-1.342 0-2.433 1.092-2.433 2.433v2.723c0 1.342 1.091 2.433 2.433 2.433zm-1.085-5.156c0-0.598 0.487-1.085 1.085-1.085 0.598 0 1.084 0.487 1.084 1.085v2.723c0 0.598-0.487 1.085-1.084 1.085-0.598 0-1.085-0.487-1.085-1.085z" />
                        </svg>
                        <span class="blk mrg_lt-20">Scroll to Explore More</span> 
                    </div>
                    <div class="lb-cnt ui-scroll">				
                        <img src="${src}"> 
                    </div>
                </div>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML( 'beforeend', lightBox );
        document.documentElement.classList.add( 'lb-open' );
        document.querySelector('.lb-con').addEventListener('click', closeLightBox);
    }

    function closeLightBox(e) {
        var clsBtn = e.target.closest( '[data-action]' );
        if(clsBtn) {
            document.querySelector('.lb-con').remove();
            document.documentElement.classList.remove( 'lb-open' );
        }
    }
}

lightbox();