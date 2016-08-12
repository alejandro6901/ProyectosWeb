  var position = function(x,y) {
    this.positionX=x; 
    this.positionY=y;
  }
  //Ocultamos el menú al cargar la página
    $("#menu").hide();
    var positions;
  /* mostramos el menú si hacemos click derecho
    con el ratón */
    $(document).bind("contextmenu", function(e) {
        $("#menu").css({
            'display': 'block',
            'left': e.pageX,
            'top': e.pageY
            
        });
        
        positions = new position(e.pageX, e.pageY);
        return false;
    });
         $('#c').click(function() {
        $('.sidebar')
            .sidebar('toggle');
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
             $('.createmodal').modal('show');
              $('.modalname').text('Create New Project')
            
                break;
            case "employer":
               $('.createmodal').modal('show');
              $('.modalname').text('Create New Employer')
             
                break;
        }
    });
