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
		var sign = false;
		$.ajax({
			url : 'userinfo.json',
			success : function(result) {
				$.each(result, function(key, value) {
					if (($('#email').val() == value.Email) && ($('#password').val() == value.Password)) {
						sign = true;
						return;
					}

				});
				if (sign) {
					window.location = 'searchbox.html';

				} else {
					$('#errors').text('User Not Found!!');
				}
			},
			error : function() {
				alert("error");
			}
		});
	});

	$('#details').hide();
	$('.searchbtn').click(function(event) {
		event.preventDefault();
		$('#details').show();
		$('.contact tbody').empty();

		var selected = $('.select').val();
		var searchfor = $('#searchfor').val();

		console.log(selected);

		$.ajax({
			url : 'data/updated-data.json',
			success : function(result) {
				$.each(result, function(key, value) {
					if (selected == 'Account Number') {
						if (searchfor == value.Account) {
							var tr = "<tr><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.Account + "</td><td>" + value.Relationship + "</td></tr>"
							$('.contact tbody').append(tr);
						}
					} else if (selected == 'First Name') {
						if (searchfor == value.FirstName) {
							var tr = "<tr><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.Account + "</td><td>" + value.Relationship + "</td></tr>"
							$('.contact tbody').append(tr);
						}
					} else if (selected == 'Last Name') {
						if (searchfor == value.LastName) {
							var tr = "<tr><td>" + value.FirstName + "</td><td>" + value.LastName + "</td><td>" + value.Account + "</td><td>" + value.Relationship + "</td></tr>"
							$('.contact tbody').append(tr);
						}
					}
				});
			},
			error : function() {
				alert("error");
			}
		});
	});

	$('ul.tabs').each(function() {

		var $active,
		    $content,
		    $links = $(this).find('a');

		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		$active.addClass('active');

		$content = $($active[0].hash);

		$links.not($active).each(function() {
			$(this.hash).hide();
		});

		$(this).on('click', 'a', function(e) {

			$active.removeClass('active');
			$content.hide();

			$active = $(this);
			$content = $(this.hash);

			$active.addClass('active');
			$content.show();

			e.preventDefault();
		});
	});

	$('.verify').click(function(event) {
		event.preventDefault();

		var sel = $('.sb').val();

		$.ajax({
			url : 'data/updated-data.json',
			success : function(result) {
				$.each(result, function(key, value) {

					if (sel == value.DrivingLicense) {
						window.location = 'http://localhost/UI-TSQ/Bootstrap/bootstrap1.html';
					}

				});
			},
			error : function() {
				alert("error");
			}
		});
	});

});

