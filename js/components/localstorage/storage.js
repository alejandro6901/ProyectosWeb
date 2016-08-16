var local = {
    'saves': [],
    'positions':[]
 
};

function saveP(el,x,y) {
    debugger
      var getX = x;
      var getY = y;
      var exist = localStorage.getItem('saves');
       var pos = localStorage.getItem('pos')
      if (typeof exist !== 'undefined' && exist !== null && pos !== 'undefined' && pos !== null) {
      	var concat = exist.concat(el+',')
      	 local.saves = [];
         local.saves.push(concat);
       localStorage.setItem('saves', local.saves);
       local.positions.push(x+':'+y);
       localStorage.setItem('pos', local.positions);
      }else{
      
       local.saves.push(el+',');
       localStorage.setItem('saves', local.saves);
       local.positions.push(x+':'+y);
       localStorage.setItem('pos', local.positions);

      }
  
}
function saveE(el) {
      var exist = localStorage.getItem('saves');
      if (typeof exist !== 'undefined' && exist !== null) {
      	var concat = exist.concat(el+',')
      	 local.saves = [];
         local.saves.push(concat);
       localStorage.setItem('saves', local.saves);
      }else{
       local.saves.push(el+',');
       localStorage.setItem('saves', local.saves);
      }
}

function load() {


    var exist = localStorage.getItem('saves');
    var pos = localStorage.getItem('pos')
    debugger
    if (typeof exist !== 'undefined' && exist !== null && pos !== 'undefined' && pos !== null) {
        var splitE = exist.split(',');
        var splitPo = pos.split(',') 
        
        var elem = $(exist);
        var auxA = [];
        for (var i = 0; i < elem.length; i++) {
        	if (elem[i].nodeName != '#text') {
               auxA.push(elem[i]); 
        	}
        	 
        }
        var getID = '';
        var position = '';
        var pX = 0;
        var pY = 0;
        var res = 0;
        for (var i = 0; i < auxA.length; i++) {
        	
        	var atrrID = auxA[i].id.substr(0, 5);


        
            if (atrrID === 'cardP') {
            	
            	for (j = 0; j < splitPo.length; j++) {
            		pX = splitPo[j].substr(0,3);
        	        pY = splitPo[j].substr(4,7);
        	         break;
            	}
            
                $('#containerselec').append(splitE[i]);
                getID = $(splitE[i]).find('.cardP');
                position = getID.prevObject[0];
                    debugger
                 getP(position,pX,pY); 
            } else if (atrrID === 'cardE') {
                $('.panel').append(splitE[i]);
                getID = $(splitE[i]).find('.cardE');
                position = getID.prevObject[0];
            }
           
            // setCardEvents(a);
            // console.log(a);
        }
    }

}
  function getP(el,x,y) {

  	debugger
        $(el).css({
            'position': 'absolute',
            'left':x,
            'top': y
        });
    }