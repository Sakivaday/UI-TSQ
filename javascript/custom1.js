
function updateUser(){
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	
	var table = document.getElementById('userTable');
	var rowLength = table.rows.length;
	console.log(rowLength)
	
	var row = table.insertRow();
	var td0 = row.insertCell(0)
	var td1 = row.insertCell(1)
	var td2 = row.insertCell(2)
	var td3 = row.insertCell(3)
	
	
	td0.innerHTML = rowLength;
	td1.innerHTML = firstName
	td2.innerHTML = lastName
	td3.innerHTML = email
	
return false;
	
}