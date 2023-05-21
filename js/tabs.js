var buttons = document.getElementsByClassName('button-tab');

Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener('click', function(){
        var buttons = document.getElementsByClassName('button-tab');
        Array.prototype.forEach.call(buttons, function(button) {
            button.classList.remove('active');
        });
        button.classList.add('active');
        var tab = button.attributes['tab-open'].value;

        var tabs = document.getElementsByClassName('tab');
        Array.prototype.forEach.call(tabs, function(tab) {
            tab.classList.remove('active');
        });
        document.getElementsByClassName(tab)[0].classList.add('active');
    })
});