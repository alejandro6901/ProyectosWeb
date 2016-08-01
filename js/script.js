var id =0;
var projecttoupdate;
var pdelete;
$(document).ready(function() {
    //click crear proyecto, crea div proyecto y valida campos vacios
    $('.createprojectclick').click(function() {
        var project = $('.projectname').val();
      
        if (project != "") {
            $('.container').append("<div id="+id+"-body-card class= 'cardstyle'></div>");
            var nameproject = project;
            var bodycard = $('#'+id+'-body-card').append("<div id="+id+"-header-card class= 'cardheader'></div>");
            $('#'+id+'-header-card').append("<div id="+id+ "-deletecardproject " + "class=" + "deletecard" + ">X</div>");
            $('#'+id+'-header-card').append("<div id="+id+ "-editcardproject " + "class=" + "editcard" + ">/</div>");
            $('#'+id+'-header-card').append("<div id="+id+"-title-card class=" + "titlecard" + "></div>");
            var title = $('#'+id+'-title-card').append("<p id="+id+ "-value-card>"+project+"</p>");
            var ptodelete = $('#'+id+'-value-card');
            $('#'+id+'-title-card').append("<hr>");
            $('#'+id+'-body-card').append("<div  id="+id+"-content-card  class=" + "cardcontent" + "></div>");
            $('#'+id+'-content-card').append("<br><br><br><br><br><br><br>");
           $('#'+id+'-deletecardproject').click(function() {
           $(bodycard).remove();
             id--;
             });
             $('#'+id+'-editcardproject').click(function() {
              $('.edit')
              .modal('show');
              $('.editprojectname').val(nameproject);
              projecttoupdate = title;
              pdelete = ptodelete;
            });
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
    $('#update').click(function(){
        var vals =  $('#textupdate').val();
      projecttoupdate.remove(pdelete.id);
      $('#'+id+'-header-card').append("<div id="+id+"-title-card class=" + "titlecard" + "></div>");
      $('#'+id+'-title-card').append("<p id="+id+ "-value-card>"+vals+"</p>");
           $('.edit')
    .modal('hide');
    });

    //click crear personas, crea div person y valida campos vacios
    $('.createpersonclick').click(function() {
        var person = $('.personname').val();
        if (person != "") {
            // $('.panel').append("<div id="+id+"-body-card class= 'cardstyle'></div>");
            // $('#'+id+'-body-card').append("<div id="+id+"-header-card class= 'cardheader'></div>");
            // // $('.cardheader').append("<div  id=" + "deletecardproject " + "class=" + "deletecard" + ">X</div>");
            // // $('.cardheader').append("<div id=" + "editcardproject " + "class=" + "editcard" + ">/</div>");
            // $('#'+id+'-header-card').append("<div id="+id+"-title-card class=" + "titlecard" + "></div>");
            // $('#'+id+'-title-card').append(person);
            // $('#'+id+'-title-card').append("<hr>");
            // $('#'+id+'-body-card').append("<div  id="+id+"-content-card  class=" + "cardcontent" + "></div>");
            // $('#'+id+'-content-card').append("<br><br><br><br><br><br><br>");
            
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
  

});
