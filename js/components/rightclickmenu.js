  var position = function(x,y) {
    this.positionX=x; 
    this.positionY=y;
  }
  //Ocultamos el menú al cargar la página
    $("#menu").hide();
    /* mostramos el menú si hacemos click derecho
    con el ratón */
    var positions;
    $(document).bind("contextmenu", function(e) {
        $("#menu").css({
            'display': 'block',
            'left': e.pageX,
            'top': e.pageY
            
        });
        
        positions = new position(e.pageX, e.pageY);
        return false;
    });
    //cuando hagamos click, el menú desaparecerá
    $(document).click(function(e) {
        if (e.button == 0) {
            $("#menu").css("display", "none");
        }
    });
    //si pulsamos escape, el menú desaparecerá
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $("#menu").css("display", "none");
        }
    });
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow')
    });
    //controlamos los botones del menú
    $("#menu").click(function(e) {
        // El switch utiliza los IDs de los <li> del menú
        switch (e.target.id) {
            case "project":
                $('.project')
                    .modal('show');
                break;
            case "employer":
                $('.employer')
                    .modal('show');
                break;
        }
    });