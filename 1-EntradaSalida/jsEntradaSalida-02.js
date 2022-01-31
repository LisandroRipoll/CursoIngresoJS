/*
Lisandro Ripoll
e/s ej2
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{

	//delcaro varliable, minuscula y siguiente linea mayuscula
	var nombreIngresado;

	//guardo nombre en la variable
	//prompt: muestra la cadena de texto a una ventana emergente en opera
	nombreIngresado = prompt("Ingresa su nombre");

	//muestro el nombre
	//concatenar(+): suma la parte literal con la variable 
	alert("Su nombre es" + nombreIngresado);
}	

/* 
declaro variable

entrada:
-prompt

processo:

salida:
-alert

*/
