var burger = document.getElementsByClassName('burger-mobile')[0];
burger.addEventListener('click', function(){
    var menu = document.getElementsByClassName('mobile-menu')[0];
    menu.classList.add('active');
    menu.style.display ='block';
})

var close = document.getElementsByClassName('close')[0];
close.addEventListener('click', function(){
    var menu = document.getElementsByClassName('mobile-menu')[0];
    menu.classList.remove('active');
    menu.style.display ='none';
})