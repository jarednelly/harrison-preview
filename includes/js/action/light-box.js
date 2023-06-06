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
                <div class="lb-box full">
                    <div class="lb-cnt">				
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" style="background-image:url(${src})"> 
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