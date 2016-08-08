$(document).ready(function() {
    /*=================================
    =            Events               =
    =================================*/
    $('.createprojectclick').click(function() {
        createProject();
    });
    $('#updateproject').click(function() {
       
        var inputP = $('.textupdateproject');
       if (inputP.val() === '') {
         return inputP.attr('placeholder', 'Empty Field');
    }
      var id = inputP.attr('data-id');
        var idClass = $('#' + id).find('.aligntext').text();
        editProject(id, idClass);
    });
    $('.discardclickproject').click(function() {
        $('.project').modal('hide');
        $('.editmodalproject').modal('hide');
        $('.projectname').val('');
    });
    /*=================================
    =            Functions            =
    =================================*/
    function createProject() {
        var nameSelector = $('.projectname');
        var name = nameSelector.val();
        if (name === "") {
            $('.projectname').attr('placeholder', 'Empty Field');
            return;
        }

        if ($('.'+ name + '').length === 0) {
            var id = ($('.cardP').length + 1).toString();
            var card = '<div  id="cardP-' + id + '" class="ui raised link card cardP ' + name + ' ">' +
                '<div class="content"><div class="buttonsdiv"><i class="left floated edit icon editprojectclick"></i>' + '<i class="right floated remove icon deleteprojectclick"></i></div>' +
                '<div id="'+name+'"class="header aligntext ">' + name + '</div>' +
                '</div><div class="extra content" "></div></div>';

            var el = $(card).appendTo('.container');
            setPosition(el);
            setCardEvents(el,name);
            nameSelector.val('');
            setDrag(name);
            $('.project').modal('hide');
        }else{
            nameSelector.val('');
            nameSelector.attr('placeholder', 'Already Taken');
        }
    }

    function editProject(id,className) {
    
        var elem = $('#' + id);
        var newName = $('.textupdateproject');
        var newNameVal = newName.val();
        if ($('.'+newNameVal+'').length === 0) {
         elem.find('.aligntext').text(newNameVal);
        elem.find('#'+className+'').text(newNameVal);
        $('.'+className+'').addClass(newNameVal);
        $('.'+className+'').removeClass(className);
        $('.editmodalproject').modal('hide');
            
    }else{
         newName.val('');
        $('.textupdateproject').attr('placeholder', 'Already Taken');
    }
       
       
    }

    function deleteProject(elem) {
        elem.remove();
        resetIds();
    }

    function resetIds() {
        var id;
        var currentId;
        $('div[id*=cardP-]').map(function(key, object) {
            id = $(object).attr('id');
            currentId = id.substr(id.valueOf('-') + 1);
            $(object).attr('id', 'cardP-' + id.replace(currentId, key + 1));
        });
    }
    // funcion obtener posicion carta
    function setPosition(el) {
        $(el).css({
            'position': 'absolute',
            'left': positions.positionX,
            'top': positions.positionY
        });
    }

    function setCardEvents(el,idcardP) {
        var elem = $(el);
        elem.find('.editprojectclick').click(function() {
        
            var text = elem.find('#'+idcardP+'').text();
            var input = $('.textupdateproject');
            input.val(text);
            input.attr('data-id', elem.attr('id'));
            $('.editmodalproject').modal('show');

        });

        elem.find('.deleteprojectclick').click(function() {
            deleteProject(elem);
        });
    }
});
