$(document).ready(function() {
    /*=================================
    =            Events               =
    =================================*/
    $('.createemployerclick').click(function() {
        createEmployer();

    });
    $('#updateemployer').click(function() {
        var id = $('#textupdateemployer').attr('data-id');
        editEmployer(id);
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

        if (!validateName(name)) return;

        var id = ($('.cardE').length + 1).toString();

        var employer = '<div id="cardE-' + id + '" class="ui three column grid cardE">'
        +'<div class="column"><div class="ui fluid card"><div class="buttonsdiv">'
        +'<i class="right floated remove icon deleteprojectclick"></i>'
        +'<i class="left floated edit icon editprojectclick"></i></div><div class="image">'
        +'<img class="imgsize" src="./assets/img/employer.png">'
        +'</div><div class="content"><a class="header getname">'+name+'</a>'
        +'</div>'
        +'</div></div></div>';

        var el = $(employer).appendTo('.panelcontainer');


        setCardEvents(el);

        nameSelector.val('');
        $('.employer').modal('hide');
    }

    function editEmployer(id) {
        var elem = $('#' + id);
        var newName = $('#textupdateemployer').val();
        elem.find('.getname').text(newName);
        $('.editmodalemployer').modal('hide');
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

    function validateName(name) {
        var exist = $('.cardE').find('.header').filter(function(key, object) {
            return $(object).text().indexOf(name) != -1;
        })
        if (exist.length > 0) {
            alert('Already Taken');
            return false;
        }
        return true;
    }   

    function setCardEvents(el) {
        var elem = $(el);
        elem.find('.editprojectclick').click(function() {
            var text = elem.find('.getname').text();
            var input = $('#textupdateemployer');
            input.val(text);
            input.attr('data-id', elem.attr('id'));
            $('.editmodalemployer').modal('show');
        });

        elem.find('.deleteprojectclick').click(function() {
            deleteEmployer(elem);
        });
    }
});
