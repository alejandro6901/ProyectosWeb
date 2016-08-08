$(document).ready(function() {
    /*=================================
    =            Events               =
    =================================*/
    $('.createemployerclick').click(function() {
        createEmployer();

    });
    $('#updateemployer').click(function() {
        debugger
        var inputE = $('.textupdateemployer');
       if (inputE.val() === '') {
         return inputE.attr('placeholder', 'Empty Field');
    }
      var id = inputE.attr('data-id');
        var idClass = $('#' + id).find('.getname').text();
        editEmployer(id, idClass);
    });
    $('.discardclickemployer').click(function() {
        $('.employer').modal('hide');
        $('.editmodalemployer').modal('hide');
        $('.employername').val('');

    });
    /*=================================
    =            Functions            =
    =================================*/
    function createEmployer() {
        var nameSelector = $('.employername');
        var name = nameSelector.val();
        if (name === "") {
            $('.employername').attr('placeholder', 'Empty Field');
            return;
        }

    
        if ($('.' + name + '').length === 0) {
            var id = ($('.cardE').length + 1).toString();

            var employer = '<div id="cardE-' + id + '" class="ui three column grid cardE ' + name + '">'
            + '<div class="column"><div class="ui fluid card"><div  class="buttonsdiv">'
             + '<i class="right floated remove icon deleteprojectclick"></i>' 
             + '<i class="left floated edit icon editprojectclick"></i></div><div class="image">' 
             + '<img class="imgsize" src="./assets/img/employer.png">' 
             + '</div><div class="content"><a class="header getname">' + name + '</a>'
              + '</div></div></div></div>';

            var el = $(employer).appendTo('.panelcontainer');


            setCardEvents(el, name);

            nameSelector.val('');
            $('.employer').modal('hide');
        } else {
             nameSelector.val('');
            nameSelector.attr('placeholder', 'Already Taken');
        }
    }

    function editEmployer(id, className) {
   

        var elem = $('#' + id);
        var newName = $('.textupdateemployer');
        var newNameVal = newName.val();
        if ($('.'+newNameVal+'').length === 0) {
    
         elem.find('.getname').text(newNameVal);
        $('.'+className+'').addClass(newNameVal);
        $('.'+className+'').removeClass(className);
        $('.editmodalemployer').modal('hide');
            
    }else{
        newName.val('');
        $('.textupdateemployer').attr('placeholder', 'Already Taken');
    }
       
    }

    function deleteEmployer(elem) {
        elem.remove();
        resetIds();
    }

    function resetIds() {
        var id;
        var currentId;
        $('div[id*=cardE-]').map(function(key, object) {
            id = $(object).attr('id');
            currentId = id.substr(id.valueOf('-') + 1);
            $(object).attr('id', 'cardE-' + id.replace(currentId, key + 1));
        });
    }


    function setCardEvents(el) {
        var elem = $(el);
        elem.find('.editprojectclick').click(function() {
            var text = elem.find('.getname').text();
            var input = $('.textupdateemployer');
            input.val(text);
            input.attr('data-id', elem.attr('id'));
            $('.editmodalemployer').modal('show');
        });

        elem.find('.deleteprojectclick').click(function() {
            deleteEmployer(elem);
        });
    }
});
