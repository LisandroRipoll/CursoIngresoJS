/*
Lisandro Ripoll
e/s ej3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaramos variable
	var nombreIngresado;

	//guardamos el nombre, en caso de que salga HTMLInputElement agregar .value
	nombreIngresado = document.getElementById("txtIdNombre").value;

	//mostrarlo por alert
	alert("su nombre es " + nombreIngresado)
	

}


// txtIdNombre
/*

entrada:
-prompt
-id

procesos:

salida:
-alert

*/