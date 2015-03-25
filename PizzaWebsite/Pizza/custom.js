$(document).ready(function() {
	$(function() {

		$('.orderonline').click(function(event) {
			event.preventDefault();
			window.location = 'order.html';
		});
	});

	function blink(e) {
		$(e).fadeOut('slow', function() {
			$(this).fadeIn('slow', function() {
				blink(this);
			});
		});
	}

	blink('#blink');

	$(function() {
		$('.fadein img:gt(0)').hide();
		setInterval(function() {
			$('.fadein :first-child').fadeOut().next('img').fadeIn().end().appendTo('.fadein');
		}, 3000);
	});

	$(function() {

		$('.bar').click(function(event) {
			event.preventDefault();
			window.location = 'index.html';
		});
	});

	$('#size').hide();
	$('#tab1').click(function(event) {
		event.preventDefault();
		$('#size').show();

	});

	$('.popup').hide();
	$('.calc').click(function(event) {
		event.preventDefault();
		$('.popup').show();

		var sizeofpizza = $('.small').val();
		var kindofpizza = $('.kind').val();
		var searchfor = $('#searchfor').val();

		$.ajax({
			url : '../data/updated-data.json',
			dataType : "json",
			success : function(result) {

				$.each(result, function(key, value) {

					if (sizeofpizza == 'Small') {
						if (kindofpizza == 'Pepperoni') {
							if (searchfor == value.State) {
								if ($('.myCheckbox').is(':checked')) {
									var totalwithcheese = "<tr><td>" + value.SmallPepCheese + "</td><td>" + "</td></tr>"
									$('.popup span').append(totalwithcheese);
									$('#light').append(totalwithcheese);
								} else {
									var tot = "<tr><td>" + value.SmallPep + "</td><td>" + "</td></tr>"
									$('.popup span').append(tot);
									$('#light').append(tot);
								}
							} else {
								$('#light').hide();
								$('#fade').hide();
								$('.popup').hide();
								alert("Error : State Field is empty or not 'tx'");
							}
						} else if (kindofpizza == 'Vegetarian') {
							if (searchfor == value.State) {
								if ($('.myCheckbox').is(':checked')) {
									var totalwithcheese = "<tr><td>" + value.SmallVegCheese + "</td><td>" + "</td></tr>"
									$('.popup span').append(totalwithcheese);
									$('#light').append(totalwithcheese);
								} else {
									var tot = "<tr><td>" + value.SmallVeg + "</td><td>" + "</td></tr>"
									$('.popup span').append(tot);
									$('#light').append(tot);
								}
							} else {
								$('#light').hide();
								$('#fade').hide();
								$('.popup').hide();
								alert("Error : State Field is empty or not 'tx'");
							}
						} else if (kindofpizza == 'Combo') {
							if (searchfor == value.State) {
								if ($('.myCheckbox').is(':checked')) {
									var totalwithcheese = "<tr><td>" + value.SmallComboCheese + "</td><td>" + "</td></tr>"
									$('.popup span').append(totalwithcheese);
									$('#light').append(totalwithcheese);
								} else {
									var tot = "<tr><td>" + value.SmallCombo + "</td><td>" + "</td></tr>"
									$('.popup span').append(tot);
									$('#light').append(tot);
								}
							} else {
								$('#light').hide();
								$('#fade').hide();
								$('.popup').hide();
								alert("Error : State Field is empty or not 'tx'");
							}
						}
					} else if (sizeofpizza == 'Medium') {
						if (kindofpizza == 'Pepperoni') {
							if (searchfor == value.State) {
								if ($('.myCheckbox').is(':checked')) {
									var totalwithcheese = "<tr><td>" + value.MediumPepCheese + "</td><td>" + "</td></tr>"
									$('.popup span').append(totalwithcheese);
									$('#light').append(totalwithcheese);
								} else {
									var tot = "<tr><td>" + value.MediumPep + "</td><td>" + "</td></tr>"
									$('.popup span').append(tot);
									$('#light').append(tot);
								}
							} else {
								$('#light').hide();
								$('#fade').hide();
								$('.popup').hide();
								alert("Error : State Field is empty or not 'tx'");
							}
						} else if (kindofpizza == 'Vegetarian') {
							if (searchfor == value.State) {
								if ($('.myCheckbox').is(':checked')) {
									var totalwithcheese = "<tr><td>" + value.MediumVegCheese + "</td><td>" + "</td></tr>"
									$('.popup span').append(totalwithcheese);
									$('#light').append(totalwithcheese);
								} else {
									var tot = "<tr><td>" + value.MediumVeg + "</td><td>" + "</td></tr>"
									$('.popup span').append(tot);
									$('#light').append(tot);
								}
							} else {
								$('#light').hide();
								$('#fade').hide();
								$('.popup').hide();
								alert("Error : State Field is empty or not 'tx'");
							}
						} else if (kindofpizza == 'Combo') {
							if (searchfor == value.State) {
								if ($('.myCheckbox').is(':checked')) {
									var totalwithcheese = "<tr><td>" + value.MediumComboCheese + "</td><td>" + "</td></tr>"
									$('.popup span').append(totalwithcheese);
									$('#light').append(totalwithcheese);
								} else {
									var tot = "<tr><td>" + value.MediumCombo + "</td><td>" + "</td></tr>"
									$('.popup span').append(tot);
									$('#light').append(tot);
								}
							} else {
								$('#light').hide();
								$('#fade').hide();
								$('.popup').hide();
								alert("Error : State Field is empty or not 'tx'");
							}
						}
					} else if (sizeofpizza == 'Large') {
						if (kindofpizza == 'Pepperoni') {
							if (searchfor == value.State) {
								if ($('.myCheckbox').is(':checked')) {
									var totalwithcheese = "<tr><td>" + value.LargePepCheese + "</td><td>" + "</td></tr>"
									$('.popup span').append(totalwithcheese);
									$('#light').append(totalwithcheese);
								} else {
									var tot = "<tr><td>" + value.LargePep + "</td><td>" + "</td></tr>"
									$('.popup span').append(tot);
									$('#light').append(tot);
								}
							} else {
								$('#light').hide();
								$('#fade').hide();
								$('.popup').hide();
								alert("Error : State Field is empty or not 'tx'");
							}
						} else if (kindofpizza == 'Vegetarian') {
							if (searchfor == value.State) {
								if ($('.myCheckbox').is(':checked')) {
									var totalwithcheese = "<tr><td>" + value.LargeVegCheese + "</td><td>" + "</td></tr>"
									$('.popup span').append(totalwithcheese);
									$('#light').append(totalwithcheese);
								} else {
									var tot = "<tr><td>" + value.LargeVeg + "</td><td>" + "</td></tr>"
									$('.popup span').append(tot);
									$('#light').append(tot);
								}
							} else {
								$('#light').hide();
								$('#fade').hide();
								$('.popup').hide();
								alert("Error : State Field is empty or not 'tx'");
							}
						} else if (kindofpizza == 'Combo') {
							if (searchfor == value.State) {
								if ($('.myCheckbox').is(':checked')) {
									var totalwithcheese = "<tr><td>" + value.LargeComboCheese + "</td><td>" + "</td></tr>"
									$('.popup span').append(totalwithcheese);
									$('#light').append(totalwithcheese);
								} else {
									var tot = "<tr><td>" + value.LargeCombo + "</td><td>" + "</td></tr>"
									$('.popup span').append(tot);
									$('#light').append(tot);
								}
							} else {
								$('#light').hide();
								$('#fade').hide();
								$('.popup').hide();
								alert("Error : State Field is empty or not 'tx'");
							}
						}

					}
				});
			},

			error : function() {
				console.log("error");
			}
		});
	});

	$(function() {

		$('.add').click(function(event) {
			event.preventDefault();
			window.location = 'checkout.html';
		});
	});

	$(function() {
		$("#datepicker").datepicker();
	});

	$('.type').hide();
	$('#ccn').hide();
	$('.cardnmbr1').hide();
	$('.cardnmbr2').hide();
	$('.date').hide();

	$('#inlineRadio1').click(function(event) {
		event.preventDefault();
		$('#inlineRadio2').prop('checked', true);
		$('.type').hide();
		$('#ccn').hide();
		$('.cardnmbr1').hide();
		$('.date').hide();
		$('.cardnmbr2').hide();
	});
	
	$('#inlineRadio2').click(function(event) {
		event.preventDefault();
		$('#inlineRadio1').prop('checked', true);
		$('.type').show();
		$('#ccn').show();
		$('.cardnmbr1').show();
		$('.date').show();
	});

	$('#optionsRadios1').click(function(event) {
		event.preventDefault();
		$('#optionsRadios2').prop('checked', true);
		$('.cardnmbr2').hide();
		$('.cardnmbr1').show();
		$('.date').show();
	});


	$('#optionsRadios2').click(function(event) {
		event.preventDefault();
		$('#optionsRadios1').prop('checked', true);
		$('.cardnmbr1').hide();
		$('.cardnmbr2').show();
		$('.date').show();
	});

	$('.receipt').hide();
	$('.thankyou').hide();
	$('.btn-default').click(function(event) {
		event.preventDefault();
		$('.receipt').show();
		$('.thankyou').show();

		$("#Form").validate({
			errorLabelContainer : '#errors'
		});

		$('.btn-default').click(function(e) {

			if ($("#Form").valid()) {

				return false;
			}
		});

	});
	$('.btn-default').click(function(event) {
		event.preventDefault();
		var name = $('#name').val();
		var lastname = $('#lastname').val();
		var address = $('#address').val();
		var n1 = $('#n1').val();
		$.ajax({
			url : '../data/updated-data.json',
			dataType : "json",
			success : function(result) {
				$.each(result, function(key, value) {
				if	($('#inlineRadio1').prop('checked', true)) {					
						if ((name == "") || (lastname == "") || (address == "" )) {
							$('#errors').text('Empty Fields!!');
							$('.receipt').hide();
							$('.thankyou').hide();
							$('#light').hide();
							$('#fade').hide();
						} else {
							console.log("YES");
						}
					}
					else if	($('#inlineRadio2').prop('checked', true)) {					
						if (name == "") {
							$('#errors').text('Empty Fields!!');
							$('.receipt').hide();
							$('.thankyou').hide();
							$('#light').hide();
							$('#fade').hide();
						} else {
							console.log("NOO");
						}
					} 

				});
			},
			error : function() {
				alert("error");
			}
		});






















		setInterval(function() {
			var number = "<p>" + 1 + Math.floor(Math.random() * 10000) + "</p>";
			$('.receiptnmbr').append(number);
			$('#light').append(number);
		});

	});

});
