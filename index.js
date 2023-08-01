const bar = document.getElementById('bar');
const nav = document.getElementById('navbar'); 
const cross = document.getElementById('cross');
const hero = document.getElementsByClassName('hero-section'); 

    bar.addEventListener('click', () => {
        nav.classList.remove('deactive');
        nav.classList.add('active');
        hero.classList.add('active1'); 
   })



    cross.addEventListener('click', ()=>{
        nav.classList.add('deactive'); 
    })


// this is for the sproduct section 
