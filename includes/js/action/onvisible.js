const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting) {
            setTimeout(function(){
                entry.target.classList.add('anm');
            }, 500)
            
        }
    })
});


const elements = document.querySelectorAll('[data-onvisible]');
elements.forEach((el) => observer.observe(el));