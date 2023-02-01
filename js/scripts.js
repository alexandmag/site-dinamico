//Aqui vai todo o código de javascript
$(function(){
    //O que vai acontecer quando clicar em nav.mobile
    $('nav.mobile').click(function(){

        var listaMenu = $('nav.mobile ul');

        /*
        if(listaMenu.is(':hidden') == true)
            listaMenu.fadeIn();
        else
            listaMenu.fadeOut();
        */

        listaMenu.slideToggle();

        /*
        if(listaMenu.is(':hidden') == true)
            //listaMenu.show();
            listaMenu.css('display','block');
        else
            //listaMenu.hide();
            listaMenu.css('display','none');
        */
        })
})