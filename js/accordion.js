var buttons = document.getElementsByClassName('accordion-title');

Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener('click', function(){
        Array.prototype.forEach.call(buttons, function(button) {
            button.classList.remove('active');
        });
        button.classList.add('active');
        var tab = button.attributes['accordion-open'].value;

        var tabs = document.getElementsByClassName('accordion-content');
        Array.prototype.forEach.call(tabs, function(tab) {
            tab.classList.remove('active');
        });
        document.getElementsByClassName(tab)[0].classList.add('active');
    })
});