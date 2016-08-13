$(document).ready(function() {



});

function setDrag(divname) {
    $('.' +divname+ '').draggable({ containment: ".dragcontainer", scroll: false });

}

function setdrop(name) {
  
    
    // $(".extra").droppable({
    //     drop: function(event, ui) {
        	
    //     	alert('drop')
    //        var S =  $('.' + name + '').attr('id')
    //     }
    // });
}

function allowDrop(ev) {
    ev.preventDefault();
 
}

function drag(ev) {
	
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.style.opacity = '0.9'; 
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

}
