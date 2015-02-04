function updateUser() {
	var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	var email = $('#email').val();
	var editRow = '<span class="glyphicon glyphicon-pencil" id="editRow" onclick ="edit(this)"/>'
	var delRow = '<span class="glyphicon glyphicon-trash" id="delRow" onclick ="deleteRow(this)"/>'
	console.log(firstName, lastName, email);

	$('<tr>' + '<td></td>' + '<td>' + firstName + '</td>' + '<td>' + lastName + '</td>' + '<td>' + email + 
	'</td>' + '<td>' + editRow + '</td>' + '<td>' + delRow + '</td>' + '</tr>').appendTo('#userTable');

}

function edit(localThis) {
	var x = $(localThis).parent().parent();
	var tdName = x.children("td:nth-child(2)");
	var tdlastname = x.children("td:nth-child(3)");
	var tdEmail = x.children("td:nth-child(4)");

	$('#firstName').val(tdName.html());
	$('#lastName').val(tdlastname.html());
	$('#email').val(tdEmail.html());

}
function deleteRow(localThis) {
	var z = $(localThis).parent().parent();
	z.remove();
}


