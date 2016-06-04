(function(){
	'use strict';

	var ui = {},
		e = {};

	e.setSelectedRadio_handler = function () {

		ui.radiosGroup.each(function(){
			var label = $(this).parent();
			label.removeClass('active');

			if (this.checked){
				label.addClass('active');
			}
		});
	};

	e.setStatusRows_handler = function () {

		ui.formFields.each(function(){

			var field = $(this);
			var row = field.closest('.form-row');

			row.removeClass('focus');

			if (field.is(':focus')){
				row.addClass('focus');
			}
		});
	}

	function initUi () {

		ui.form = $('#markup-test');
		ui.radiosGroup = ui.form.find('.form-item.intereses .row > label input[type=radio]');
		ui.formFields = ui.form.find('.form-row > .form-item input[type=text], .form-row > .form-item select');

		e.setSelectedRadio_handler();
	}

	function initEvents () {

		ui.radiosGroup.on('change', e.setSelectedRadio_handler);
		ui.formFields.on('focus blur', e.setStatusRows_handler);
	}

	$(document).ready(function(){

		initUi();
		initEvents();
	});
	
}(jQuery));