$(document).ready(function() {
	$('.show-all').click(function(event) {
		event.preventDefault();
		$.ajax({
			url : 'data/data.json',
			success : function(result) {
				$.each(result, function(key, value) {
					var tr = "<tr><td>" + (key + 1) + "</td><td>" + value.FirstName + "</td><td>" +
					 value.LastName + "</td><td>" +value.Account+"</td><td>"+value.Relationship+"</td></tr>"
					$('.contacts tbody').append(tr);
				});
			},
			error : function() {
				alert("error");
			}
		});
	});
	$('.search').click(function(event) {
		event.preventDefault();
		$.ajax({
			url : 'data/data.json',
			success : function(result) {
				$.each(result, function(key, value) {
					if ($('#account').val() == value.Account) {
					var tr = "<tr><td>" + (key + 1) + "</td><td>" + value.FirstName + "</td><td>" + value.LastName +
					 "</td><td>" + value.Account +"</td><td>" +value.Relationship+ "</td></tr>"
					$('.contacts tbody').append(tr);
				} });
			},
			error : function() {
				alert("error");
			}
		});
	});

});

