var idcard = 0;
var projecttoupdate;
var pdelete;
$(document).ready(function() {
    // //click crear proyecto, crea div proyecto y valida campos vacios
    // $('.createprojectclick').click(function() {
    //     var project = $('.projectname').val();
    //     if (project != "") {
    //         $('.container').append("<div id=" + idcard + "-body-card class= 'cardstyle'></div>");
    //         var nameproject = project;
    //         var bodycard = $('#' + idcard + '-body-card').append("<div id=" + idcard + "-header-card class= 'cardheader'></div>");
    //         $('#' + idcard + '-header-card').append("<div id=" + idcard + "-deletecardproject " + "class=" + "deletecard" + ">X</div>");
    //         $('#' + idcard + '-header-card').append("<div id=" + idcard + "-editcardproject " + "class=" + "editcard" + ">/</div>");
    //         $('#' + idcard + '-header-card').append("<div id=" + idcard + "-title-card></div>");
    //         $('#' + idcard + '-title-card').append("<p id=" + idcard + "-value-card class=" + "titlecard" + ">" + project + "</p>");
    //         var ptodelete = $('#' + idcard + '-value-card');
    //         $('#' + idcard + '-title-card').append("<hr>");
    //         $('#' + idcard + '-body-card').append("<div  id=" + idcard + "-content-card  class=" + "cardcontent" + "></div>");
    //         $('#' + idcard + '-content-card').append("<br><br><br><br><br><br><br>");
    //         // eliminar la carta del proyecto
    //         $('#' + idcard + '-deletecardproject').click(function() {
    //             $(bodycard).remove();
    //             idcard--;
    //         });
    //         // editar la carta del proyecto
    //         $('#' + idcard + '-editcardproject').click(function() {
    //             $('.edit')
    //                 .modal('show');
    //             $('.editprojectname').val(nameproject);
    //             projecttoupdate = ptodelete;
    //             // pdelete = ptodelete;
    //         });
    //         // obtiene la posicion de la carta
    //         cardposition(idcard);
    //         // limpia el valor del campo de texto
    //         project = $('.projectname').val('');
    //         $('.project')
    //             .modal('hide');
    //         idcard++;
    //     } else {
    //         $('.projectname').attr('placeholder', 'Empty Field');
    //     }
    // });
    // funcion obtener posicion carta
    // function cardposition(id) {
    //     $('#' + id + '-body-card').css({
    //         'position': 'absolute',
    //         'left': positions.positionX,
    //         'top': positions.positionY  
    //     });
    // }
    // editar carta
    $('#update').click(function() {
        
        var vals = $('#textupdate').val();
        projecttoupdate.text(vals);
        $('.edit')
            .modal('hide');
    });

    //click crear personas, crea div person y valida campos vacios
    $('.createpersonclick').click(function() {
        var person = $('.personname').val();
        if (person != "") {
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
        project = $('.projectname').val('');
    });
    $('.discardclickperson').click(function() {
        $('.person')
            .modal('hide');
    });
});
