const $d = document,
	$formulario = $d.querySelector(".formContacto"),
	$addContacto = $formulario.querySelector("#add"),
	$nombre = $d.querySelector("#nombre"),
	$apellidos = $d.querySelector("#apellidos"),
	$email = $d.querySelector("#email"),
	$telefono = $d.querySelector("#telefono"),
	$fecNacimiento = $d.querySelector("#fechaNacimiento"),
	$hombre = $d.querySelector("#hombre"),
	$mujer = $d.querySelector("#mujer"),
	$estudios = $d.querySelector("#estudios"),
	$tabla = $d.querySelector("table")

let estud = {
	0: "Sin estudios",
	1: "ESO",
	2: "FP Superior",
	3: "Universidad",
}

$formulario.addEventListener("submit", (e) => {
	e.preventDefault()
	let $fila = $d.createElement("tr")
	let $celNombre = $d.createElement("td")
	$celNombre.append($nombre.value)
	let $celApellidos = $d.createElement("td")
	$celApellidos.append($apellidos.value)
	let $celEmail = $d.createElement("td")
	$celEmail.append($email.value)
	let $celTelefono = $d.createElement("td")
	$celTelefono.append($telefono.value)
	let $celFecha = $d.createElement("td")
	$celFecha.append($fecNacimiento.value)
	let $celSexo = $d.createElement("td")
	let sexo = $hombre.checked ? "Hombre" : "Mujer" // 1 é igual a true
	$celSexo.append(sexo)
	let $celEstudios = $d.createElement("td")
	$celEstudios.append(estud[$estudios.value])

	$fila.append(
		$celNombre,
		$celApellidos,
		$celEmail,
		$celTelefono,
		$celFecha,
		$celSexo,
		$celEstudios
	)
	$tabla.appendChild($fila)
})
