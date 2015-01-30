/*
function getNumber(){
	
		var integernumber = document.getElementsByClassName('form-control');
		for(i=0; i<integernumber.length; i++){
				maxnum = Math.max(integernumber[i].value);
				document.getElementById('result').innerHTML = maxnum;
			}
				
console.log(integernumber);
}
*/
//------------------------------------------------------------------------------------------------------------
 
 var integernumber = document.getElementsByClassName('form-control');
 function getNumber(){
                // var integernumber = document.getElementsByClassName('form-control'); 
                var maxnum = 0; 
               
                for (i = 0; i < integernumber.length; i++) {
                	 var a = integernumber[i].value;
                if (parseInt(a) > maxnum) {
                 maxnum = a;
    }
}
console.log(maxnum);
}


//-------------------------------------------------------------------------------------------------------------
