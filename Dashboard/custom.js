$(document).ready(function() {
	$(function() {

		$("#loginpage").validate({
			errorLabelContainer : '#errors'
		});

		$('.signin').click(function(e) {

			if ($("#loginpage").valid()) {
				alert('valid!');
				return false;
			} else {
				alert('invalid!');
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
 						 window.location='searchbox.html';
					}
				});
			},
			error : function() {
				alert("error");
			}
		});
	});

});
