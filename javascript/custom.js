function getUserInfo(){
	
	var array = [10,20,46,70,2];
	{
	console.log(array.lenght);
	}
			var formCtrls = document.getElementsByClassName('form-control');
			var inputVals = "";
			for(i=0;i<formCtrls.length;i++){
				 inputVals ="<p>" + (inputVals + formCtrls[i].value )+ "</p>";
				
			
			}
			document.getElementById('result').innerHTML = inputVals;
			
}
