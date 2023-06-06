// loader
var loader = document.querySelector('.loader');
var loaderItms = loader.querySelectorAll('.icn-cnt');

window.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(()=>{
        loaderItms.forEach((itm, idx)=>{
            setTimeout(()=>{
                itm.classList.add('active');
            }, (idx + 1) * 200);
        });

        setTimeout(()=>{
            loaderItms.forEach((itm, idx)=>{
                setTimeout(()=>{
                    itm.classList.remove('active');
                    itm.classList.add('fade');
                }, (idx + 1) * 100);
            });
        }, 1500);

        setTimeout(()=>{
            loader.classList.add('fade');
        }, 2000);
    });

});