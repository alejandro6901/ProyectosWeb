var local = {
    'save': [],
    // 'employer': [],
};

function save(el) {
    debugger
     
      var exist = localStorage.getItem('saves');
      if (typeof exist !== 'undefined' && exist !== null) {
      	var concat = exist.concat(el+',')
      	   local.save = [];
         local.save.push(concat);
       localStorage.setItem('saves', local.save);
      }else{
      
       local.save.push(el+',');
       localStorage.setItem('saves', local.save);

      }
   



}

function load() {

    debugger
    var exist = localStorage.getItem('saves');
    if (typeof exist !== 'undefined' && exist !== null) {
        var split = exist.split(',');
        var elem = $(exist);
        var auxA = [];
        for (var i = 0; i < elem.length; i++) {
        	if (elem[i].nodeName != '#text') {
               auxA.push(elem[i]); 
        	}
        	 
        }
        var getID = '';
        var position = '';
        for (var i = 0; i < auxA.length; i++) {
        	
        	var atrrID = auxA[i].id.substr(0, 5);
            if (atrrID === 'cardP') {
                $('#containerselec').append(split[i]);
                getID = $(split[i]).find('.cardP');
                position = s.prevObject[0];
            } else if (atrrID === 'cardE') {
                $('.panel').append(split[i]);
                getID = $(split[i]).find('.cardE');
                position = s.prevObject[0];
            }
            // setPosition(a); 
            // setCardEvents(a);
            // console.log(a);
        }
    } else {

    }

}
