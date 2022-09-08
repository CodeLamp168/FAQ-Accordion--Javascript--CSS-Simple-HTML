const buttons = document.querySelectorAll('.faq-container');


function resetButtonStyles(){
    document.querySelectorAll('div.faq-container.active').forEach( divactive => {
      divactive.classList.remove('active');
    });
}
buttons.forEach(button => {
    button.addEventListener('click', function(){

        document.querySelector('div.faq-container.active')
        ?.classList.remove('active');

        const clickedButton = window.event.currentTarget;
        const parentDiv = clickedButton.closest('div.faq-container');
        parentDiv.classList.add('active');
    });
});
