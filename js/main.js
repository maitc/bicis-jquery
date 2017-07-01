function validateForm(){
	/* Escribe tú código aquí */
		//se trae los value de los inputs.
		var name = $("#name").val();
		var lastname = $("#lastname").val();
		var email = $("#input-email").val();
		var password = $("#input-password").val();
		var selct = $("#selet").val();
		//se trae la ubicación en donde quiero que aparezca mi validacion.
		var inputUno = $(".input-box")[0];
		var inputDos = $(".input-box")[1];
		var inputTres = $(".input-box")[2];
		var inputCuatro = $(".input-box")[3];
		var inputCinco = $(".input-box")[4];

		//name
		function validacionNombre(){
			if(name == ""){
				$(inputUno).append("<span>Campo obligatorio</span>");//span está definido en css con estilo.
				return false;
			}else if(!/^([a-zA-Z])*$/.test(name)){
				$(inputUno).append("<span>Solo se permiten letras</span>");
				return false;
			}
		}
		validacionNombre();
		//lastname
		function validacionApellido(){
			if(lastname == ""){ 
				$(inputDos).append("<span>Campo obligatorio</span>");
				return false;
			}else if(!/^([a-zA-Z])*$/.test(lastname)){
				$(inputDos).append("<span>Solo se permiten letras</span>");
				return false;
			}
		}
		validacionApellido();
		//email
		function validacionCorreo(){
			if(email == ""){ 
				$(inputTres).append("<span>Campo obligatorio</span>");
				return false;
			}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email))){
				$(inputTres).append("<span>Debe ser correo válido</span>");
				return false;
			}
		}
		validacionCorreo();
		//password
		function validacionContrasenia(){
			if(password == ""){ 
				$(inputCuatro).append("<span>Campo obligatorio</span>");
				return false;
			}else if(password.length < 6){
				$(inputCuatro).append("<span>Debe tener al menos 6 caracteres</span>");
				return false;
			}else if(password == "123456" || password == "password" || password == "098765"){
				$(inputCuatro).append("<span>No puede ser '123456', '098765' o 'password'</span>");
				return false;
			}
		}
		validacionContrasenia();
		//select
		function validacionSelect(){//no corre :(((((((((((
			if(selct == ""){ 
				$(inputCinco).append("<span>Campo obligatorio</span>");
				return false;
			}
		}
		validacionSelect();
}