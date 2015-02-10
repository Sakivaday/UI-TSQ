$(document).ready(function() {
	$(function() {

		$("#loginpage").validate({
			errorLabelContainer : '#errors'
		});

		$('.signin').click(function(e) {

			if ($("#loginpage").valid()) {

				return false;
			}
		});

	});
	$('.signin').click(function(event) {
		event.preventDefault();
		$.ajax({
			url : 'users.json',
			success : function(result) {
				$.each(result, function(key, value) {
					if (($('#email').val() == value.Email) && ($('#password').val() == value.Password)) {
						window.location = 'searchbox.html';
					}

				});
			},
			error : function() {
				alert("error");
			}
		});
	});
	$('.searchbtn').click(function(event) {
		event.preventDefault();
		$.ajax({
			url : 'data/data.json',
			success : function(result) {
				$.each(result, function(key, value) {
					if ($('#account').val() == value.Account) {
						var tr = "<tr><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.Account + "</td><td>" + value.Relationship + "</td></tr>"
						$('.contact tbody').append(tr);
					}
					
				});
			},
			error : function() {
				alert("error");
			}
		});
	});

});

