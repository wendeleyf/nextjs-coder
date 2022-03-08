/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"

export default function contador(){

	const [valor, setValor] = useState(0);

	const incremento = () => { setValor(valor+1) }

	function decremento(){
		setValor(valor-1)
	}
	return(
		<div>
			<h1>Contador</h1>
			<h2>{valor}</h2>
			<button onClick={incremento}>Incrementar</button>
			<button onClick={decremento}>Decrementar</button>
		</div>
	)
}