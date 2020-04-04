var open_menu=document.getElementById('open-menu'),
    menu=document.getElementsByClassName('header-menu')[0],
    fontsize=28;

open_menu.addEventListener('click', function(){
    if(!menu.classList.contains('toggled')){
        menu.style.left=0;
        menu.classList.add('toggled');
        this.getElementsByClassName('wn')[0].classList.replace('wn-menu-apps-l', 'wn-close-l');
        this.getElementsByClassName('wn')[0].style.fontSize=fontsize - 8 + 'px';
    }
    else{
        menu.style.left=-menu.clientWidth + 'px';
        menu.classList.remove('toggled');
        this.getElementsByClassName('wn')[0].classList.replace('wn-close-l', 'wn-menu-apps-l');
        this.getElementsByClassName('wn')[0].style.fontSize=fontsize + 'px';
    }
});