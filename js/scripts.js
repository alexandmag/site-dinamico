//Aqui vai todo o código de javascript
$(function(){
    //O que vai acontecer quando clicar em nav.mobile
    $('nav.mobile').click(function(){

        var listaMenu = $('nav.mobile ul');  
        var icone = $('.botao-menu-mobile i');
        
        if(listaMenu.is(':hidden') == true){
            icone.removeClass('fa-bars');
            icone.addClass('fa-times')
            listaMenu.slideToggle();
        }
        else{
            icone.removeClass('fa-times')
            icone.addClass('fa-bars');
            listaMenu.slideToggle(); 
        }
    })
})

/*
        if(listaMenu.is(':hidden') == true)
        listaMenu.fadeIn();
        else
        listaMenu.fadeOut();
        */
        
        /*
        if(listaMenu.is(':hidden') == true)
        //listaMenu.show();
        listaMenu.css('display','block');
        else
        //listaMenu.hide();
        listaMenu.css('display','none');
        */
