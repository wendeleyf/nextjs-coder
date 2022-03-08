import { useState } from "react"

export default function formulario(){
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [valor, setValor] = useState("inicial");

	function alterarInput(){
		setValor(valor + "!");
	}
	return(
		<div>
			<input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
		</div>
	)
}