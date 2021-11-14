document.getElementById('contact-form').addEventListener('submit', function(event) {
	event.preventDefault();
	// generate a five digit number for the contact_number variable
	this.contact_number.value = Math.random() * 100000 | 0;
	// these IDs from the previous steps
	emailjs.sendForm('service_oue75xe', 'contact_form_adjjskg', this)
			.then(function() {
					// console.log('SUCCESS!');
					alert("¡E-mail enviado satisfactoriamente!")
			}, function(error) {
					// console.log('FAILED...', error);
				alert('¡FAILED!... Has ocurred an error');
			});
});