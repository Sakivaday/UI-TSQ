function updateUser(){
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	var edit = '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>';
	var del = '<span onclick= "del()" class="glyphicon glyphicon-trash" aria-hidden="true"></span>';
	
	var table = document.getElementById('userTable');
	var rowLength = table.rows.length;
	console.log(rowLength)
	
	var row = table.insertRow();
	var td0 = row.insertCell(0);
	var td1 = row.insertCell(1);
	var td2 = row.insertCell(2);
	var td3 = row.insertCell(3);
	var td4 = row.insertCell(4);
	var td5 = row.insertCell(5);
	
	
	td0.innerHTML = rowLength;
	td1.innerHTML = firstName;
	td2.innerHTML = lastName;
	td3.innerHTML = email;
	td4.innerHTML = edit;
	td5.innerHTML = del;
	
// return false;
	
}

function edit(){
	
	
}
function del(){
	
	
}


