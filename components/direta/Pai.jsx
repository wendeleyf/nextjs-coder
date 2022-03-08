import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Filho from "./Filho";

export default function Pai(props){
	return (
		<div>
			<h1>Família {props.familia}</h1>
			<Filho nome="Pedro" familia={props.familia}/>
			<Filho nome="Joana" familia={props.familia}/>
			<Filho nome="Gabriel" familia={props.familia}/>
		</div>
	)
}