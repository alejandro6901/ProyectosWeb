$(document).ready(function() {
    //click crear proyecto, crea div proyecto y valida campos vacios
    $('.createprojectclick').click(function() {
        var project = $('.projectname').val();
        
        if (project != "") {
            $('.container').append("<div class= cardstyle>sdfs</div>");
            $('.cardheader').append("<div id=" + "deletecardproject " + "class=" + "deletecard" + ">X</div>");
            $('.cardheader').append("<div id=" + "editcardproject " + "class=" + "editcard" + ">/</div>");
            $('.cardheader').append("<div class=" + "titlecard" + "></div>");
            $('.cardheader').append(project);
            $(".cardheader").append("<hr>");
            $('.cardstyle').append("<div class=" + "cardcontent" + "></div>");
            $('.cardcontent').append("<br><br><br><br><br><br><br>");
            project = $('.projectname').val('');
            $('.project')
                .modal('hide');
        } else {
            $('.projectname').attr('placeholder', 'Empty Field');
        }
        
    });
    //click crear personas, crea div person y valida campos vacios
    $('.createpersonclick').click(function() {
        var person = $('.personname').val();
        if (person != "") {
           $('.panel').append("<div class=cardstyle>sdfs</div>");
           
            $('.person')
                .modal('hide');
          person = $('.personname').val('');
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
