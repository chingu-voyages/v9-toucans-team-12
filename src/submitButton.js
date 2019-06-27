var button = $('#submit-button');
$('#agree-checkbox').change(function(event) {
	button.prop('disabled', !$(event.target).is(':checked'));
});