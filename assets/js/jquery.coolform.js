/*!
 *	jQuery coolForm v1.0
 *	Copyright 2014 13ugman
 *	http://www.owlgraphic.com/owlcarousel/
 *	Licensed under MIT
 */

function coolCheck(field) {
	if(field.is(':checked')) {
		field.parent('.cool-check').addClass('checked');
	}
	else {
		field.parent('.cool-check').removeClass('checked');
	}
}
function coolRadio(field) {
	$(field).each(function() {
		if($(this).is(':checked')) {
			$(this).parent('.cool-radio').addClass('checked');
		}
		else {
			$(this).parent('.cool-radio').removeClass('checked');
		}
	});
}
function coolFile(field) {
	if(field.val()){
		var path = field.val().split('\\');
		field.next('.attached').html(path[path.length-1]).addClass('successful');
	}
}
function coolForm() {
	// coolSelect
	$('form select').each(function() {
		if(!($(this).parent().hasClass('cool-select'))) {
			$(this).wrap('<div class="cool-select"></div>');
		}
	});
	// coolCheck
	$('form input[type="checkbox"]').each(function() {
		if(!($(this).parent().hasClass('cool-check'))) {
			$(this).wrap('<div class="cool-check"></div>');
			coolCheck($(this));
		}
	});
	$('form').on('change', 'input[type="checkbox"]', function() {
		coolCheck($(this));
	});
	// coolRadio
	$('form input[type="radio"]').each(function() {
		if(!($(this).parent().hasClass('cool-radio'))) {
			$(this).wrap('<div class="cool-radio"></div>');
			coolRadio($(this));
		}
	});
	$('form').on('change', 'input[type="radio"]', function() {
		var nameRadioGroup = $(this).attr('name');
		coolRadio('[name="' + nameRadioGroup + '"]');
	});
	// coolFile
	$('form input[type="file"]').each(function() {
		if(!($(this).parent().hasClass('cool-file'))) {
			$(this).wrap('<div class="cool-file"></div>');
			$(this).after('<button type="button"></button><span class="attached"></span>');
			coolFile($(this));
		}
	});
	$('form').on('change', 'input[type="file"]', function() {
		coolFile($(this));
	});
}
// Reset form
$('[type="reset"]').on('click', function() {
	$(this).closest('form').find('.cool-check, .cool-radio').removeClass('checked');
	$(this).closest('form').find('.attached').empty().removeClass('successful');
});
// Cool form
$(document).ready(coolForm);
$(window).load(coolForm);