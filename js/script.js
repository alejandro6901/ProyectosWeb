var id =0;
$(document).ready(function() {
    //click crear proyecto, crea div proyecto y valida campos vacios
    $('.createprojectclick').click(function() {
        var project = $('.projectname').val();
        
        if (project != "") {
            $('.container').append("<div id="+id+"-body-card class= 'cardstyle'></div>");
            $('#'+id+'-body-card').append("<div id="+id+"-header-card class= 'cardheader'></div>");
            // $('.cardheader').append("<div  id=" + "deletecardproject " + "class=" + "deletecard" + ">X</div>");
            // $('.cardheader').append("<div id=" + "editcardproject " + "class=" + "editcard" + ">/</div>");
            $('#'+id+'-header-card').append("<div id="+id+"-title-card class=" + "titlecard" + "></div>");
            $('#'+id+'-title-card').append(project);
            $('#'+id+'-title-card').append("<hr>");
            $('#'+id+'-body-card').append("<div  id="+id+"-content-card  class=" + "cardcontent" + "></div>");
            $('#'+id+'-content-card').append("<br><br><br><br><br><br><br>");
            cardposition(id);
            project = $('.projectname').val('');
            $('.project')
                .modal('hide');
                id++;
        } else {
            $('.projectname').attr('placeholder', 'Empty Field');
        }
        
    });
    function cardposition(id) {
         $('#'+id+'-body-card').css({
            'position': 'absolute',
            'left': positions.positionX,
            'top':  positions.positionY            
        });
    }

    //click crear personas, crea div person y valida campos vacios
    $('.createpersonclick').click(function() {
        var person = $('.personname').val();
        if (person != "") {
            $('.panel').append("<div id="+id+"-body-card class= 'cardstyle'></div>");
            $('#'+id+'-body-card').append("<div id="+id+"-header-card class= 'cardheader'></div>");
            // $('.cardheader').append("<div  id=" + "deletecardproject " + "class=" + "deletecard" + ">X</div>");
            // $('.cardheader').append("<div id=" + "editcardproject " + "class=" + "editcard" + ">/</div>");
            $('#'+id+'-header-card').append("<div id="+id+"-title-card class=" + "titlecard" + "></div>");
            $('#'+id+'-title-card').append(person);
            $('#'+id+'-title-card').append("<hr>");
            $('#'+id+'-body-card').append("<div  id="+id+"-content-card  class=" + "cardcontent" + "></div>");
            $('#'+id+'-content-card').append("<br><br><br><br><br><br><br>");
            
            person = $('.personname').val('');
            $('.person')
                .modal('hide');
                id++;
        } else {
            $(".personname").attr("placeholder", "Empty Field");
        }
    });
    $('.discardclickproject').click(function() {
        $('.project')
            .modal('hide');
    });
    $('.discardclickperson').click(function() {
        $('.person')
            .modal('hide');
    });
    
     $('#deletecardproject').click(function() {
           $('.cardstyle').remove();
  });
        $('#editcardproject').click(function() {
         $('.project')
            .modal('show');
        

  });
  

});
