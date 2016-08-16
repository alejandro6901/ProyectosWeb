$(document).ready(function() {
    /*=================================
    =            Events               =
    =================================*/
    $('.createclick').click(function() {
        createCard();
    });
    $('.updatecard').click(function() {
        var regular = /^[a-zA-Z0-9ñ\-\/]+$/;
        var input = $('.textupdate');
        if (input.val() === '') {
            return input.attr('placeholder', 'Empty Field');
        }
        if (regular.test(input.val())) {
        var id = input.attr('data-id');

        var sub = id.substr(0, 6);
        if (sub === 'cardP-') {
            var idClass = $('#' + id).find('.getnameP').text();

        } else if (sub === 'cardE-') {
            var idClass = $('#' + id).find('.getnameE').text();
        }
    
        editCard(id, idClass);
       } else {
            input.val('');
            input.attr('placeholder', 'Invalid Name');
        }
    });
    load();
    $('.discardclick').click(function() {
        $('.modal').modal('hide');
        $('.inputname').val('');
        $('.inputname').attr('placeholder', 'Name');
    });

    /*=================================
    =            Functions            =
    =================================*/
    var posX;
    var posY;
    function createCard() {

        var nameSelector = $('.inputname');
        var name = nameSelector.val();
        var regular = /^[a-zA-Z0-9ñ\-\/]+$/;
    
        if (name === "") {
            $('.inputname').attr('placeholder', 'Empty Field');
            return;
        }
        if (regular.test(name)) {
            var namespace = name.replace(/\s+/g, '');

            if ($('.modalname').text() === 'Create New Project') {
                if ($('.' + namespace + '').length === 0) {
                    var id = ($('.cardP').length + 1).toString();

                    var card = '<div  id="cardP-' + id + '" class="ui raised link card cardP  ' + namespace + '">' + '<div class="content"><div class="buttonsdiv">' + '<i class="left floated edit icon editcardclick"></i>' + '<i class="right floated remove icon deletecard"></i></div>' + '<div id=' + namespace + ' class="header getnameP" >' + name + '</div>' + '</div><div id="empty" class="extra content" ondrop="drop(event)" ondragover="allowDrop(event)">' + '</div></div>';

                    var el = $(card).appendTo('.dragcontainer');
                    setPosition(el);
                    setCardEvents(el);
                    dragSelect();
                    saveP(card,posX,posY);
                    nameSelector.val('');
                    nameSelector.attr('placeholder', 'Name');
                    $('.createmodal').modal('hide');
                } else {
                    nameSelector.val('');
                    nameSelector.attr('placeholder', 'Already Taken');
                }

            } else if ($('.modalname').text() === 'Create New Employer') {
                if ($('.' + namespace + '').length === 0) {
                    var id = ($('.cardE').length + 1).toString();

                    var employer = '<div id="cardE-' + id + '" class="ui three column grid cardE ' + namespace + '" draggable="true" ondragstart="drag(event)">' + '<div class="column"><div class="ui fluid card"><div  class="buttonsdiv">' + '<i class="right floated remove icon deletecard"></i>' + '<i class="left floated edit icon editcardclick"></i><button class="moveE"></button></div><div class="content"><a class="header getnameE">' + name + '</a>' + '</div></div></div></div>';
                    // ' + '<img class="imgsize" src="./assets/img/employer.png">' + ' <div class="image"></div>
                
                     var el = $(employer).appendTo('.panelcontainer');
                    setCardEvents(el);
                    saveE(employer);
                    nameSelector.val('');
                    nameSelector.attr('placeholder', 'Name');
                    $('.createmodal').modal('hide');
                } else {
                    nameSelector.val('');
                    nameSelector.attr('placeholder', 'Already Taken');
                }
            }
        } else {
            nameSelector.val('');
            $('.inputname').attr('placeholder', 'Invalid Name');
        }

    }

    // funcion obtener posicion carta
    function setPosition(el) {
        $(el).css({
            'position': 'absolute',
            'left': positions.positionX,
            'top': positions.positionY
        });
            posX = positions.positionX;
            posY = positions.positionY

    }
 

    function editCard(id, className) {

        var elem = $('#' + id);
        var newName = $('.textupdate');
        var newNameVal = newName.val();
        var namespace = newNameVal.replace(/\s+/g, '');
      
        var sub = id.substr(0, 6);
        
        if ($('.' + namespace + '').length === 0) {
            if (sub === 'cardP-') {
                var get = '.getnameP';
            } else if (sub == 'cardE-') {
                var get = '.getnameE';
            }

            elem.find(get).text(newNameVal);
            elem.find('#' + className + '').attr('id', namespace);
            $('.' + className + '').addClass(namespace);
            $('.' + className + '').removeClass(className);

            $('.editmodal').modal('hide');

        } else {
            newName.val('');
            $('.textupdate').attr('placeholder', 'Already Taken');
        }


    }

    function deleteCard(elem) {
        var idCard = $(elem).attr('id');
        var res = idCard.substr(0, 6);
        resetEmployers(idCard);
        elem.remove();
        resetIds(res);
    }

    function resetEmployers(idCard) {

        $('#' + idCard + '').find('.cardE').appendTo('.panelcontainer');
    }

    function resetIds(idCard) {
        var id;
        var currentId;
        $('div[id*=' + idCard + ']').map(function(key, object) {
            id = $(object).attr('id');
            currentId = id.substr(id.valueOf('-') + 1);
            $(object).attr('id', idCard + id.replace(currentId, key + 1));
        });
    }

    function setCardEvents(el) {

        var elem = $(el);
        var idcardVal = elem[0].id.substr(0, 5);
        elem.find('.editcardclick').click(function() {


            if (idcardVal === 'cardP') {

                var text1 = elem.find('.getnameP').text();
                var input = $('.textupdate');
                input.val(text1);
                input.attr('data-id', elem.attr('id'));
                $('.editmodal').find('.header').text('Edit Project')
                $('.editmodal').modal('show');



            } else if (idcardVal === 'cardE') {


                var text = elem.find('.getnameE').text();
                var input = $('.textupdate');
                input.val(text);
                input.attr('data-id', elem.attr('id'));
                $('.editmodal').find('.header').text('Edit Employer')
                $('.editmodal').modal('show');

            }

        });

        elem.find('.deletecard').click(function() {
            deleteCard(elem);
        });
         
    }

});
