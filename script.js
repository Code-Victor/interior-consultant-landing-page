const ham=document.getElementsByClassName('ham')[0];

const mobileNav=document.getElementById('mobile-nav')

const cancel=document.getElementsByClassName('cancel-sec')[0];

ham.addEventListener('click',()=>{
    mobileNav.style.display = "flex";
})

cancel.addEventListener('click',()=>{
    mobileNav.style.display = "none";
})

window.addEventListener('resize',()=>{
    if (window.screen.width>=540){
        mobileNav.style.display="none";
    }
})
