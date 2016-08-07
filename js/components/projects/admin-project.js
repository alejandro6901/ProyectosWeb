$(document).ready(function() {
    /*=================================
    =            Events               =
    =================================*/
    $('.createprojectclick').click(function() {
        createProject();
    });
    $('#updateproject').click(function() {
        var id = $('#textupdateproject').attr('data-id');
        editProject(id);
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

        if (!validateName(name)) return;

        var id = ($('.cardP').length + 1).toString();
         var card = '<div  id="cardP-' + id + '" class="ui raised link card cardP drag ">'+
            '<div id="drag" class="content"><div class="buttonsdiv"><i class="left floated edit icon editprojectclick"></i>'
             +'<i class="right floated remove icon deleteprojectclick"></i></div>'+
            '<div class="header aligntext">' + name + '</div>' +
            '' +
            '</div><div class="extra content"><br><br></div></div>';

        var el = $(card).appendTo('.container');

        setPosition(el);

        setCardEvents(el);

        nameSelector.val('');
        $('.project').modal('hide');
    }

    function editProject(id) {

        var elem = $('#' + id);
        var newName = $('#textupdateproject').val();

        elem.find('div.header').text(newName);
        $('.editmodalproject').modal('hide');
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

    function validateName(name) {
        var exist = $('.cardP').find('.header').filter(function(key, object) {
            return $(object).text().indexOf(name) != -1;
        })
        if (exist.length > 0) {
            alert('Already Taken');
            return false;
        }
        return true;
    }

    // funcion obtener posicion carta
    function setPosition(el) {
        $(el).css({
            'position': 'absolute',
            'left': positions.positionX,
            'top': positions.positionY
        });
    }

    function setCardEvents(el) {
        var elem = $(el);
        elem.find('.editprojectclick').click(function() {
            var text = elem.find('div.header').text();
            var input = $('#textupdateproject');
            input.val(text);
            input.attr('data-id', elem.attr('id'));
            $('.editmodalproject').modal('show');

        });

        elem.find('.deleteprojectclick').click(function() {
            deleteProject(elem);
        });
    }
});
