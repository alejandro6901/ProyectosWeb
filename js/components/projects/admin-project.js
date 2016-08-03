$(document).ready(function() {

	/*=================================
	=            Events               =
	=================================*/

	$('.createprojectclick').click(function() {
		createProject();
	});

	$('#update').click(function() {
		var id = $('#textupdate').attr('data-id');
		editProject(id);
	});

	/*=================================
	=            Functions            =
	=================================*/
	
	function createProject(){
		var nameSelector = $('.projectname');
		var name = nameSelector.val();

		if (name == "") {
			$('.projectname').attr('placeholder', 'Empty Field');
			return;
		}

		if (!validateName(name)) return;

		var id = ($('.card').length + 1).toString();

		var card = '<div id="card-'+id+'" class="ui raised link card"><div class="content">'+
		'<div class="header">'+name+'</div><i class="right floated edit icon editprojectclick">'+
		'</i><i class="right floated remove icon deleteprojectclick"></i>'+
		'</div><div class="extra content"></div></div>';

		var el = $(card).appendTo('.container');

		setPosition(el);

		setCardEvents(el);

		nameSelector.val('');
		$('.project').modal('hide');
	}

	function editProject(id){
		var elem = $('#'+id);
		var newName = $('#textupdate').val();
        elem.find('div.header').text(newName);
        $('.editmodal').modal('hide');
	}

	function deleteProject(elem){
		elem.remove();
		resetIds();
	}

	function resetIds(){
		var id;
		var currentId;
		$('div[id*=card-]').map(function(key, object){
		  id = $(object).attr('id');
		  currentId = id.substr(id.valueOf('-') + 1);
		  $(object).attr('id', 'card-'+id.replace(currentId, key+1));
		});
	}

	function validateName(name){
		var exist = $('.card').find('.header').filter(function(key, object){
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

    function setCardEvents(el){
    	var elem = $(el);
    	elem.find('.editprojectclick').click(function() {
    		var text = elem.find('div.header').text();
    		var input = $('#textupdate');
    		input.val(text);
    		input.attr('data-id', elem.attr('id'));
			$('.editmodal').modal('show');
		});

		elem.find('.deleteprojectclick').click(function() {
			deleteProject(elem);
		});
    }
});