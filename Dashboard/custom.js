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

	$('.searchbtn').click(function(event) {
		event.preventDefault();
		
		var searchfor = $('#searchfor').val();
		$.ajax({
			url : 'data/updated-data.json',
			success : function(result) {
				$.each(result, function(key, value) {
					
					if (searchfor == value.Account) {
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

});

